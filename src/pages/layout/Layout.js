import {Outlet} from 'react-router-dom';

import './Layout.scss';

import Header from '../../components/Header/Header';

const Layout = () => {
    return (
        <div className='app flex-c'>
            <Header/>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default Layout;