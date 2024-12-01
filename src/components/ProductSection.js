// frontend/src/components/ProductSection.js
'use client';

import React from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Product One',
    description: 'An amazing product that will change your life.',
    image: '/images/product1.png', // Place your image in public/images/
  },
  {
    name: 'Product Two',
    description: 'A revolutionary product for modern needs.',
    image: '/images/product2.png',
  },
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <section id="products" style={styles.section}>
      <h2 style={styles.heading}>Our Products</h2>
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} style={styles.productCard}>
            <div style={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                style={styles.image}
              />
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.learnMoreButton}>Learn More</button>
              <button style={styles.buyButton}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '60px',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
  },
  productCard: {
    width: '300px',
    padding: '20px',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '200px',
    marginBottom: '20px',
  },
  image: {
    borderRadius: '10px',
  },
  productName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  learnMoreButton: {
    backgroundColor: '#007AFF',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  buyButton: {
    backgroundColor: '#FF3B30',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ProductSection;
