import './Header.scss';

import Burger from '../Burger/Burger';
import Navbar from '../Navbar/Navbar';
import LangPanel from '../LangPanel/LangPanel';

import logo from '../../static/img/layout/logo.png';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="bgc-header flex-r">
                <div className="bgc-header_light"></div>
                <div className="bgc-header_dark"></div>
            </div>
            <div className="app-header-content container">
                <h1 className='app-logo'>
                    <a href="/">
                        <img className='app-logo__img' src={logo} alt="Logo_AQ"/>
                    </a>
                </h1>
                <div className="app-nav flex-r">
                    <Burger/>
                    <Navbar/>
                    <LangPanel/>
                </div>
                <div className="app-presentation flex-c">
                    <span className="app-presentation__title">Title</span>
                    <span className="app-presentation__subtitle">subtitle</span>
                    <span className="app-presentation__subtitle">subtitle</span>
                </div>
            </div>
        </header>
    );
};

export default Header;