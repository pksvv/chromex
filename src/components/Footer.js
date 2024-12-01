// frontend/src/components/Footer.js
'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <nav style={styles.navLinks}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="#products" style={styles.link}>Products</Link>
        <Link href="#features" style={styles.link}>Features</Link>
        <Link href="#contact" style={styles.link}>Contact</Link>
      </nav>
      <div style={styles.socialMedia}>
        {/* Replace with actual social media icons */}
        <a href="#" style={styles.socialLink}>FB</a>
        <a href="#" style={styles.socialLink}>TW</a>
        <a href="#" style={styles.socialLink}>IG</a>
      </div>
      <p style={styles.legal}>
        &copy; {new Date().getFullYear()} BrandName. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    textAlign: 'center',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '16px',
  },
  socialMedia: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  socialLink: {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '18px',
  },
  legal: {
    fontSize: '14px',
    color: '#666666',
  },
};

export default Footer;
