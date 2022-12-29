# Integración continua

Para realizar la búsqueda y elección de sistemas de integración continua, los criterios que seguiremos son:
- **Ser compatible con Github Checks API**
- **Tener una versión gratuita para que podamos usar**
- **Tener compatibilidad con Docker**

Siguiendo estos criterios, consideramos las siguientes opciones:
- **Github Actions**: el propio github permite testear nuestro proyecto cada vez que lo cambiamos, es gratuita y tiene compatibilidad tanto con Docker como con Github check. Es una opción simple, fácil de configurar y de implementar para usuarios de Github.
- **CircleCI**: tiene una versión gratuita con integración a Github por defecto y permite el uso de contenedores. La interfaz es fácil de manejar y la documentación es extensa, pero el sintaxis no es fácil de entender y los mensajes de error no ayudan a depurar.
- **Semaphore**: es un sistema de integración continua de pago con una versión gratuita para códigos abiertos, está integrado con Github como una aplicación y también soporta Docker. Tiene también una interfaz simple y el sintaxis es fácil de entender.
- **Cirrus CI**: es un sistema de CI que se instala como una aplicación de Github, su uso es gratuita para repositorios públicos y utiliza las imágenes de Docker para llevar a cabo los tests. Tras probarlo se descarta por el funcionamiento irregular de su página (el repositorio no aparece en la página principal, pero sí es accesible a través de la url).

Tras probar las anteriores opciones, se decide utilizar Github Actions testear las distintas versiones de node y Semaphore para testear nuestra imagen de Docker.

## Versiones para testeos
Para realizar los testeos, tenemos que determinar las versiones de node que nos interesan. Actualmente, las versiones principales son las siguientes:
- **latest**: última versión de node, actualmente en 19.3.0, suele ser inestable y en constante actualización. Es la versión de desarrollo, por lo que proporciona información sobre cómo nuestro proyecto funciona en un entorno todavía inestable. 
- **lts**: última versión estable de node, actualmente en 18.12.1 y que se actualizará en un futuro, es la utilizada en el docker.
- **Versiones concretas**: versiones concretas estables e inmutables (en major) menos modernas como 14, 16 o 18. Nos proporciona información sobre el comportamiento en versiones más antiguas.

Para el testeo, es interesante las versiones latest, lts (testeada con Docker), 14 y 16. Se descarta la 18 pues coincide con lts.