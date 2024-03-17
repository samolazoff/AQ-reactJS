import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './SliderAbout.sass';

import img1 from '../../static/img/slider-about/img1.jpg';
import img2 from '../../static/img/slider-about/img2.jpg';
import img3 from '../../static/img/slider-about/img3.png';
import img4 from '../../static/img/slider-about/img4.png';


export default function SliderAbout() {
   
    const textSliders = useSelector((state) => state.lang.text.pages.main.aboutSlider);
    const textBtn = useSelector((state) => state.lang.text.common.btnMore);
    const arrImg = [img1, img2, img3, img4];
    return (
            <div className='slider flex-r'>
                { 
                    textSliders.map((elm, idx) => {
                        if( idx === 0){
                            return (
                                <div key={idx} className='slide__item flex-r'>
                                    <div className="slide__img">
                                        <img src={arrImg[idx]} alt="img slider" />
                                    </div>
                                    <div className="slide__content flex-c">
                                        <span className="about-slider__text">
                                            {elm}
                                        </span>
                                        <Link to="/services" className="slide__button">{textBtn}</Link>
                                    </div>
                                </div>
                            )
                        }else{
                            return (
                                <div key={idx} className='slide__item flex-r d-none'>
                                    <div className="slide__img">
                                        <img src={arrImg[idx]} alt="img slider" />
                                    </div>
                                    <div className="slide__content flex-c">
                                        <span className="about-slider__text">
                                            {elm}
                                        </span>
                                        <Link to="/services" className="slide__button">{textBtn}</Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
        </div>
    );
}

