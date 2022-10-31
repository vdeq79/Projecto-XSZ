De cara a la elección del gestor de dependencias, estas son algunas de las posibilidades:

- **npm**:  es el gestor de paquetes más extendido para JavaScript, desarrollado sobre Node.js, permite encontrar, compartir y reutilizar paquetes creado por otros desarrolladores. Sirve como base para la mayoría del resto de herramientas de administración de dependencias de front-end.
-  **Yarn**: es un sistema para manejo de dependencias creado por Facebook que se caracteriza por su rapidez debido que crea un archivo caché por cada paquete descargado, de manera que no necesita descargar un mismo paquete para dos proyectos distintos. También permite maximizar la utilización de la red y reenvía solicitudes fallidas de forma automática. 
- **pnpm**: es una gestor de paquetes que almacena los paquetes de forma centralizada y los utilizan creando enlaces en los proyectos que los necesitan. Gracias a ello, permite ahorrar espacios en el disco y tiempo de instalación de los paquetes. 
- **bun**: es un gestor de paquetes compatible con npm, caracterizado por su rapidez, anuncia que es hasta 20 veces más rápido que Yarn utilizando las llamadas al sistema más rápidas posibles. Es bastante joven aún, pues se creó en abril de 2021.

Finalmente se ha optado por npm por la compatibilidad, el reducido número de paquetes (pero específicos) que se necesita para el proyecto y buen rendimiento general.