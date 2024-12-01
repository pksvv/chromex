// frontend/src/app/page.js
'use client';

import React, { useState } from 'react';
import NameEmailModal from '../components/NameEmailModal';
import ScreenshotForm from '../components/ScreenshotForm';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div>
      <NameEmailModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
      {!modalIsOpen && <ScreenshotForm />}
    </div>
  );
}
