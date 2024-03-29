import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

import Burger from '../Burger/Burger';
import Navbar from '../Navbar/Navbar';
import LangPanel from '../LangPanel/LangPanel';

import logo from '../../static/img/layout/logo.png';

const Header = () => {
    const headerTxt = useSelector((state) => state.lang.text.header);
    return (
        <header className='app-header'>
            <div className="bgc-header flex-r">
                <div className="bgc-header_light"></div>
                <div className="bgc-header_dark"></div>
            </div>
            <div className="app-header-content container flex-c">
                <h1 className='app-logo'>
                    <Link to="/">
                        <img className='app-logo__img' src={logo} alt="Logo_AQ"/>
                    </Link>
                </h1>
                <div className="app-nav flex-r">
                    <Burger/>
                    <Navbar/>
                    <LangPanel/>
                </div>
                <div className="app-presentation flex-c">
                    <span className="app-presentation__title">{headerTxt.presentation.title}</span>
                    {
                        headerTxt.presentation.subtitle.map((elem, idx) => {
                            return <span className="app-presentation__subtitle" key={idx}>{elem}</span>
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;