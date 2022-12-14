# Imagen base

Para la elección de la imagen base siguiendo las mejores prácticas, los criterios que se tienen en cuenta son los siguientes:

- Tamaño de la imagen,  cuando menor sea el tamaño menos espacio necesitamos para almacenarla y los procesos de pull y push serán más rápidos.
- Tener las herramientas que necesitamos y actualizadas, principalmente node y npm (o preferiblemente pnpm) para ejecutar Typescript y descargar dependencias.

Siguiendo las buenas prácticas, usaremos la imagen oficial de [**node**](https://hub.docker.com/_/node) con la versión actual 19.2.0, pero para minimizar el tamaño se ha descargado la imagen con diferentes distribuciones de sistema operativo para comparar:

- **node:19.2.0**: utiliza la distribución de Debian estándar con un tamaño de 994.92 MB.
- **node:19.2.0-alpine**: utiliza la distribución de Alpine lo que le hace tener un tamaño reducido de 172.75 MB.
- **node:19.2.0-slim**: utiliza también la distribución de Debian pero sin contener los paquetes comunes de esta distribución, sino sólo los necesarios para ejecutar node. El tamaño es de 244.5 MB.

Con esta comparativa, tenemos que con **node:19.2.0-alpine** obtenemos una imagen base con un tamaño pequeño y con herramientas necesarias para nuestro proyecto.