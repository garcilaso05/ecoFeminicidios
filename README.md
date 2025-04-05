# ecoFeminicidios

Sistema de gestión y visualización de casos de feminicidios desarrollado durante la Hackatón URV 2025, Universidad Rovira i Virgili.

## 💡 Contexto

Este proyecto nació durante una Hackatón organizada en la Universidad Rovira i Virgili en 2025, donde equipos multidisciplinarios trabajaron para crear soluciones tecnológicas contra la violencia de género. Nuestro equipo, formado por estudiantes de Derecho, Trabajo Social e Ingeniería Informática (Roger García y Khady Diouf), desarrolló esta herramienta para facilitar el registro, seguimiento y análisis de casos de feminicidios.

## 🌟 Características Principales

- **Gestión de Casos**
  - Inserción simple de nuevos casos
  - Modificación y ampliación de información
  - Interface intuitiva para trabajadores sociales y personal jurídico

- **Visualización de Datos**
  - Representación geográfica en mapas interactivos
  - Gráficos estadísticos personalizables
  - Patrones temporales y geográficos

- **Análisis y Consultas**
  - Sistema de búsqueda con múltiples filtros
  - Consultas predefinidas para casos específicos
  - Exportación de datos para informes

## 📊 Datos

- **Origen**: Basado en datos reales recopilados y disponibles en [este documento](https://docs.google.com/spreadsheets/d/1IYP4Nis5JF_O0ws-beW9SRq-gcoRo9FqC4UpwjJsZFc/edit?usp=sharing)
- **Archivos de prueba**:
  - `esquemaTablas.sql`: Estructura de la base de datos
  - `insercionesCasos.sql`: Datos de casos reales anonimizados

## 🚀 Inicio Rápido

1. Abre `index.html` en tu navegador
2. Inicia sesión con las credenciales proporcionadas
3. Accede a las diferentes funcionalidades:
   - Registro de nuevos casos
   - Consulta y modificación de casos existentes
   - Visualización de estadísticas y mapas

## 🛠️ Tecnologías

- HTML5
- CSS3 con diseño responsivo
- JavaScript vanilla
- Bibliotecas:
  - [AlaSQL](https://github.com/agershun/alasql) - Motor SQL en memoria
  - [vis.js](https://visjs.org/) - Visualización de diagramas
  - [Leaflet](https://leafletjs.com/) - Mapas interactivos
  - [Highcharts](https://www.highcharts.com/) - Gráficos y visualizaciones

## 🔒 Seguridad

- Autenticación de usuarios (admin 1234)
- Validación de datos de entrada
- Prevención de inyección SQL
- Anonimización de datos sensibles

## ✨ Agradecimientos

- Universidad Rovira i Virgili por la organización de la Hackatón
- Equipo multidisciplinar de estudiantes
- Organizaciones que proporcionaron los datos originales