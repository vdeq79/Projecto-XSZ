import {expect} from 'chai';
import { describe, it } from 'mocha';
import { AnimeType } from '../src/models/anime_type'; 
import { Status } from '../src/models/status';
import { Anime } from '../src/models/anime';
import { UserList } from '../src/models/user_list';
import { WatchingStatus } from '../src/models/watching_status';
import { AnimePattern } from '../src/models/anime_pattern';

describe('User anime pattern test', ()=>{
    
    const Edgerunners = new Anime({'Default':'Cyberpunk: Edgerunners'}, 10, AnimeType.ona, Status.complete, ['Action', 'Sci-Fi', 'Gore', 'Psychological'], 2022, ['Trigger'], WatchingStatus.completed);

    const AOT = new Anime({'Default':'Shingeki no Kyojin'}, 25, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Drama', 'Suspense', 'Gore', 'Military', 'Survival', 'Shounen'], 2013, ['Wit Studio'], WatchingStatus.watching);

    const Kimetsu = new Anime({'Default': 'Kimetsu no Yaiba'}, 26, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Fantasy', 'Historical', 'Shounen'], 2019, ['Ufotable'], WatchingStatus.completed);

    const OPM = new Anime({'Default':'One Punch Man'}, 12, AnimeType.tv, Status.complete, ['Action', 'Comedy', 'Adult Cast', 'Parody', 'Super Power', 'Seinen'], 2015, ['Madhouse'], WatchingStatus.completed);

    const JJK = new Anime({'Default':'Jujutsu Kaisen'}, 24, AnimeType.tv, Status.complete, ['Action', 'Award Winning', 'Fantasy', 'School', 'Shounen'], 2020, ['MAPPA'], WatchingStatus.completed);

    const CSM = new Anime({'Default': 'Chainsaw Man'}, 12, AnimeType.tv, Status.airing, ['Action', 'Fantasy', 'Gore', 'Shounen'], 2022, ['MAPPA'], WatchingStatus.watching);

    it('test with user with less experience',()=>{
        const userList = new UserList([AOT,Kimetsu,OPM,JJK,CSM]);
        const userAnimePattern = new AnimePattern(userList);

        expect(userAnimePattern.genresPattern).to.contain('Action');
        expect(userAnimePattern.episodePattern).to.contain(12);
        expect(userAnimePattern.genresPattern).to.contain('Shounen');
        expect(userAnimePattern.typePattern).to.contain(AnimeType.tv);
        expect(userAnimePattern.studiosPattern).to.contain('MAPPA');
        expect(userAnimePattern.yearPattern).to.be.empty;
    });



});