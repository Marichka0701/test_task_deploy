import React from 'react';

import styles from './Furniture.module.scss';
import photoOne from './images/one.png';
import photoTwo from './images/two.png';
import photoThree from './images/three.png';
import photoFour from './images/four.png';
import photoFive from './images/five.png';
import photoSix from './images/six.png';
import photoSeven from './images/seven.png';
import photoEight from './images/eight.png';
import photoNine from './images/nine.png';

const Furniture = () => {
    return (
        <div className={styles.furnitureWrapper}>
            <div className={styles.furnitureWrapper_title}>
                <p>Share your setup with</p>
                <h2>#FuniroFurniture</h2>
            </div>

            <div className={styles.furnitureWrapper_furniture}>
                <div className={styles.furnitureWrapper_furniture_left}>
                    <div className={styles.furnitureWrapper_furniture_left_top}>
                        <img src={photoOne} alt="furniture and interior"/>
                        <img src={photoThree} alt="furniture and interior"/>
                    </div>
                    <div className={styles.furnitureWrapper_furniture_left_bottom}>
                        <img src={photoTwo} alt="furniture and interior"/>
                        <img src={photoFour} alt="furniture and interior"/>
                    </div>
                </div>
                <div>
                    <img src={photoFive} alt="furniture and interior"/>
                </div>
                <div className={styles.furnitureWrapper_furniture_right}>
                    <div className={styles.furnitureWrapper_furniture_right_top}>
                        <img src={photoSix} alt="furniture and interior"/>
                        <img src={photoEight} alt="furniture and interior"/>
                    </div>
                    <div className={styles.furnitureWrapper_furniture_right_bottom}>
                        <img src={photoSeven} alt="furniture and interior"/>
                        <img src={photoNine} alt="furniture and interior"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Furniture;