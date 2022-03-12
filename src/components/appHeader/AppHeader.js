import './appHeader.scss';
import {Link, NavLink} from 'react-router-dom';


import logo from '../../resources/images/breaking-bad.png';

const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="app__title">
                <Link to="/">                    
                    <img src={logo} alt="breaking bad"/>
                </Link>
            </div>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={{'color' : '#1b9f00'}} to="/">Characters</NavLink></li>
                    /
                    <li><NavLink exact activeStyle={{'color' : '#1b9f00'}} to="/episodes">Episodes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;