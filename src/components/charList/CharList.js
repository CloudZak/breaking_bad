import { useState, useEffect } from 'react'
import BreakingBadService from "../../services/BreakingBadService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import './charList.scss';

const CharList = () => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [charEnded, setCharEnded] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [error, setError] = useState(false);

    const breakingBadService = new BreakingBadService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) =>  {
        onCharsLoading();
        breakingBadService.getAllCharactersOffset(offset)
            .then(result => result)
            .then(data => onCharsLoaded(data))
            .catch(onError);
    }

    const onCharsLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 4) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setOffset(offset => offset + 4);
        setNewItemLoading(newItemLoading => false);
        setLoading(loading => false);
        setCharEnded(charEnded => ended);
    }

    const onCharsLoading = () => {
        setNewItemLoading(true);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const spinner = loading ? <Spinner/> : null;
    const content = charList && !loading && !error ? charList.map(item => <View key={item.id} char={item}/>) : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <section className="chars">
            {errorMessage}
            {spinner}
            <div className="chars_list">
                {content}
            </div>
            <button disabled={newItemLoading} onClick={() => onRequest(offset)} style={{'display': charEnded ? 'none' : 'inline-block'}} className="btn chars_btn">Load more</button>
        </section>
    )
}

const View = ({char}) => {
    const {name, img, nickname} = char;

    return (
        <div className="chars_item">
            <div className="chars_item__img">
                <img src={img} alt='walter'/>
            </div>
            <div className="chars_item__name">{name}/{nickname}</div>
        </div>
    )
}

export default CharList;