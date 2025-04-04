# easySQL

easySQL es una herramienta web interactiva para diseñar, visualizar y gestionar bases de datos SQL de manera sencilla e intuitiva.

## 🌟 Características

- **Editor Visual de Esquemas**
  - Creación y edición de tablas con interfaz gráfica
  - Soporte para tipos ENUM personalizados
  - Gestión visual de relaciones entre tablas
  - Visualización interactiva del diagrama de la base de datos

- **Gestión de Datos**
  - Editor SQL integrado para consultas directas
  - Interfaz visual para inserción y edición de datos
  - Visualización de datos en formato de tarjetas
  - Búsqueda y filtrado avanzado

- **Exportación e Importación**
  - Exportación del esquema a SQL
  - Exportación de datos insertados
  - Importación de archivos SQL
  - Carga masiva de datos

## 🚀 Inicio Rápido

1. Abre `index.html` en tu navegador web
2. Inicia sesión con tus credenciales
3. Comienza a crear tu esquema de base de datos:
   - Usa el botón "Crear Tabla" para añadir tablas
   - Define tipos ENUM con "Crear Enum"
   - Establece relaciones con "Gestionar Relaciones"

## 🛠️ Tecnologías

- HTML5
- CSS3 con diseño responsivo
- JavaScript vanilla
- Bibliotecas:
  - [AlaSQL](https://github.com/agershun/alasql) - Motor SQL en memoria
  - [vis.js](https://visjs.org/) - Visualización de diagramas
  - [Leaflet](https://leafletjs.com/) - Mapas interactivos
  - [Highcharts](https://www.highcharts.com/) - Gráficos y visualizaciones

## 📁 Estructura del Proyecto

easySQL/
│
├── index.html          # Página principal
├── styles.css         # Estilos CSS
├── README.md          # Documentación
│
└── scripts/
    ├── main.js        # Lógica principal
    ├── createTable.js # Creación de tablas
    ├── editTable.js   # Edición de tablas
    ├── deleteTable.js # Eliminación de tablas
    ├── editEnum.js    # Gestión de ENUMs
    ├── createEnum.js  # Creación de ENUMs
    ├── insertions.js  # Gestión de inserciones
    ├── tabs.js        # Control de pestañas
    ├── dataView.js    # Visualización de datos
    ├── mapa.js        # Funcionalidad de mapas
    ├── graficos.js    # Generación de gráficos
    ├── animations.js  # Animaciones UI
    └── auth.js        # Autenticación

## 🔒 Seguridad

- Implementa autenticación básica
- Valida entradas de usuario
- Previene inyección SQL básica

## 🤝 Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✨ Agradecimientos

- Inspirado en herramientas como phpMyAdmin y MySQL Workbench
- Diseñado para facilitar el aprendizaje y diseño de bases de datos