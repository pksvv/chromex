// frontend/src/components/NameEmailModal.js
'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body'); // Set to 'body' for Next.js 13

const NameEmailModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && email) {
      // You can store the name and email as needed
      console.log(`Name: ${name}, Email: ${email}`);
      onClose();
    } else {
      alert('Please enter both your name and email.');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="User Information">
      <h2>Welcome!</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit}>Proceed</button>
    </Modal>
  );
};

export default NameEmailModal;
