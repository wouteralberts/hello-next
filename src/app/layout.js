import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    {children}
    <footer>Copyright Wouter</footer>
    </body>
    </html>
  );
}

export default RootLayout;
