import {useState} from 'react';
import EpisodeChars from "../episodeChars/EpisodeChars";
import AboutEpisode from "../aboutEpisode/AboutEpisode";

const EpisodesPage = (props) => {

    const [chars, setChars] = useState([]);

    const getChars = (charList) => {
        if (charList) {setChars(charList);}
        console.log(chars);
    }

    return (
        <div className="char__content_wrapper">
            <AboutEpisode episId={props.episId} getChars={getChars}/>
            <EpisodeChars chars={chars}/>
        </div>
    )
}

export default EpisodesPage;