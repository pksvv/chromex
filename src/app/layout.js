// frontend/src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'WebPage Split Capture',
  description: 'Capture and split webpage screenshots',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
