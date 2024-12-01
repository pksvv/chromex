// frontend/src/components/HeroSection.js
'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Introducing Our Latest Product</h1>
        <p style={styles.subheading}>
          Experience innovation like never before with cutting-edge technology and sleek design.
        </p>
        <button style={styles.button}>Learn More</button>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'linear-gradient(90deg, #007AFF, #5856D6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    textAlign: 'center',
    color: '#ffffff',
    padding: '0 20px',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'normal',
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px 30px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default HeroSection;
