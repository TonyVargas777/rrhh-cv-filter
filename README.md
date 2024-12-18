# CV Filter App

## Descripción

CV Filter App es una aplicación desarrollada con **React** y **Vite** diseñada específicamente para equipos de recursos humanos que necesiten filtrar grandes cantidades de currículums vitae en formatos **PDF** y/o **Word**. 

Esta herramienta permite agilizar y optimizar el proceso de selección de candidatos al buscar palabras clave relevantes en los documentos.

## Funcionalidades

- **Campo de Palabras Clave:** Introduce las palabras clave que deseas buscar en los CVs.
- **Subida de Archivos:** Sube múltiples currículums en formato PDF y/o Word.
- **Resultados Filtrados:** Visualiza los resultados en pantalla.
- **Exportación:** Genera un archivo PDF con los resultados obtenidos para compartir o almacenar.

## Tecnologías Utilizadas

- **React**: Para la creación de la interfaz de usuario.
- **Vite**: Para un entorno de desarrollo rápido y eficiente.
- **JavaScript**: Para la lógica de filtrado.
- **HTML/CSS**: Para el diseño y estructura visual.
- **Bibliotecas Adicionales:**
  - `pdf-lib`: Para la generación y manipulación de archivos PDF.
  - `mammoth`: Para la conversión y lectura de archivos Word.
  - `file-saver`: Para guardar archivos en el dispositivo del usuario.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TonyVargas777/rrhh-cv-filter.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd rrhh-cv-filter
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en acción.

## Uso

1. Ingresa las palabras clave en el campo de búsqueda.
2. Sube los archivos CVs usando el componente de subida de archivos.
3. Haz clic en el botón de **Filtrar** para procesar los documentos.
4. Revisa los resultados en pantalla.
5. Exporta los resultados en un archivo PDF con un solo clic.


## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar en este proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza los cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía un pull request.


¡Gracias por usar CV Filter App! Esperamos que esta herramienta facilite tu proceso de selección de candidatos. 🚀
