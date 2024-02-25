import './SliderAbout.sass';

export default function SliderAbout() {
    return (
        <div className="about-slider">
            <div className="about-slider__wrp swiper-wrapper">
                <div className="about-slider__item swiper-slide">
                    <div className="about-slider__img">
                        <img src="" alt="" />
                    </div>
                    <div className="about-slider__content">
                        <span className="about-slider__text">
                            Неразрушающий контроль технических устройств различного назначения
                        </span>
                        <a href="#" className="about-slider__button">More</a>
                    </div>
                </div>
            </div>
            <div className="about-slider__pagination"></div>
        </div>
    );
}
