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

        userList.animesUser.map(anime=>{
            patternSummary[anime.episodes] = patternSummary[anime.episodes]==undefined ? anime.watchingStatus:patternSummary[anime.episodes]+anime.watchingStatus;

            patternSummary[anime.type] = patternSummary[anime.type]==undefined ? anime.watchingStatus:patternSummary[anime.type]+anime.watchingStatus;

            patternSummary[anime.status] = patternSummary[anime.status]==undefined ? anime.watchingStatus:patternSummary[anime.status]+anime.watchingStatus;;

            anime.genres.map(genre=>{
                patternSummary[genre] = patternSummary[genre]==undefined ? anime.watchingStatus:patternSummary[genre]+anime.watchingStatus;
            })

            patternSummary[anime.year] = patternSummary[anime.year]==undefined ? anime.watchingStatus:patternSummary[anime.year]+anime.watchingStatus;

            anime.studios.map(studio=>{
                patternSummary[studio] = patternSummary[studio]==undefined ? anime.watchingStatus:patternSummary[studio]+anime.watchingStatus;
            })
        });

        //Filtramos los conjuntos descartando los que no tienen una frecuencia mínima
        this.definedPattern = Object.keys(patternSummary).filter(i=>{
            return patternSummary[i]>=minFrequency;
        })
    }

}
