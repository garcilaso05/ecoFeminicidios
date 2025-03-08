function openCreateTableModal() {
    const container = document.getElementById('columnsContainer');
    container.innerHTML = ''; // Reiniciar el contenedor
    addColumnInput(); // Añadir un solo campo inicial
    document.getElementById('tableName').value = ''; // Limpiar el nombre
    document.getElementById('createTableModal').style.display = 'block';
}

function closeCreateTableModal() {
    document.getElementById('createTableModal').style.display = 'none';
}

function addColumnInput() {
    const container = document.getElementById('columnsContainer');
    const newInput = document.createElement('div');
    newInput.className = 'column-input';
    newInput.innerHTML = `
        <input type="text" placeholder="Nombre de elemento" class="col-name">
        <select class="col-type">
            <option value="INT">INT</option>
            <option value="STRING">STRING</option>
            <option value="FLOAT">FLOAT</option>
            <option value="BOOLEAN">BOOLEAN</option>
        </select>
        <input type="text" placeholder="Tamaño (opcional)" class="col-size">
        <label><input type="checkbox" class="col-pk"> Clave Primaria</label>
        <input type="text" placeholder="CHECK (ej. > 0)" class="col-check">
    `;
    container.appendChild(newInput);
}

function createTableFromForm() {
    const tableName = document.getElementById('tableName').value.trim();
    if (!tableName) {
        alert('Por favor, ingresa un nombre para la tabla.');
        return;
    }

    const columns = [];
    const columnInputs = document.querySelectorAll('.column-input');
    columnInputs.forEach(input => {
        const name = input.querySelector('.col-name').value.trim();
        const type = input.querySelector('.col-type').value;
        const size = input.querySelector('.col-size').value.trim();
        const pk = input.querySelector('.col-pk').checked;
        const check = input.querySelector('.col-check').value.trim();

        if (name) {
            let colDef = `${name} ${type}`;
            if (size) colDef += `(${size})`;
            if (pk) colDef += ' PRIMARY KEY';
            if (check) colDef += ` CHECK(${check})`;
            columns.push(colDef);
        }
    });

    if (columns.length === 0) {
        alert('Por favor, añade al menos un elemento.');
        return;
    }

    const query = `CREATE TABLE ${tableName} (${columns.join(', ')})`;
    try {
        alasql(query);
        schema.tables[tableName] = {
            columns: columns.map(col => {
                const parts = col.split(' ');
                return {
                    name: parts[0],
                    type: parts[1],
                    size: col.includes('(') ? col.split('(')[1].split(')')[0] : null,
                    pk: col.includes('PRIMARY KEY'),
                    check: col.includes('CHECK') ? col.split('CHECK(')[1].slice(0, -1) : null
                };
            }),
            data: []
        };
        updateClassMap();
        closeCreateTableModal();
    } catch (e) {
        alert('Error al crear la tabla: ' + e.message);
    }
}