function setupDataTab() {
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    // Iterar sobre cada tabla
    for (const tableName in schema.tables) {
        if (!schema.tables[tableName].isEnum) {
            createTableDataSection(tableName, container);
        }
    }
}

function createTableDataSection(tableName, container) {
    try {
        // Obtener datos de la tabla
        const result = alasql(`SELECT * FROM ${tableName}`);
        if (result.length === 0) return; // No mostrar tablas vacías

        const section = document.createElement('div');
        section.className = 'data-section';
        
        // Encontrar la columna de clave primaria
        const pkColumn = schema.tables[tableName].columns.find(col => col.pk);
        if (!pkColumn) return;

        section.innerHTML = `<div class="data-table-title">${tableName}</div>`;
        
        const grid = document.createElement('div');
        grid.className = 'data-grid';

        result.forEach(row => {
            const block = document.createElement('div');
            block.className = 'data-block';
            
            const pkValue = row[pkColumn.name];
            let detailsHtml = '';

            // Generar HTML para los detalles
            schema.tables[tableName].columns.forEach(col => {
                const value = formatValue(row[col.name], col.type);
                detailsHtml += `
                    <div class="data-row">
                        <div class="data-label">${col.name}:</div>
                        <div>${value}</div>
                    </div>`;
            });

            block.innerHTML = `
                <div><strong>${pkColumn.name}:</strong> ${pkValue}</div>
                <div class="data-details">${detailsHtml}</div>
            `;

            block.addEventListener('click', function() {
                const details = this.querySelector('.data-details');
                const wasHidden = details.style.display === 'none' || !details.style.display;
                
                // Ocultar todos los detalles primero
                grid.querySelectorAll('.data-details').forEach(d => {
                    d.style.display = 'none';
                });
                
                // Mostrar/ocultar los detalles del bloque actual
                details.style.display = wasHidden ? 'block' : 'none';
            });

            grid.appendChild(block);
        });

        section.appendChild(grid);
        container.appendChild(section);
    } catch (error) {
        console.error(`Error al cargar datos de ${tableName}:`, error);
    }
}

function formatValue(value, type) {
    if (value === null || value === undefined) return '-';
    
    switch (type) {
        case 'BOOLEAN':
            return value ? 'Verdadero' : 'Falso';
        case 'DATE':
            return new Date(value).toLocaleDateString();
        default:
            return value.toString();
    }
}
