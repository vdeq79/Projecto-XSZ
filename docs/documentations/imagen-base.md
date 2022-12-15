# Imagen base

Para la elección de la imagen base siguiendo las mejores prácticas, los criterios que se tienen en cuenta son los siguientes:

- Tamaño de la imagen,  cuando menor sea el tamaño menos espacio necesitamos para almacenarla y los procesos de pull y push serán más rápidos.
- Tener las herramientas que necesitamos y actualizadas, principalmente node y npm (o preferiblemente pnpm) para ejecutar Typescript y descargar dependencias.

Siguiendo las buenas prácticas, usaremos la imagen oficial de [**node**](https://hub.docker.com/_/node), pero teniendo en cuenta que tenemos distintas versiones nos centramos principalmente en dos:
- **latest**: es la versión última inestable de node, tiene más tendencia a cambios y puede causar comportamientos impredecibles.
- **lts**: versión estable que también se actualiza, pero con un ritmo menor que latest, actualmente utiliza la versión 18.12.1.
- **Versiones concretas**: versiones concretas de node como puede ser 14, 16 o 18. Ideal si podemos asegurar que nuestro código siempre se ejecutará en el mismo entorno.

Se decide utilizar la versión **lts** porque mantiene una versión estable para las ejecuciones y también nos permite adaptar nuestro código a las actualizaciones en caso de no funcionar en nuevas versiones.   

Para minimizar el tamaño se ha descargado la imagen con diferentes distribuciones de sistema operativo para comparar:

- **node:lts**: utiliza la distribución de Debian estándar con un tamaño de 991 MB.
- **node:lts-alpine**: utiliza la distribución de Alpine lo que le hace tener un tamaño reducido de 169 MB.
- **node:lts-slim**: utiliza también la distribución de Debian pero sin contener los paquetes comunes de esta distribución, sino sólo los necesarios para ejecutar node. El tamaño es de 241 MB.

Con esta comparativa, tenemos que con **node:lts-alpine** obtenemos una imagen base con un tamaño pequeño y con herramientas necesarias para nuestro proyecto.