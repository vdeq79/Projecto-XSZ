import { Anime } from "./anime.ts"

class UserList{
    animesUser: Anime[];

    constructor(animesUser:Anime[]){
        this.animesUser = animesUser
    }
}

let anime = new Anime({'English': 'Demon Slayer'},
                        12,
                        "TV",
                        "Finished",
                        ["Action"],
                        2001)

let list = new UserList([anime])