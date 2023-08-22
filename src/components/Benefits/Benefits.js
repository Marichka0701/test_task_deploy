import React from 'react';

import styles from './Benefits.module.scss';
import {benefits} from "../../constants/benefits";
import Benefit_Card from "./Benefit_Card/Benefit_Card";

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            {
                benefits.map((item, index) => <Benefit_Card key={index} card={item}/>)
            }
        </div>
    );
};

export default Benefits;