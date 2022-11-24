# Test runner

Para la elección del test runner, teniendo en cuenta que los tests tienen que ser ejecutados una gran cantidad de veces durante el desarrollo del proyecto, el criterio de elección y de búsqueda se centra en la velocidad de ejecución de los tests.

- [**Jasmine**](https://jasmine.github.io/): es un testing framework de JavaScript con test runner integrado que  funciona sin necesidad de una librería de aserción adicional proprocionando un sintaxis limpio y fácil de entender.
- [**Jest**](https://jestjs.io/es-ES/): es un testing framework de JavaScript usado y mantenido por Facebook. Su principal ventaja es el rendimiento para grandes proyectos gracias a su mecanismo de testing paralelo. Tiene su propio test runner y librería de aserción integrada con una aproximación similar a Jasmine.
- [**Mocha**](https://mochajs.org/): es también un framework de pruebas de JavaScript, pero a diferencia de otras, suele utilizarse con librerías de aserción de terceros, usualmente con **Chai**. Permite opciones avanzadas de configuración e integración, apropiadas dependiendo del proyecto en específico.

Tras observar comparativas sobre la velocidad de ejecución de las opciones, se ha decidido utilizar **Mocha** teniendo en cuenta que es rápido (ver [referencia1](https://medium.com/dailyjs/javascript-test-runners-benchmark-3a78d4117b4)  y [referencia2](https://github.com/artemave/node-test-runners-benchmark)) tanto para tests síncronos como para tests asíncronos. 