function cargarGrafico() {
    let datosCCAA = [];
    let datosMensuales = [];

    try {
        // Víctimas por CCAA
        const resultadoCCAA = alasql("SELECT [CCAA] AS region, COUNT(*) AS total FROM ECOVICTIMA GROUP BY [CCAA]");
        datosCCAA = resultadoCCAA.map(r => [r.region, r.total]);

        // Víctimas por mes
        const resultadoMeses = alasql(`
            SELECT
                YEAR([Fecha]) AS anyo,
                MONTH([Fecha]) AS mes,
                COUNT(*) AS total
            FROM ECOVICTIMA
            GROUP BY YEAR([Fecha]), MONTH([Fecha])
            ORDER BY anyo, mes
        `);

        datosMensuales = resultadoMeses.map(r => {
            const mes = r.mes.toString().padStart(2, '0'); // Asegura formato 01, 02, ...
            return [`${r.anyo}-${mes}`, r.total];
        });

    } catch (e) {
        alert("No se pudo generar el gráfico. ¿Has cargado la tabla ECOVICTIMA?");
        console.error(e);
        return;
    }

    // Gráfico por CCAA
    Highcharts.chart('graficoContainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Víctimas por Comunidad Autónoma'
        },
        xAxis: {
            type: 'category',
            title: { text: 'CCAA' }
        },
        yAxis: {
            title: { text: 'Número de víctimas' }
        },
        series: [{
            name: 'Víctimas',
            data: datosCCAA
        }]
    });

    // Segundo gráfico por mes
    const segundoContenedor = document.createElement('div');
    segundoContenedor.id = 'graficoAnual';
    segundoContenedor.style.width = '100%';
    segundoContenedor.style.height = '500px';
    document.getElementById('graficos').appendChild(segundoContenedor);

    Highcharts.chart('graficoAnual', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Evolución mensual de víctimas'
        },
        xAxis: {
            categories: datosMensuales.map(d => d[0]),
            title: { text: 'Mes' }
        },
        yAxis: {
            title: { text: 'Número de víctimas' }
        },
        series: [{
            name: 'Víctimas',
            data: datosMensuales.map(d => d[1])
        }]
    });
}
