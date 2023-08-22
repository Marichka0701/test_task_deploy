import React from 'react';

import styles from './Benefit_Card.module.scss';

const BenefitCard = ({card}) => {
    const {title, description, image} = card;

    return (
        <div className={styles.benefitCard}>
            <div className={styles.benefitCard_image}>
                <img src={require(`./images/${image}.png`)} alt={`${image} icon`}/>
            </div>

            <div className={styles.benefitCard_info}>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;