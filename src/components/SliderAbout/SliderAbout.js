import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

import './SliderAbout.scss';

import img1 from '../../static/img/slider-about/img1.jpg';
import img2 from '../../static/img/slider-about/img2.jpg';
import img3 from '../../static/img/slider-about/img3.png';
import img4 from '../../static/img/slider-about/img4.png';


export default function SliderAbout() {

    const textSliders = useSelector((state) => state.lang.text.pages.main.aboutSlider);
    const textBtn = useSelector((state) => state.lang.text.common.btnMore);
    const arrImg = [img1, img2, img3, img4];
    console.log(arrImg);
    return (
        <Swiper
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ['100%', 0, 0],
            },
            }}
            space-between = '30'
            loop = 'true'
            mousewheel-invert = 'false'
            autoplay-delay = '3000'
            autoplay-disableOnInteraction = 'true'

        >
            {
                textSliders.map((elm, idx) => (
                    <SwiperSlide key={idx}>
                        {/* <div className="about-slider__img"> */}
                            <img className='about-slider__img' src={arrImg[idx]} alt="img slider" />
                        {/* </div> */}
                        <div className="about-slider-content flex-c">
                            <span className="about-slider__text">
                                {elm}
                            </span>
                            <Link to="/services" className="about-slider__button">{textBtn}</Link>
                        </div>
                    </SwiperSlide>
                ))
            }           
        </Swiper>
    );
}
