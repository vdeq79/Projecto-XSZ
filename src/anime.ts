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
        titles: {[type:string]: string},
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