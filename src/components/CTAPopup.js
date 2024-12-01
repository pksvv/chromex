// frontend/src/components/CTAPopup.js

'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './CTAPopup.module.css';

Modal.setAppElement('body');

const CTAPopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      setModalIsOpen(false);
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <h2>Stay Updated!</h2>
        <p>Subscribe now to get the latest updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.buttons}>
          <button onClick={handleSubscribe} className={styles.subscribeButton}>
            Subscribe Now
          </button>
          <button onClick={() => setModalIsOpen(false)} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CTAPopup;
