import React from 'react';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

function Header (props) {
  return (
    <div className = { styles.Main }>
      <Link 
        className = { styles.Close }
        to="/eureka"
      > 
        &times; 
      </Link> 
      <p className = { styles.Bar }> { props.children } </p>
    </div>
  )
}

export default Header;