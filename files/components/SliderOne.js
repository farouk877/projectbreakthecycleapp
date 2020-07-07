import React,{ useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SliderOne = () => {
    const [swiper, setSwiper] = useState(null);



    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
          swiper.slidePrev();
        }
    };

    return (
        <section className="slider-area">
            <div className="homepage-slide1">

                <Swiper getSwiper={setSwiper}>
                <div className="single-slide-item slide-bg1">
                    <div className="slide-item-table">
                        <div className="slide-item-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="slider-heading">
                                            <h2 className="slider__title">Sustainably breaking the cycle of injustice</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide-item slide-bg2">
                    <div className="slide-item-table">
                        <div className="slide-item-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="slider-heading">
                                            <h2 className="slider__title">Creative fundraisers empowering nonprofits</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Swiper>


                <div className="owl-dots">
                    <div onClick={goPrev} className="owl-dot"><span></span></div>
                    <div onClick={goNext} className="owl-dot"><span></span></div>
                </div>


            </div>
        </section>
    );
};

export default SliderOne;
