import { useState, useEffect } from 'react'
import BreakingBadService from "../../services/BreakingBadService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import './randomChar.scss';

const RandomChar = () => {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const breakingBadService = new BreakingBadService();

    useEffect(() => {
        updateChar();
    }, []);

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (57 - 1)) + 1;
        breakingBadService.getCharacter(id)
            .then(result => result)
            .then(data => onCharLoaded(data))
            .catch(onError);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading && char ? <View char={char}/> : null;

    return (
        <section className="random">
            {errorMessage}
            {spinner}
            {content}
            <div className="random_update">
                <div className="random_update__text">If you want to change the character, click the button below</div>
                <button onClick={updateChar} className="btn random_update__btn">Next</button>
            </div>
        </section>
    )
}

const View = ({char}) => {
    const {name, description, img, nickname, category} = char;

    return ( 
        <div className="random_char">
            <div className="random_char__img">
                <img src={img} alt={name}/>
            </div>
            <div className="random_char__text">
                <div className="random_char__title">{name}/{nickname}</div>
                <div className="random_char__descr">Occupation: {description}<br/><br/>{category}</div>
            </div>
        </div>
    )
}

export default RandomChar;