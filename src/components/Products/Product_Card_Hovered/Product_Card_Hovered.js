import React from 'react';

import styles from './Product_Card_Hovered.module.scss';
import like from './images/like.png';
import share from './images/share.png';

const ProductCard = () => {

    return (
        <div className={styles.productCardHovered}>
            <div>
                <button className={styles.productCardHovered_button}>Add to cart</button>

                <div className={styles.productCardHovered_options}>
                    <div className={styles.productCardHovered_options_share}>
                        <img src={share} alt="share icon"/>
                        <p>Share</p>
                    </div>

                    <div className={styles.productCardHovered_options_like}>
                        <img src={like} alt="heart icon"/>
                        <p>Like</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;