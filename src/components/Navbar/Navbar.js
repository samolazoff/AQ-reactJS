import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navbar.scss';

const Navbar = () => {
    const text = useSelector((state) => state.lang.text.header.navbar);
    return (
        <nav className='app-nav'>
            <ul className='app-nav-items flex-r'>
                {
                    text.map((elm, idx) => (
                        <li className='app-nav__item' key={idx}>
                            <NavLink to={elm[1]}>{elm[0]}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;