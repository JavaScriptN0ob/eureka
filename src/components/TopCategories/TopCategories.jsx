import React from 'react';
import { TopicBlock } from './TopBlock/TopicBlock';
import styles from "./TopCategories.module.scss";

export const TopCategories = props => (
    <div className={styles.categories}>
    <div className={styles.title}>Some of our top categories</div>
       <TopicBlock />
    </div>
    
);