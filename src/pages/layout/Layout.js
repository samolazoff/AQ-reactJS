import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className='app'>
            <header>header</header>
            <main className='app-main'>
                <Outlet></Outlet>
            </main>
            <footer>footer</footer>
        </div>
    );
};

export default Layout;