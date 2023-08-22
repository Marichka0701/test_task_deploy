import React from 'react';

import styles from './Rooms.module.scss';
import RoomsSlider from "./RoomsSlider/RoomsSlider";

const Rooms = () => {
    return (
        <div className={styles.roomsContainer}>
            <div className={styles.roomsContainer_info}>
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button>Explore More</button>
            </div>
            <RoomsSlider/>
        </div>
    );
};

export default Rooms;