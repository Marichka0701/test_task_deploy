import React, {useState} from 'react';

import styles from './Product_Card.module.scss';
import Product_Card_Hovered from "../Product_Card_Hovered/Product_Card_Hovered";

const ProductCard = ({card}) => {
    const {title, description, price, oldPrice, discount} = card;

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div
            className={styles.productCard_wrapper}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <div className={styles.productCard}>
                <div className={styles.productCard_photo}>
                    <img src={require(`./images/${title}.png`)} alt=""/>
                    {discount && (
                        discount === 'New' ?
                            <div className={styles.productCard_photo_new}>{discount}</div> :
                            <div className={styles.productCard_photo_discount}>{discount}</div>
                    )}
                </div>
                <div className={styles.productCard_info}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className={styles.productCard_info_price}>
                        <p className={styles.productCard_info_price_normal}>{price}</p>
                        <p className={styles.productCard_info_price_oldPrice}>{oldPrice}</p>
                    </div>
                </div>
            </div>
            {isHovered && <Product_Card_Hovered />}
        </div>
    );
};

export default ProductCard;