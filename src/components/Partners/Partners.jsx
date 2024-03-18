import { useSelector } from 'react-redux';

import './Partners.scss';

import bvmImg from '../../static/img/partners/bvm.gif';
import ecogazImg from '../../static/img/partners/ecogaz.jpg';
import gazpromImg from '../../static/img/partners/gazprom.png';
import mnpzImg from '../../static/img/partners/mnpz.png';
import nefthimpngImg from '../../static/img/partners/nefthimpng.png';
import scitlesImg from '../../static/img/partners/scitles.png';


const Partners = () => {
    const imgPartners ={
        bvm : bvmImg,
        ecogaz : ecogazImg,
        gazprom : gazpromImg,
        mnpz : mnpzImg,
        nefthimpng : nefthimpngImg,
        scitles : scitlesImg,
    };
    const titleBlock = useSelector((state) => state.lang.text.pages.main.partners.title);
    const text = useSelector((state) => state.lang.text.pages.main.partners.data);
    return (
        <section className='app-partners container'>
            <h2 className="title-block">{titleBlock}</h2>
            <div className="app-partners-wrap flex-r">
                {
                    text.map((elm, idx) => (
                        <div className="app-partners-item flex-c" key={idx}>
                            <img src={imgPartners[elm[0]]} alt={elm[1]} className="app-partners__img"/>
                            <span className="app-partners__title">{elm[1]}</span>
                        </div>
                    ))
                }
            </div>
            
        </section>
    );
};

export default Partners;