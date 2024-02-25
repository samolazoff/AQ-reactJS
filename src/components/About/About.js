import { useSelector } from 'react-redux';

import './About.scss';

const About = () => {
    const text = useSelector((state) => state.lang.text.pages.main);
    return (
        <section className='app-main-page-about'>
            <h2 className="title-block">
                {text.title}
            </h2>
            {
                text.discript.map((elm, idx) => (
                    <p className="app-main-page-about-discript" key={idx}>
                        {elm}
                    </p>
                ))
            }
            <div className="slider">slider</div>
        </section>
    );
};

export default About;