// frontend/src/app/page.js
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import NameEmailModal from '../components/NameEmailModal';
import Footer from '../components/Footer';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <Header />
      <main style={{ marginTop: '80px' }}>
        <HeroSection />
        <ProductSection />
        {/* Include other sections as needed */}
      </main>
      <Footer />
      <NameEmailModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
}
