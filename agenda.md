# Agenda de actividades
#### En cada temática hay un resumen, referencias, avances y pendientes.
## PostgreSQL + PostGIS + QGIS
Completar talleres introductorio (y registrar desarrollos en un repositorio) sobre el funcionamiento de PostgreSQL y sus conexiones con QGIS para importar datos espaciales. [Tutorial](https://johagis.com/importacion-masiva-postgis) sobre cómo importar datos a PostGIS. Curso más completo [aquí](https://johagis.com/curso-postgresql-postgis-para-aplicaciones-gis) (Joha GIS).

[Serie de videos](https://www.youtube.com/playlist?list=PL_YyCdnLDJAjD4sfB3z2p_MOcleKUCVwy) formato taller sobre PostGIS - Extensión de PostgreSQL para trabajar con bases de datos espaciales (Juan Manuel Suárez).

## Google Colab
Introducción a Google Colab para programar con Python usando Jupyter Notebook en los servidores de Google. Guía introductoria [aquí.](https://www.youtube.com/watch?v=8VFYs3Ot_aA)

## Google Earth Engine
Introducción a Google Earth Engine Code usando JavaScript y la ImageCollection disponible. Filtrar datos, calcular con imágenes y mapear utilizando funciones en el servidor. Serie de videos introductorios de [Program Sam](https://www.youtube.com/@ProgramSam) [aquí.](https://www.youtube.com/playlist?list=PLivRXhCUgrZpCR3iSByLYdd_VwFv-3mfs) Finalizada con éxito la práctica del taller, probar la publicación de Apps (visualizadores) y assets.

## Mapas topográficos con R
Introducción a la creación de mapas topográficos personalizados usando R. Serie de videos tutoriales de [Milos Popovic](https://www.linkedin.com/in/milos-popovic-phd-89778117/) [aquí.](https://www.youtube.com/watch?v=y_Kzg24Ciuo)

## GeoNode
Capacitación hacia IDE. GeoNode como gestor de contenidos geoespaciales y plataforma de datos. Artículo de interés [aquí.](https://mappinggis.com/2017/03/geonode-que-es/) Creación de cuenta personal.

## GeoServer
Capacitación hacia IDE. GeoServer como servidor que facilita la publicación y edición de datos espaciales en la web. Artículo Geoserver para novatos [aquí.](https://mappinggis.com/2022/06/geoserver-para-novatos/)

## Infraestructura de Datos Espaciales
* PostgreSQL + PostGIS: Base de datos espacial que almacena geometrías y atributos.
* GeoServer: Se conecta a PostgreSQL/PostGIS como fuente de datos. Lee las tablas espaciales y las transforma en servicios estándar (WMS, WFS, WCs). Genera los mapas y responde las consultas.
* Geovisor IDE: Consume los servicios WMS, WFS de GeoServer. Muestra los mapas al usuario final.
* GeoNetwork: Cataloga georreferenciados, accede a los metadatos.
* GeoNode: Plataforma integral (datos, documentos, interfaz, atlas).

## Diseño web con Wordpress
Edición de Wordpress usando como antecedente .html y .css. Inserción de visualizadores web y botones interactivos.

## Global Human Settlement Layer
Conocer el funcionamiento del proceso de Global Human Settlement Layer (Comisión Europea, Copernicus) y su descarga e integración a visualizadores Google Earth Engine Apps. [Ejemplo](https://google.earthengine.app/view/population-explorer)

## Miscelánea
* Herramientas para crear un mapa web interactivo. Mapping GIS. [Pendiente](https://mappinggis.com/2024/05/herramientas-crear-mapa-web-interactivo/)
* Leaflet + React: publicando mapas interactivos en la web. [Pendiente](https://mappinggis.com/2024/01/leaflet-react-publicar-mapas-interactivos-en-la-web/)

## Índice 1 - PostgreSQL + PostGIS
Consultas y visualización de tablas con datos espaciales. Carga de archivos shape mediante SHP2PGSQL (PostGIS Shapefile Import/Export Manager), conexión a la base de datos e importación de archivos en directorio. Carga de archivos usando Data Base Manager de QGIS. Funciones, creación de índices espaciales para cada tabla. Consultas de área y relaciones espaciales (ST_Transform, ST_Area, ST_Contains, ST_Intersects).
