import React, {useRef} from 'react';
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import styles from './Header.module.scss';
import search from './images/search.png';
import like from './images/like.png';
import person from './images/person.jpg';
import cart from './images/cart.png';


const Header = () => {
    const navRef = useRef();

    const showContent = () => {
        navRef.current.classList.toggle(`${styles.responsiveHeader}`);
    }

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.header}>
                <h2 className={styles.header_title}>Funiro.</h2>
                <nav className={styles.header_nav} ref={navRef}>
                    <div className={styles.header_nav_nav}>
                        <div className={styles.header_nav_options}>
                            <form className={styles.header_nav_options_form} action={'#'}>
                                <select className={styles.select} name="products" >
                                    <option value="">Products</option>
                                    <option value="dog">Pizza</option>
                                    <option value="cat">Burger</option>
                                </select>

                                <select className={styles.select} name={"rooms"}>
                                    <option value="">Rooms</option>
                                    <option value="dog">1 room</option>
                                    <option value="cat">2 room</option>
                                </select>
                            </form>

                            <NavLink className={styles.header_nav_options_link} to={'#'}>Inspirations</NavLink>


                            <form className={styles.header_nav_options_form} action="#">
                                <div>
                                    <input placeholder={'Search for minimalist chair'} type="text"/>
                                    <img src={search} alt="search icon"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showContent}>
                        <FaTimes/>
                    </button>
                </nav>
                <div className={styles.header_visible}>
                    <button
                        className={styles.navBtn}
                        onClick={showContent}>
                        <FaBars/>
                    </button>
                    <div className={styles.header_visible_personal}>
                        <img src={like} alt="heart icon"/>
                        <img src={cart} alt="cart icon"/>
                        <img src={person} alt="person's photo"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;