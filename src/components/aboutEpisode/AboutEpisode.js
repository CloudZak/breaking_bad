import {useState, useEffect} from 'react';
import BreakingBadService from '../../services/BreakingBadService';
import './aboutEpisode.scss'

const AboutEpisode = (props) => {

    const [epis, setEpis] = useState(null);

    // const breakingBadService = new BreakingBadService();

    useEffect(() => {
        setEpis(props.epis);
    }, []);

    // const onRequest = () => {
    //     breakingBadService.getEpisodeById(51)
    //         .then(result => result)
    //         .then(data => onEpisodLoaded(data));};
    // }

    // const onEpisodLoaded = (episode) => {
    //     setEpis(episode);
    // }
    
    const content = epis ? <View epis={epis}/> : null;
    

    return (
        <aside className='aboutEpisode'>
            <h4 className="aboutEpisode_about">About episode</h4>
            {content}
        </aside>
    )
}

const View = ({epis}) => {
    const {title, season, episode, air_date, characters} = epis;

    return (
            <>
                <div className='aboutEpisode_title'><span>Title:</span> {title}</div>
                <div className='aboutEpisode_season'><span>Seasons & Series:</span> {season}, {episode}</div>
                <div className='aboutEpisode_date'><span>Air-date:</span> {air_date}</div>
                <div className='aboutEpisode_chars'><span>Characters:</span>{characters.map(item => ` ${item},`)}</div>
            </>
    )
}

export default AboutEpisode;