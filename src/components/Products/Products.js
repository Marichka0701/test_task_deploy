import React, {useState} from 'react';

import styles from './Products.module.scss';
import {products} from "../../constants/products";
import Product_Card from "./Product_Card/Product_Card";

const Products = () => {
    const [itemsToShow, setItemsToShows] = useState(products.slice(0, 4));
    const [isShowAllItems, setIsShowAllItems] = useState(false);

    const handleShowMore = () => {
        setIsShowAllItems(prev => !prev);
        if (isShowAllItems) {
            setItemsToShows(products.slice(0, 4));
        } else {
            setItemsToShows(products);
        }
    }

    return (
        <div className={styles.productsContainer}>
            <h2 className={styles.productsContainer_title}>Our Products</h2>
            <div className={styles.productsContainer_products}>
                {
                    itemsToShow.map((card, index) => <Product_Card key={index} card={card}/>)
                }
            </div>
            <button
                className={styles.productsContainer_button}
                onClick={handleShowMore}
            > {isShowAllItems ? 'Show Less' : 'Show More'}</button>
        </div>
    );
};

export default Products;