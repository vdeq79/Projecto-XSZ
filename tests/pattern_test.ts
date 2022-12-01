import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AnimeType } from '../src/anime_type'; 
import { Status } from '../src/status';
import { Anime } from '../src/anime';
import { UserList } from '../src/user_list';
import { WatchingStatus } from '../src/watching_status';
import { AnimePattern } from '../src/anime_pattern';

describe('User anime pattern test', ()=>{
    
    const Edgerunners = new Anime({'Default':'Cyberpunk: Edgerunners'}, 10, AnimeType.ona, Status.complete, ['Action', 'Sci-Fi', 'Gore', 'Psychological'], 2022, ['Trigger'], WatchingStatus.completed);
    const AOT = new Anime({'Default':'Shingeki no Kyojin'}, 25, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Drama', 'Suspense', 'Gore', 'Military', 'Survival', 'Shounen'], 2013, ['Wit Studio'], WatchingStatus.watching);
    const Kimetsu = new Anime({'Default': 'Kimetsu no Yaiba'}, 26, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Fantasy', 'Historical', 'Shounen'], 2019, ['Ufotable'], WatchingStatus.completed);
    const OPM = new Anime({'Default':'One Punch Man'}, 12, AnimeType.tv, Status.complete, ['Action', 'Comedy', 'Adult Cast', 'Parody', 'Super Power', 'Seinen'], 2015, ['Madhouse'], WatchingStatus.completed);
    const JJK = new Anime({'Default':'Jujutsu Kaisen'}, 24, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Fantasy', 'School', 'Shounen'], 2020, ['MAPPA'], WatchingStatus.completed);
    const CSM = new Anime({'Default': 'Chainsaw Man'}, 12, AnimeType.tv, Status.airing, ['Action', 'Fantasy', 'Gore', 'Shounen'], 2022, ['MAPPA'], WatchingStatus.watching);
    const Mob = new Anime({'Default':'Mob Psycho 100'}, 12, AnimeType.tv, Status.complete, ['Action', 'Comedy', 'Supernatural', 'Super Power'], 2016, ['Bones'], WatchingStatus.completed);
    const Pop = new Anime({'Default': 'Poputepipikku 2nd Season'}, 12, AnimeType.tv, Status.airing, ['Comedy', 'Gag Humor', 'Parody'], 2022, ['Kamikaze Douga', 'Space Neko Company'], WatchingStatus.onHold);
    const Bakemonogatari = new Anime({'Default':'Bakemonogatari'}, 15, AnimeType.tv, Status.complete, ['Mystery', 'Romance', 'Supernatural', 'Vampire'], 2009, ['Shaft'], WatchingStatus.completed);
    const AoButa = new Anime({'Default': 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai'}, 13, AnimeType.tv, Status.complete, ['Comedy', 'Drama', 'Romance', 'Supernatural', 'School'], 2018, ['CloverWorks'], WatchingStatus.completed);
    const newWorld = new Anime({'Default': 'Shinsekai yori'}, 25, AnimeType.tv, Status.complete, ['Drama', 'Horror', 'Mystery', 'Sci-Fi', 'Supernatural', 'Psychological'], 2012, ['A-1 Pictures'], WatchingStatus.dropped);
    const KnK = new Anime({'Default':'Kara no Kyoukai Movie 5: Mujun Rasen'}, 1, AnimeType.movie, Status.complete, ['Action', 'Drama', 'Mystery', 'Romance', 'Supernatural', 'Suspense'], 2008, ['Ufotable'], WatchingStatus.completed);

    it('test with user with defined pattern',()=>{
        const userList = new UserList([AOT,Kimetsu,OPM,JJK,CSM]);
        const userAnimePattern = new AnimePattern(userList);

        expect(userAnimePattern.genresPattern).to.contain('Action');
        expect(userAnimePattern.genresPattern).to.contain('Shounen');
        expect(userAnimePattern.episodePattern).to.contain(12);
        expect(userAnimePattern.typePattern).to.contain(AnimeType.tv);
        expect(userAnimePattern.studiosPattern).to.contain('MAPPA');
        expect(userAnimePattern.yearPattern).to.be.empty;
    });

    it('test with user with less defined pattern',()=>{
        const userList = new UserList([Edgerunners, Kimetsu, OPM, JJK, CSM, Mob, Pop, Bakemonogatari, AoButa, newWorld, KnK]);
        const userAnimePattern = new AnimePattern(userList);

        expect(userAnimePattern.genresPattern).to.contain('Action');
        expect(userAnimePattern.genresPattern).to.not.contain('Vampire');
        expect(userAnimePattern.typePattern).to.contain(AnimeType.tv);
        expect(userAnimePattern.typePattern).to.not.contain(AnimeType.ona);
        expect(userAnimePattern.typePattern).to.contain(AnimeType.tv);
        expect(userAnimePattern.studiosPattern).to.be.empty;
    })

});