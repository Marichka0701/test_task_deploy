import React from 'react';

import styles from './Tips_Tricks_Card.module.scss';

const TipsTricksCard = ({card}) => {
    const {image, title, date} = card;

    return (
        <div className={styles.tipsTracksCard}>
            <div className={styles.tipsTracksCard_image}>
                <img src={require(`./images/${image}.png`)} alt={`${image} icon`} />
            </div>

            <div className={styles.tipsTracksCard_info}>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default TipsTricksCard;