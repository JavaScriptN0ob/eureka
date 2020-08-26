import React from '../../../node_modules/react';
import { ArticleCard } from './ArticleCard/ArticleCard';
import styles from "./Articles.module.scss";

export const Articles = (props) => (
    <div className={styles.article}>
    <div className={styles.title}>Articles, stories and more</div>
       <ArticleCard />
        <button className={styles.articleButton}>Visit our blog</button>
        
    </div>
    
);
