import React, { useState } from 'react';
import './CartSidebar.css';

const CartSidebar = ({ cartItems, onRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <aside className="cart-sidebar">
      <h3>Cart #</h3>
      <p>Beli: {cartItems.length}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <span>{item.name}</span>
            <span>Rp {item.price.toLocaleString()}</span>
            <button className="remove-btn" onClick={() => onRemove(index)}>
              &#10060;
            </button>
          </li>
        ))}
      </ul>
      <div className="order-summary">
        <p>Order # Total</p>
        <p>Rp {total.toLocaleString()}</p>
      </div>
      <button className="order-btn" onClick={handleOrder}>Order</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Scan QR-Code</h2>
            <img src="/images/qrcode.png" alt="QR Code" />
            <p>Scan QR-Code di kasir untuk melakukan pembayaran dan menerima pesanan di kasir.</p>
            <p>Terimakasih Telah Berbelanja di Garut Delight</p>
            <button className="close-modal-btn" onClick={handleCloseModal}>Kembali</button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default CartSidebar;
