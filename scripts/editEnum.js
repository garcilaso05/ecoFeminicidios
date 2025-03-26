function openEditEnumModal() {
    const enumName = document.getElementById('enumDropdown').value;
    if (!enumName) {
        alert('Por favor, selecciona un enum para editar.');
        return;
    }

    const enumData = schema.tables[enumName];
    if (!enumData || !enumData.isEnum) {
        alert('El elemento seleccionado no es un enum válido.');
        return;
    }

    const container = document.getElementById('editEnumValuesContainer');
    container.innerHTML = ''; // Reiniciar el contenedor

    enumData.values.forEach(value => {
        const valueInput = document.createElement('div');
        valueInput.className = 'enum-value-input';
        valueInput.innerHTML = `
            <input type="text" value="${value}" class="enum-value">
            <button onclick="removeEnumValueInput(this)">Eliminar</button>
        `;
        container.appendChild(valueInput);
    });

    document.getElementById('editEnumName').value = enumName;
    document.getElementById('editEnumModal').style.display = 'block';
}

function addEnumValueInput() {
    const container = document.getElementById('editEnumValuesContainer');
    const valueInput = document.createElement('div');
    valueInput.className = 'enum-value-input';
    valueInput.innerHTML = `
        <input type="text" placeholder="Nuevo valor del Enum" class="enum-value">
        <button onclick="removeEnumValueInput(this)">Eliminar</button>
    `;
    container.appendChild(valueInput);
}

function removeEnumValueInput(button) {
    const container = document.getElementById('editEnumValuesContainer');
    container.removeChild(button.parentElement);
}

function saveEnumChanges() {
    const enumName = document.getElementById('editEnumName').value.trim();
    const values = [];
    const valueInputs = document.querySelectorAll('#editEnumValuesContainer .enum-value-input .enum-value');
    valueInputs.forEach(input => {
        const value = input.value.trim();
        if (value) values.push(value);
    });

    if (values.length === 0) {
        alert('Por favor, añade al menos un valor.');
        return;
    }

    schema.tables[enumName].values = values; // Update the enum values in the schema
    populateEnumDropdown(); // Añadido para actualizar el dropdown
    updateClassMap(); // Update the visualization
    closeEditEnumModal();
    alert(`Enum "${enumName}" actualizado exitosamente.`);
}

function closeEditEnumModal() {
    document.getElementById('editEnumModal').style.display = 'none';
}
