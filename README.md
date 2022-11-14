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
Atendiendo a lo puesto en #2, #3 y #4 se ha considerado que únicamente se requiere de una entidad, user_list, la cual será la que implemente la lógica de negocio. Esta entidad se trata de una lista de animes que el usuario ha visto o está viendo, y a partir de la cual se va a implementear el algoritmo de recomendación para cumplir con las necesidades de #2, #3 y #4.