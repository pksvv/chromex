// frontend/src/components/HeroSection.js

'use client';

import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <h1>Experience Innovation</h1>
      <p>Capture and split webpage screenshots effortlessly.</p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
};

export default HeroSection;
