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
    status_interest: Status // Status el anime respecto al usuario

    constructor(
        titles: {[language:string]: string},
        episodes: number,
        type: string,
        status: string,
        genres: string[],
        year: number,
        status_interest: Status
    ){
        this.titles = titles; //Títulos en distintos idiomas
        this.episodes = episodes; //Num episodios
        this.type = type; //TV, OVA, Film, ...
        this.status = status //En emisión, finalizado, etc.
        this.genres = genres; //Action, Fantasy, etc
        this.year = year; // Año de lanzamiento
        this.status_interest = Status.ended // Status del anime respecto al usuario
    }
}

let anime = new Anime({'English': 'Demon Slayer'},
                        12,
                        "TV",
                        "Finished",
                        ["Action"],
                        2001,
                        Status.ended)