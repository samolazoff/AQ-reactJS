import About from '../../components/About/About';
import NewsMini from '../../components/NewsMini/NewsMini';

import './Main.scss';

const Main = () => {
    return (
        <>
           <section className='container app-main-page'>
                <div className="app-main-page-about-wrap flex-r">
                    <About/>
                    <NewsMini/>
                </div>
           </section>
        </>
    );
};

export default Main;