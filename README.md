# Microservicios: Análisis de la Arquitectura en Desarrollo Web

Este repositorio contiene un proyecto de desarrollo web que implementa una arquitectura de microservicios. La arquitectura de microservicios es un enfoque que estructura una aplicación como un conjunto de servicios independientes, cada uno enfocado en realizar una tarea específica. Estos microservicios se comunican entre sí a través de API bien definidas.

## Arquitectura de Microservicios

La arquitectura de microservicios se compone de varios componentes, incluyendo:

- **Express**: Un framework de Node.js utilizado para crear aplicaciones web y API.
- **CORS (Cross-Origin Resource Sharing)**: Un mecanismo de seguridad que permite o restringe el acceso a los recursos de una página web desde un dominio web distinto.
- **Axios**: Una biblioteca JavaScript que facilita la realización de solicitudes HTTP desde el navegador o desde Node.js, lo que es especialmente útil para realizar solicitudes entre servicios en arquitecturas de microservicios.

## Instrucciones de Uso

### Microservicio 1

1. Crear el proyecto:
```bash
mkdir microservicio1
cd microservicio1
npm init -y
```

2. Instalar dependencias:
```bash
npm i express cors
```

3. Crear el archivo `servicio.js`.

4. Ejecutar el microservicio 1:

```bash
node servicio.js
```
El microservicio 1 estará disponible en http://localhost:3001.

### Microservicio 2

1. Crear el proyecto:
```bash
mkdir microservicio2
cd microservicio2
npm init -y
```

2. Instalar dependencias:
```bash
npm i express cors
```

3. Crear el archivo `servicio.js`.

4. Ejecutar el microservicio 2:
```bash
node servicio.js
```

El microservicio 2 estará disponible en http://localhost:3002.

### Cliente React.js con Vite

1. Crear el proyecto React con Vite:
```bash
mkdir cliente
cd cliente
npm create vite@latest .
```

2. Instalar Axios:
```bash
npm i axios
```

3. Modificar `src/App.jsx` para consumir los microservicios.

4. Ejecutar el cliente React:
```bash
npm run dev
```

Y eso es todo! 😊😊

## Objetivo

El objetivo de este proyecto es crear un sistema web que utilice una arquitectura de microservicios, estableciendo comunicación entre los microservicios mediante solicitudes HTTP.


## Repo

 [https://github.com/ALPullaguariSW/microservices-t.git](#).
