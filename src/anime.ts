export class Anime{
    titles: {[type:string]: string}; //Títulos en distintos idiomas
    synopsis: string; //Sinopsis
    episodes: number; //Num episodios
    type: string; //TV, OVA, Film, ...
    status: string; //En emisión, finalizado, etc.
    genres: string[]; //Action, Fantasy, etc
    year: number; // Año de lanzamiento
    broadcast: Date; //Día de la semana que se lanza.

    constructor(
        titles: {[language:string]: string},
        synopsis: string,
        episodes: number,
        type: string,
        status: string,
        genres: string[],
        year: number,
        broadcast: Date
    ){
        this.titles = titles; //Títulos en distintos idiomas
        this.synopsis = synopsis; //Sinopsis
        this.episodes = episodes; //Num episodios
        this.type = type; //TV, OVA, Film, ...
        this.status = status //En emisión, finalizado, etc.
        this.genres = genres; //Action, Fantasy, etc
        this.year = year; // Año de lanzamiento
        this.broadcast = broadcast; //Día de la semana que se lanza. 
    }
}

let anime = new Anime({'English': 'Demon Slayer'},
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                        12,
                        "TV",
                        "Finished",
                        ["Action"],
                        2001,
                        new Date(2018, 0O5, 0O5, 17, 23, 42, 11))