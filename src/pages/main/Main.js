import About from '../../components/About/About';

import './Main.scss';

const Main = () => {
    return (
        <>
           <section className='container app-main-page'>
                <div className="app-main-page-about-wrap flex-r">
                    <About/>
                    <aside className='app-min-news'>min-news</aside>
                </div>
           </section>
        </>
    );
};

export default Main;