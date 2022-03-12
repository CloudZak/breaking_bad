import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import SeasonsList from "../seasonsList/SeasonsList";
import CharList from "../charList/CharList";
import EpisodeChars from "../episodeChars/EpisodeChars";
import AboutEpisode from "../aboutEpisode/AboutEpisode";
import { Page404 } from "../pages";
// import  {MainPage, EpisodesPage} from '../pages';
// import BreakingBadService from "../../services/BreakingBadService";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";



const App = () => {

    // const breakingBadService = new BreakingBadService();

    // console.log(breakingBadService.getAllEpisodes().then(result => result[0].characters[0]));
    // console.log(breakingBadService.getAllCharacters().then(result => result[0].name));
    // console.log(breakingBadService.getCharacter(10).then(result => result.id));
    
    const [epis, setEpis] = useState();
    const [chars, setChars] = useState([]);

    const onEpisodeSelected = (epis) => {
        setEpis(epis);
        setChars(epis.characters);
    };

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <div className="char__content">                            
                        <Switch>
                            <Route exact path='/'>
                                <RandomChar/>
                                <div className="char__content_wrapper">
                                    <SeasonsList onEpisodeSelected={onEpisodeSelected}/>
                                    <CharList/>
                                </div>
                            </Route>
                            <Route exact path='/episodes/:episId'>
                                <div className="char__content_wrapper">
                                    <AboutEpisode epis={epis}/>
                                    <EpisodeChars chars={chars}/>
                                </div>
                            </Route>
                            <Route exact path='*'>
                                <Page404/>
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    )
}

export default App;