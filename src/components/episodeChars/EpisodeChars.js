import { useState, useEffect } from 'react';
import BreakingBadService from '../../services/BreakingBadService';
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const EpisodeChars = (props) => {
    
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
// 'Walter White', 'Jesse Pinkman', 'Skyler White'
    const [chars, setChars] = useState(props.chars);

    const breakingBadService = new BreakingBadService();
    
    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () =>  {
        chars.map(name => {
            breakingBadService.getCharacterByName(name)
                .then(result => result)
                .then(data => onCharsLoaded(data))
                .catch(onError)
        });
    }

    const onCharsLoaded = (char) => {
        if (char[0]) {
            setCharList(charList => [...charList, char[0]]);
        }
        
        setLoading(loading => false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const spinner = loading ? <Spinner/> : null;
    //<View key={item.id} char={item}/>
    const content = charList && !loading && !error ? charList.map(item => <View key={item.id} char={item}/>) : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <section className="chars">
            {errorMessage}
            {spinner}
            <div className="chars_list">
                {content}
            </div>
        </section>
    )
}

const View = ({char}) => {
    const {name, img, nickname} = char;

    return (
        <div className="chars_item">
            <div className="chars_item__img">
                <img src={img} alt={name}/>
            </div>
            <div className="chars_item__name">{name}/{nickname}</div>
        </div>
    )
}

export default EpisodeChars;