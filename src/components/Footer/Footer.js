import React from 'react';

import styles from './Footer.module.scss';
import location from './images/location.png';
import phone from './images/phone.png';
import send from './images/send.png'

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>

            <div className={styles.footer}>
                <div className={styles.footer_funiro}>
                    <h2 className={styles.footer_title}>Funiro.</h2>
                    <p className={styles.footer_funiro_lineHeight}>Worldwide furniture store since 2020. We sell over
                        1000+ branded products on our website</p>
                    <div>
                        <img src={location} alt="location logo"/>
                        <p>Sawojajar Malang, Indonesia</p>
                    </div>
                    <div>
                        <img src={phone} alt="phone icon"/>
                        <p>+6289 456 3455</p>
                    </div>
                    <p>www.funiro.com</p>
                </div>

                <div className={styles.footer_menu}>
                    <h2 className={styles.footer_title}>Menu</h2>
                    <ul>
                        <li>Products</li>
                        <li>Rooms</li>
                        <li>Inspirations</li>
                        <li>About Us</li>
                        <li>Terms & Policy</li>
                    </ul>
                </div>

                <div className={styles.footer_account}>
                    <h2 className={styles.footer_title}>Account</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Checkout</li>
                        <li>My Cart</li>
                        <li>My catalog</li>
                    </ul>
                </div>

                <div className={styles.footer_stayConnected}>
                    <h2 className={styles.footer_title}>Stay Connected</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                <div className={styles.footer_stayUpdated}>
                    <h2 className={styles.footer_title}>Stay Updated</h2>
                    <form className={styles.footer_stayUpdated_form} action="#">
                        <input className={styles.input} type="email" placeholder={'Enter your email'}/>
                        <button className={styles.input_btn} type={"submit"}>
                            <img src={send} alt="send icon"/>
                        </button>
                    </form>
                </div>
            </div>

        </footer>
    );
};

export default Footer;