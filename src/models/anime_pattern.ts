import { Anime } from "./anime";
import { AnimeType } from "./anime_type";
import { Status } from "./status";
import { UserList } from "./user_list";
import { WatchingStatus } from "./watching_status";

export class AnimePattern{
    episodePattern: number[];
    typePattern: AnimeType[];
    /*statusPattern: Status[];
    genresPattern: string[];
    yearPattern: number[];
    studiosPattern: string[];*/

    constructor(userList:UserList){
        var minFrequency:number = Math.floor(userList.animesUser.length/2);
        this.episodePattern = this.searchEpisodePattern(userList.animesUser, minFrequency);
        this.typePattern = this.searchTypePattern(userList.animesUser,minFrequency);
    }

    searchEpisodePattern(animes:Anime[], minFrequency:number):number[]{

        var summary: Record<number,number> = {};

        animes.map(anime=>{
            summary[anime.episodes] = summary[anime.episodes]==undefined ? anime.watchingStatus:summary[anime.episodes]+anime.watchingStatus;
        })

        return this.searchPattern(summary,minFrequency,parseInt);
    }

    searchTypePattern(animes:Anime[], minFrequency:number):AnimeType[]{

        var summary: Record<AnimeType,number>={tv:0,movie:0,ova:0,special:0,ona:0,music:0};
        animes.forEach(anime=>{
            summary[anime.type]++;
        });
        
        return this.searchPattern(summary,minFrequency);

    }




    searchPattern(summary:Record<any,number>,minFrequency:number, convertFunction?:Function):any[]{

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

let UL=new UserList([new Anime({default:"1"},12,AnimeType.movie,Status.airing,["shonen"],2011,["Wit"],WatchingStatus.completed),new Anime({default:"1"},12,AnimeType.movie,Status.airing,["shonen"],2011,["Wit"],WatchingStatus.completed)]);

let pat = new AnimePattern(UL);