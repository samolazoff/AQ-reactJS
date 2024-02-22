import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import'./Footer.scss';

const Footer = () => {
    const footerTxt = useSelector((state) => state.lang.text.footer);
    return (
        <footer className="app-footer">
            <div className="container flex-c">
                <Link to='/' className='app-footer_link flex-c'>
                    <span>{footerTxt}</span>
                    <span>© 2024 aq.minsk.by</span>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;