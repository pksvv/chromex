// frontend/src/components/Header.js

'use client';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BrandName</div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
