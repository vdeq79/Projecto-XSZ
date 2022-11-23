export enum Status{
    watching="watching",
    ended="ended",
    pending="pending",
    abandoned="abandoned"
}

export class Anime{
    titles: {[type:string]: string}; //Títulos en distintos idiomas
    episodes: number; //Num episodios
    type: string; //TV, OVA, Film, ...
    status: string; //En emisión, finalizado, etc.
    genres: string[]; //Action, Fantasy, etc
    year: number; // Año de lanzamiento
    status_interest: Status; // Status el anime respecto al usuario
    studios: string[]; // Estudios que animan el anime

    constructor(
        titles: {[language:string]: string},
        episodes: number,
        type: string,
        status: string,
        genres: string[],
        year: number,
        status_interest: Status,
        studios: string[]
    ){
        this.titles = titles; //Títulos en distintos idiomas
        this.episodes = episodes; //Num episodios
        this.type = type; //TV, OVA, Film, ...
        this.status = status //En emisión, finalizado, etc.
        this.genres = genres; //Action, Fantasy, etc
        this.year = year; // Año de lanzamiento
        this.status_interest = status_interest // Status del anime respecto al usuario
        this.studios = studios // Estudio animador
    }
}
