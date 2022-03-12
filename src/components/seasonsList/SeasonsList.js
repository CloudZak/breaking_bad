import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import BreakingBadService from '../../services/BreakingBadService';
import './seasonsList.scss';

const SeasonsList = (props) => {

    const [episods, setEpisods] = useState([]);

    const breakingBadService = new BreakingBadService();

    const fifes = ['1', '2', '3', '4', '5'];

    useEffect(() => {
        onOpenRequest();
    }, []);

    const onOpenRequest = () => {
        breakingBadService.getAllEpisodes()
            .then(result => result)
            .then(data => onEpisodsLoaded(data))
    }

    const onEpisodsLoaded = (data) => {
        setEpisods([...data]);
    }

    return (
        <aside className="seasons">
            <div className="seasons_title">Seasons</div>
            <ul className="seasons_list">
                {fifes.map(i => {
                    return (
                    <li key={i} className='seasons_list__item'>
                        <span onMouseEnter={e => {e.preventDefault();}}>
                            Seasons {i}
                                <ul>
                                {episods.map(epis => epis.season === i ? <li key={epis.id} className='episod' onClick={e => props.onEpisodeSelected(epis)}><Link to={`/episodes/${epis.id}`}>{epis.episode}.{epis.title}</Link></li> : null)}
                                </ul>    
                        </span>
                    </li>
                )})}
                {/*<li className='seasons_list__item'>
                     <span onMouseEnter={e => {e.preventDefault();onOpenList(2)}}>
                        Seasons 2
                        <ul>
                            {episods.map(epis => epis.season === '2' ? <View key={epis.id} epis={epis} onClick={props.onEpisodeSelected(epis)}/> : null)}
                        </ul>
                    </span> 
                </li>*/}
                {/* <li className='seasons_list__item'>
                    <span onMouseEnter={e => {e.preventDefault();onOpenList(3)}}>
                        Seasons 3
                        <ul>
                            {episods.map(epis => epis.season === '3' ? <View key={epis.id} epis={epis} onClick={props.onEpisodeSelected(epis)}/> : null)}
                        </ul>
                    </span> 
                    
                </li>*/}
                {/* <li className='seasons_list__item'>
                    <span onMouseEnter={e => {e.preventDefault();onOpenList(4)}}>
                        Seasons 4
                        <ul>
                            {episods.map(epis => epis.season === '4' ? <View key={epis.id} epis={epis} onClick={props.onEpisodeSelected(epis)}/> : null)}
                        </ul>
                    </span> 
                </li>*/}
                {/* <li className='seasons_list__item'>
                    <span onMouseEnter={e => {e.preventDefault();onOpenList(5)}}>
                        Seasons 5
                        <ul>
                            {episods.map(epis => epis.season === '5' ? <View key={epis.id} epis={epis} onClick={props.onEpisodeSelected(epis)}/> : null)}
                        </ul>
                    </span> 
                    
                </li>*/}
            </ul>
        </aside>
    )
}

// const View = ({epis}) => {
//     const {title, episode} = epis;
//     const classname = episode === '1' ? 'episod first_episod' : 'episod';

//     return (
//         <li className={classname}>{episode}.{title}</li>
//     )
// }

export default SeasonsList;