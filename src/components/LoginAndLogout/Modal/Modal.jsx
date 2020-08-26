import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';

const Modal = ({heading, children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.close}>
          <Link to="/">&#10007;</Link>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
