import { AnimeType } from "./anime_type";
import { Status } from "./status";
import { UserList } from "./user_list";

export class AnimePattern{

    definedPattern: string[];

    constructor(userList:UserList){
        //Mínimo de frecuencia admitida
        var minFrequency:number = Math.floor(userList.animesUser.length/2);

        //Generación de los conjuntos con un elemento con sus correspondientes frecuencias
        var patternSummary: Record<(number|AnimeType|Status|string),number>={};

        //Para cada anime, primero extraemos los atributos significativos
        userList.animesUser.map(anime=>{

            this.addPattern(patternSummary,anime.episodes, anime.watchingStatus);
            this.addPattern(patternSummary,anime.type,     anime.watchingStatus);
            this.addPattern(patternSummary,anime.status,   anime.watchingStatus);
            this.addPattern(patternSummary,anime.year,     anime.watchingStatus);

            anime.genres.map(genre=>{
                this.addPattern(patternSummary,genre,anime.watchingStatus);
            });

            anime.studios.map(studio=>{
                this.addPattern(patternSummary,studio,anime.watchingStatus);
            });

        });

        //Filtramos los conjuntos descartando los que no tienen una frecuencia mínima
        this.definedPattern = Object.keys(patternSummary).filter(i=>{
            return patternSummary[i]>=minFrequency;
        })
    }

    private addPattern(summary:Record<(number|AnimeType|Status|string),number>, pattern: (number|AnimeType|Status|string), value:number){
        summary[pattern] = summary[pattern]==undefined ? value:summary[pattern]+value;
    }

}
