import React from 'react';
import './QRCode.css';

const QRCode = () => {
  return (
    <section id="qr-code" className="container">
      <h2>QR Code Pembayaran</h2>
      <img src="https://via.placeholder.com/200" alt="QR Code" />
      <p>Scan QR Code untuk melakukan pembayaran dengan mudah dan cepat.</p>
    </section>
  );
};

export default QRCode;
