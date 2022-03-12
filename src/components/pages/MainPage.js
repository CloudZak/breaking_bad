import RandomChar from "../randomChar/RandomChar";
import SeasonsList from "../seasonsList/SeasonsList";
import CharList from "../charList/CharList";

const MainPage = (props) => {

    return (
        <>
            <RandomChar/>
                <div className="char__content_wrapper">
                    <SeasonsList onEpisodeSelected={props.onEpisodeSelected}/>
                    <CharList/>
                </div>
        </>
    )
}

export default MainPage;