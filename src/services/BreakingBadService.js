class BreakingBadService {
    _apiBase = 'https://www.breakingbadapi.com/api/';
    // // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
    // _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
    _baseOffset = 0;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: `);
        }

        let result = await res.json();
        return result;
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters`);
        return res.map(this._transformCharacter);
    }

    getAllCharactersOffset = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=4&offset=${offset}`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}`);
        return this._transformCharacter(res[0]);
    }

    getCharacterByName = async (name) => {
        const res = await this.getResource(`${this._apiBase}characters?name=${name}`);
        return res.map(this._transformCharacter);
    }

    getEpisodeById = async (id) => {
        const res = await this.getResource(`${this._apiBase}episodes/${id}`);
        return this._transformEpisodes(res[0]);
    }

    getAllEpisodes = async () => {
        const res = await this.getResource(`${this._apiBase}episodes`);
        return res.map(this._transformEpisodes);
    }

    _transformEpisodes = (episod) => {
        return {
            id: episod.episode_id,
            title: episod.title,
            season: episod.season,
            episode: episod.episode,
            air_date: episod.air_date,
            characters: episod.characters,
            series: episod.series
        }
    }

    _transformCharacter = (char) => {
        return {
            id: char.char_id,
            name: char.name,
            description: char.occupation ? `${char.occupation.slice(0, 150)}` : 'There is no description for this character',
            birthday: char.birthday,
            img: char.img,
            nickname: char.nickname,
            category: char.category,
        }
    }
}

export default BreakingBadService;