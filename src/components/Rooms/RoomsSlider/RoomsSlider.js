import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './RoomsSlider.module.scss';
import {rooms} from "../../../constants/rooms";
import arrow from './images/arrow.png';

function Rooms() {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{el: '.swiper-pagination', clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {
                    rooms.map((room, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slideContainer}>
                                <img src={require(`./images/${room}`)} alt={`room ${index + 1}`}/>

                                <div className={styles.slideContainer_info}>
                                    <div className={styles.slideContainer_info_text}>
                                        <p className={styles.slideContainer_info_text_one}>01 - Bed Room</p>
                                        <p className={styles.slideContainer_info_text_two}>Inner Peace</p>
                                    </div>

                                    <div className={styles.slideContainer_info_button}>
                                        <img src={arrow} alt="arrow icon"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Rooms;