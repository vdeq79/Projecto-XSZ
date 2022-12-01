import { WatchingStatus } from "./watching_status";
import { Status } from "./status";
import { AnimeType } from "./anime_type";

export class Anime{
    titles: {[language:string]: string};                //Títulos en distintos idiomas
    episodes: number;                               //Num episodios
    type: AnimeType;                                //TV, OVA, Film, ...
    status: Status;                                 //En emisión, finalizado, etc.
    genres: string[];                               //Action, Fantasy, etc
    year: number;                                   //Año de lanzamiento
    studios: string[];
    watchingStatus: WatchingStatus;

    constructor(titles: {[language:string]: string}, episodes: number, type: AnimeType, status:Status ,  genres: string[], year: number, studios: string[], watchingStatus: WatchingStatus){
        this.titles = titles;                       //Títulos en distintos idiomas
        this.episodes = episodes;                   //Num episodios
        this.type = type;                           //TV, OVA, Film, ...
        this.status = status;                       //En emisión, finalizado, etc.
        this.genres = genres;                       //Action, Fantasy, etc
        this.year = year;                           //Año de lanzamiento
        this.studios = studios;
        this.watchingStatus = watchingStatus;
    }
}