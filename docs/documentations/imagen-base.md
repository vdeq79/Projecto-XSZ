# Imagen base

Para la elección de la imagen base, los criterios que se tienen en cuenta son los siguientes:
- Tener las herramientas que necesitamos y actualizadas, principalmente node y pnpm para ejecutar Typescript y descargar dependencias.
- Tiempo que tarda en ejecutar los tests.

Dado estos escriterios se ha considerado las siguientes opciones:
- [**ianwalter/pnpm**](https://hub.docker.com/r/ianwalter/pnpm): imagen base que contiene node y pnpm, sin embargo, las versiones se encuentran desactualizadas con la versión de node en 14.15.1 y la de pnpm en 5.13.5. 
- [**node**](https://hub.docker.com/_/node): imagen oficial de node.js con sus últimas actualizaciones. En este caso si queremos utilizar pnpm necesitamos instalar y configuralo en nuestro Dockerfile. 
- [**sandrokeil/typescript**](https://hub.docker.com/r/sandrokeil/typescript): imagen base con Typescript incorporado además de node y yarn. De mismo mode que la imagen de node, necesitaríamos instalar pnpm desde Dockerfile.

Tras probar con las tres imágenes, se ha comprobado que tardan lo mismo en ejecutar los tests (ya que todos utilizan como base a node) y por ser la imagen de node la que posee la versión más actualizada, se decide utilizar esta imagen.