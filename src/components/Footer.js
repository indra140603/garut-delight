import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(''); // Reset input setelah pencarian
  };

  return (
    <footer className="footer">
      <input 
        type="text" 
        placeholder="Cari Oleh-oleh Garut..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>&#128269;</button>
      <p>@Garut_Delight</p>
    </footer>
  );
};

export default Footer;
