import { Anime } from "./anime";
import { AnimeType } from "./anime_type";
import { Status } from "./status";
import { UserList } from "./user_list";

export class AnimePattern{
    episodePattern: number[];
    typePattern: AnimeType[];
    statusPattern: Status[];
    genresPattern: string[];
    yearPattern: number[];
    studiosPattern: string[];

    constructor(userList:UserList){
        var minFrequency:number = Math.floor(userList.animesUser.length/2);
        this.episodePattern = this.findEpisodePattern(userList.animesUser, minFrequency);
        this.typePattern = this.findTypePattern(userList.animesUser,minFrequency);
        this.statusPattern = this.findStatusPattern(userList.animesUser, minFrequency);
        this.genresPattern = this.findGenresPattern(userList.animesUser, minFrequency);
        this.yearPattern = this.findYearPattern(userList.animesUser,minFrequency);
        this.studiosPattern = this.findStudiosPattern(userList.animesUser, minFrequency);
    }

    private findEpisodePattern(animes:Anime[], minFrequency:number):number[]{

        var summary: Record<number,number> = {};
        animes.map(anime=>{
            summary[anime.episodes] = summary[anime.episodes]==undefined ? anime.watchingStatus:summary[anime.episodes]+anime.watchingStatus;
        });

        return this.findPattern(summary,minFrequency,parseInt);
    }

    private findTypePattern(animes:Anime[], minFrequency:number):AnimeType[]{

        var summary: Record<AnimeType,number>={tv:0,movie:0,ova:0,special:0,ona:0,music:0};
        animes.forEach(anime=>{
            summary[anime.type]++;
        });
        
        return this.findPattern(summary,minFrequency);
    }


    private findStatusPattern(animes:Anime[], minFrequency:number):Status[]{
        var summary: Record<Status,number> = {Airing:0, Complete:0};
        animes.forEach(anime=>{
            summary[anime.status]++;
        });

        return this.findPattern(summary,minFrequency);
    }

    private findGenresPattern(animes:Anime[], minFrequency:number):string[]{
        var summary: Record<string,number> = {};
        animes.map(anime=>{
            anime.genres.map(genre=>{
                summary[genre] = summary[genre]==undefined ? anime.watchingStatus:summary[genre]+anime.watchingStatus;
            })
        });

        return this.findPattern(summary,minFrequency);
    }

    private findYearPattern(animes:Anime[],minFrequency:number):number[]{
        var summary: Record<number,number> = {};
        animes.map(anime=>{
            summary[anime.year] = summary[anime.year]==undefined ? anime.watchingStatus:summary[anime.year]+anime.watchingStatus;
        });

        return this.findPattern(summary,minFrequency,parseInt);
    }

    private findStudiosPattern(animes:Anime[], minFrequency:number):string[]{
        var summary: Record<string,number> = {};
        animes.map(anime=>{
            anime.studios.map(studio=>{
                summary[studio] = summary[studio]==undefined ? anime.watchingStatus:summary[studio]+anime.watchingStatus;
            })
        });

        return this.findPattern(summary,minFrequency);
    }


    //Función genérica para encontrar el patrón a partir de un diccionario con las frecuencias y un valor de frecuencia mínima
    private findPattern(summary:Record<any,number>,minFrequency:number, convertFunction?:Function):any[]{

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
