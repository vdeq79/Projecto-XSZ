import { AnimeType } from "../models/anime_type";
import { Status } from "../models/status";
import { UserList } from "../models/user_list";

export class AnimePattern{
    episodePattern: number[];
    typePattern: AnimeType[];
    statusPattern: Status[];
    genresPattern: string[];
    yearPattern: number[];
    studiosPattern: string[];

    constructor(userList:UserList){
        //Mínimo de frecuencia admitida
        var minFrequency:number = Math.floor(userList.animesUser.length/2);

        //Generación de los conjuntos con un elemento con sus correspondientes frecuencias
        var episodesSummary: Record<number,number>={};
        var yearSummary: Record<number,number> = {};
        var typeSummary: Record<AnimeType,number>={tv:0,movie:0,ova:0,special:0,ona:0,music:0};
        var statusSummary: Record<Status,number> = {Airing:0, Complete:0};
        var genresSummary: Record<string,number>={};
        var studiosSummary: Record<string,number> = {};

        userList.animesUser.map(anime=>{
            episodesSummary[anime.episodes] = episodesSummary[anime.episodes]==undefined ? anime.watchingStatus:episodesSummary[anime.episodes]+anime.watchingStatus;

            typeSummary[anime.type]++;
            statusSummary[anime.status]++;

            anime.genres.map(genre=>{
                genresSummary[genre] = genresSummary[genre]==undefined ? anime.watchingStatus:genresSummary[genre]+anime.watchingStatus;
            })

            yearSummary[anime.year] = yearSummary[anime.year]==undefined ? anime.watchingStatus:yearSummary[anime.year]+anime.watchingStatus;

            anime.studios.map(studio=>{
                studiosSummary[studio] = studiosSummary[studio]==undefined ? anime.watchingStatus:studiosSummary[studio]+anime.watchingStatus;
            })
        });

        this.episodePattern = this.extractPattern(episodesSummary, minFrequency, parseInt);
        this.typePattern = this.extractPattern(typeSummary,minFrequency);
        this.statusPattern = this.extractPattern(statusSummary, minFrequency);
        this.genresPattern = this.extractPattern(genresSummary, minFrequency);
        this.yearPattern = this.extractPattern(yearSummary,minFrequency,parseInt);
        this.studiosPattern = this.extractPattern(studiosSummary, minFrequency);
    }


    //Función genérica para extraer los elementos frecuentes a partir de un diccionario con las frecuencias y un valor de frecuencia mínima
    private extractPattern(summary:Record<any,number>, minFrequency:number, convertFunction?:Function):any[]{

        var keyPattern = Object.keys(summary).filter(i=>{
            let key = convertFunction==undefined? i : convertFunction(i);
            return summary[key]>=minFrequency;
        })


        var convertedPattern = convertFunction==undefined? keyPattern : keyPattern.map(i=>{
            return convertFunction(i);
        });

        return convertedPattern;
    }

}
