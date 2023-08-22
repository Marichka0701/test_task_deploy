import React from 'react';

import styles from './MainSection.module.scss';
import Header from "../Header/Header";
import MainSlider from "./MainSlider/MainSlider";

const MainSection = () => {
    return (
        <section className={styles.mainSection}>
            <Header/>
            <div className={styles.mainSection_main}>
                <MainSlider/>

                <div className={styles.mainSection_main_layout}>
                    <h1>High-Quality Furniture Just For You</h1>
                    <p>Our furniture is made from selected and best quality materials that are suitable for your dream
                        home</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default MainSection;