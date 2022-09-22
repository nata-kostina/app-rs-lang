import React from 'react';
import Navigation from '../Navigation';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { RouteNames } from "../../router";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
          <Link to={RouteNames.HOMEPAGE} className={styles['logo-box']} title={'Homepage'}>
              <div className={styles['logo__icon']}></div>
              <p className={styles['logo__text']}>RS Lang</p>
          </Link>
          <Navigation />
        </div>
    </header>
  );
};

export default Header;