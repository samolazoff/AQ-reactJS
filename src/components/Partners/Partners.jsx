

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
    
    return (
        <section className='app-partners container'>
            <h2 className="title-block">Partners</h2>

            
        </section>
    );
};

export default Partners;