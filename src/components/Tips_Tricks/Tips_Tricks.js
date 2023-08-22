import React, {useState} from 'react';

import styles from './Tips_Tricks.module.scss';
import Tips_Tricks_Card from "./Tips_Tricks_Card/Tips_Tricks_Card";
import {tips_tracks} from "../../constants/tips_tracks";
import arrow from './images/arrow.png';


const TipsTricks = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrev = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(prev => prev - 1)
        }
    };

    const handleNext = () => {
        if (currentIndex !== tips_tracks.length) {
            setCurrentIndex(prev => prev + 1)
        }
    };

    const handleMoveToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.tripsTracksWrapper}>
            <h2 className={styles.tripsTracksWrapper_title}>Tips & Tricks</h2>

            <div className={styles.tripsTracksWrapper_slider}>
                <div
                    onClick={handlePrev}
                    className={`${styles.tripsTracksWrapper_slider_leftArrow} ${(currentIndex === 0) ?
                        `${styles.tripsTracksWrapper_slider_leftArrow_none}` : ''}`}
                >
                    <img src={arrow} alt="arrow icon"/>
                </div>

                <div className={styles.tripsTracksContainer}>
                    <div className={styles.tripsTracks}>
                        {
                            tips_tracks.slice(currentIndex, currentIndex + 3).map((card, index) =>
                                <Tips_Tricks_Card key={index} card={card}/>)
                        }
                    </div>
                    <div className={styles.tripsTracksContainer_dots}>
                        {
                            Array.from({length: tips_tracks.length - 3}).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleMoveToSlide(index + 1)}
                                    className={`${styles.tripsTracksContainer_dots_dot} ${currentIndex === index + 1 ? styles.active : ''}`}
                                >
                                    <div className={styles.tripsTracksContainer_dots_dot_inner}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div
                    onClick={handleNext}
                    className={`${styles.tripsTracksWrapper_slider_rightArrow} ${(currentIndex === tips_tracks.length - 3) ?
                        `${styles.tripsTracksWrapper_slider_rightArrow_none}` : ''}`}
                >
                    <img src={arrow} alt="arrow icon"/>
                </div>
            </div>
        </div>
    );
};

export default TipsTricks;