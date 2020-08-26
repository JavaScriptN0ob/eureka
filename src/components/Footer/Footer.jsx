import React from '../../../node_modules/react';

import styles from "./Footer.module.scss";

import { FooterCategories } from './FooterCategories/FooterCategories';

export const Footer = props => (
    <div className={styles.footer}>
       <FooterCategories />
       <div className={styles.logo}>AppName Pty. Ltd 2020-2020©, All rights reserved</div>
    </div>
    
);