import {Outlet} from 'react-router-dom';

import './Layout.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = () => {
    return (
        <div className='app flex-c'>
            <Header/>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;