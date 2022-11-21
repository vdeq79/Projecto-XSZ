import { Anime } from "./anime.ts"

class UserList{
    animesUser: Anime[];

    constructor(animesUser:Anime[]){
        this.animesUser = animesUser
    }
}

let anime = new Anime({'English': 'Demon Slayer'},
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                        12,
                        "TV",
                        "Finished",
                        ["Action"],
                        2001,
                        new Date(2018, 0O5, 0O5, 17, 23, 42, 11))

let list = new UserList([anime])