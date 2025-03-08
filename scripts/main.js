// Esquema para almacenar las tablas
const schema = {
    tables: {} // { nombreTabla: { columns: [], data: [] } }
};

// Inicializar el mapa de clases
const container = document.getElementById('network');
const nodes = new vis.DataSet([]);
const edges = new vis.DataSet([]);
const data = { nodes: nodes, edges: edges };
const options = { 
    nodes: { shape: 'box', font: { size: 12 }, widthConstraint: { maximum: 200 } },
    edges: { arrows: 'to' }
};
const network = new vis.Network(container, data, options);

// Actualizar el mapa de clases
function updateClassMap() {
    nodes.clear();
    edges.clear();
    for (const tableName in schema.tables) {
        const table = schema.tables[tableName];
        const columns = table.columns.map(col => {
            let colStr = `${col.name} ${col.type}`;
            if (col.size) colStr += `(${col.size})`;
            if (col.pk) colStr += ' PK';
            if (col.check) colStr += ` CHECK(${col.check})`;
            return colStr;
        }).join('\n');
        nodes.add({ id: tableName, label: `${tableName}\n${columns}` });
    }
}

// Ejecutar consultas SQL manuales
function executeSQL() {
    const query = document.getElementById('sql-input').value.trim();
    const resultDiv = document.getElementById('result');
    try {
        const res = alasql(query);
        resultDiv.innerText = JSON.stringify(res, null, 2);
        updateClassMap();
    } catch (e) {
        resultDiv.innerText = 'Error: ' + e.message;
    }
}

// Descargar el SQL generado
function downloadSQL() {
    let sqlContent = '';
    for (const tableName in schema.tables) {
        const table = schema.tables[tableName];
        const columns = table.columns.map(col => {
            let colDef = `${col.name} ${col.type}`;
            if (col.size) colDef += `(${col.size})`;
            if (col.pk) colDef += ' PRIMARY KEY';
            if (col.check) colDef += ` CHECK(${col.check})`;
            return colDef;
        }).join(', ');
        sqlContent += `CREATE TABLE ${tableName} (${columns});\n`;
    }
    const blob = new Blob([sqlContent], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schema.sql';
    a.click();
    URL.revokeObjectURL(url);
}