// frontend/src/components/Header.js
'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.logo}>
          BrandName
        </Link>
        <div style={styles.navLinks}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="#products" style={styles.link}>Products</Link>
          <Link href="#features" style={styles.link}>Features</Link>
          <Link href="#contact" style={styles.link}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#000000',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
