// frontend/src/components/NameEmailModal.js
'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const NameEmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      onClose();
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Subscribe"
      style={modalStyles}
    >
      <div style={styles.container}>
        <button onClick={onClose} style={styles.closeButton}>×</button>
        <h2 style={styles.heading}>Stay Updated!</h2>
        <p style={styles.subheading}>Subscribe now to get the latest updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe} style={styles.subscribeButton}>
          Subscribe Now
        </button>
      </div>
    </Modal>
  );
};

const modalStyles = {
  content: {
    inset: 'auto',
    margin: 'auto',
    padding: 0,
    border: 'none',
    background: 'none',
    overflow: 'visible',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const styles = {
  container: {
    background: 'linear-gradient(90deg, #007AFF, #5856D6)',
    padding: '40px 20px',
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '400px',
    textAlign: 'center',
    color: '#ffffff',
    margin: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#ffffff',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    padding: '10px',
    borderRadius: '20px',
    border: 'none',
    marginBottom: '20px',
    fontSize: '14px',
  },
  subscribeButton: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px 30px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default NameEmailModal;
