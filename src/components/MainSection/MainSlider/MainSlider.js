import React, {useState} from 'react';

import styles from './MainSlider.module.scss';
import {main_slider} from "../../../constants/main_slider";
import arrow from './images/arrow.png';

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNextSlide = () => {
        if (currentIndex !== main_slider.length) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === main_slider.length) {
            setCurrentIndex(1);
        }
    }

    const handlePrevSlide = () => {
        if (currentIndex !== 1) {
            setCurrentIndex(currentIndex - 1);
        } else if (currentIndex === 1) {
            setCurrentIndex(main_slider.length);
        }
    }

    const handleMoveToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                {
                    main_slider.slice(currentIndex - 1, currentIndex + 2).map((item, index) => (
                        <div
                            key={index}
                            className={styles.slider_item}
                        >
                            <img src={require(`./images/${item}`)} alt={`slider ${index + 1}`}/>
                        </div>
                    ))
                }
            </div>

            <div className={styles.sliderContainer_controllersContainer}>
                <div className={styles.sliderContainer_controllersContainer_controllers}>
                    <div className={styles.sliderContainer_dots}>
                        {
                            Array.from({length: main_slider.length}).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleMoveToSlide(index + 1)}
                                    className={`${styles.sliderContainer_dots_dot} ${currentIndex === index + 1 ? styles.active : ''}`}
                                >
                                    <div className={styles.sliderContainer_dots_dot_inner}></div>
                                </div>
                            ))
                        }
                    </div>

                    <div className={styles.sliderContainer_controllersContainer_controllers_buttons}>
                        <button
                            onClick={handlePrevSlide}
                            className={styles.sliderContainer_prev}
                        >
                            <img src={arrow} alt="arrow icon"/>
                        </button>

                        <button
                            onClick={handleNextSlide}
                            className={styles.sliderContainer_next}
                        >
                            <img src={arrow} alt="arrow icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;