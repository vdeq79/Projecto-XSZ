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
        episodes: number,
        type: string,
        status: string,
        genres: string[],
        year: number,
    ){
        this.titles = titles; //Títulos en distintos idiomas
        this.episodes = episodes; //Num episodios
        this.type = type; //TV, OVA, Film, ...
        this.status = status //En emisión, finalizado, etc.
        this.genres = genres; //Action, Fantasy, etc
        this.year = year; // Año de lanzamiento
    }
}

let anime = new Anime({'English': 'Demon Slayer'},
                        12,
                        "TV",
                        "Finished",
                        ["Action"],
                        2001)