# API de Gestión de Estudiantes con Express

## Descripción

Esta es una API simple que permite gestionar una lista de estudiantes. La API permite consultar la lista de estudiantes, buscar uno por su ID, y eliminar un estudiante.

## Instalación

1. Descarga los archivos.
2. Instala las dependencias necesarias:
   - npm install

## Uso

Para iniciar el servidor usa el siguiente comando `node index.js`
Puedes interactuar con los siguientes endpoints usando herramientas como Postman.

## Pruebas con Postman

1. `GET /students`: Devuelve la lista de todos los estudiantes. ![GET /students](/TAREA%20CLASE%207/image/postman02.png)
2. `GET /students/:id`: Devuelve los detalles de un estudiante específico basado en el ID. ![GET /students/:id](/TAREA%20CLASE%207/image/postman01.png)
3. `DELETE /students/:id`: Elimina un estudiante específico basado en el ID. ![DELETE /students/:id](/TAREA%20CLASE%207/image/postman03.png)
