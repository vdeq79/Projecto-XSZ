## Problema:
Para las personas que ven animes al acabar una serie o que empiezan a verlos es muy frecuente que no sepan que ver. Encontrar un título que se ajuste a sus gustos y que merezca la pena a veces es trabajoso.

#### Propuesta:
A partir de un conjunto de animes vistos (viendo actualmente, completado, dejado, etc) introducidas por el usuario (usando APIs como por ejemplo Jikan), predecir (mediante un algoritmo de recommendación, por ejemplo: algoritmo de conjuntos frecuentes) cuáles son las series que les puedan interesar a partir de género, director, guionista, casts, etc; de las series ya vistas. 


## Documentación adicional
[Configuración git](docs/Objetivo0/config%20git.png)

[Creación y subida de clave pública a GitHub](docs/Objetivo0/claveSSH.png)

[Personas creadas](docs/Objetivo1/personas.md)

[Historias de usuario](docs/Objetivo1/user-stories.md)

[Milestones](docs/Objetivo1/milestone.md)

## Análisis elección Entidad
Atendiendo a lo puesto en [#3](https://github.com/vdeq79/Projecto-XSZ/issues/3), [#4](https://github.com/vdeq79/Projecto-XSZ/issues/4) y [#5](https://github.com/vdeq79/Projecto-XSZ/issues/5) se ha considerado que únicamente se requiere de una entidad, user_list, la cual será la que implemente la lógica de negocio. Esta entidad se trata de una lista de animes que el usuario ha visto o está viendo, y a partir de la cual se va a implementear el algoritmo de recomendación para cumplir con las necesidades de [#3](https://github.com/vdeq79/Projecto-XSZ/issues/3), [#4](https://github.com/vdeq79/Projecto-XSZ/issues/4) y [#5](https://github.com/vdeq79/Projecto-XSZ/issues/5). La discusión de cómo se he elegido este atributo se encuentra en [#16](https://github.com/vdeq79/Projecto-XSZ/issues/16).

## Análisis elección Objeto Valor
Por otro lado para el objeto valor se ha considerado únicamente Anime, que con los atributos necesario debe cumplir las necesidades de [#3](https://github.com/vdeq79/Projecto-XSZ/issues/3), [#4](https://github.com/vdeq79/Projecto-XSZ/issues/4) y [#5](https://github.com/vdeq79/Projecto-XSZ/issues/5). Por lo discutido en #15 se han considerado los siguientes atritubutos:
- Title: se recoje el título en un objeto de tipo diccionario que contendra el idioma del título y el título en dicho idioma.
- Synopsis: se trata de una descripción del anime en cuestión.
- Type: un anime puede ser una serie, una película, un especial, etc.
- Status: terminado, en emisión, cancelado,...
- Generos: cada anime tendrá asociado uno o varios géneros que posteriormente se podrán usar para crear un perfil de gustos del usuario
- Year: año de lanzamiento del anime
- Broadcast: fecha de salida (día de la semana) de cada episodio. Generalmente, los animes se suelen emitir un día fijo de la semana, aunque se pueden producir variacioens por vacaciones u otros motivos.

Se puede encontrar una discusión de la elección de los atributos en [#15](https://github.com/vdeq79/Projecto-XSZ/issues/15).

## Análisis sobre el dominio
Se he leído cuidadosamente el porblema y las historias de usuario asociadas al mismo y a partir de ahí se ha realizado un análisis de las entidades y los objetos valor que pueden modelar el problema. Una vez decididas entidades y objetos valor se ha discutido en [#15](https://github.com/vdeq79/Projecto-XSZ/issues/15) que atributos son necesarios para cumplir con las historias de usuario [#3](https://github.com/vdeq79/Projecto-XSZ/issues/3), [#4](https://github.com/vdeq79/Projecto-XSZ/issues/4) y [#5](https://github.com/vdeq79/Projecto-XSZ/issues/5). Por otro lado, en [#16](https://github.com/vdeq79/Projecto-XSZ/issues/16) se ha discutido la elección de los atributos de la entidad list_user. Finalmente, tras discutir los atributos se ha creado una clase para la entidad y otra para el objeto valor cada una con en su correspondiente archivo.
