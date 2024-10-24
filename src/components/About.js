import React from 'react';
import './About.css'; // Pastikan Anda sudah membuat file CSS ini

const About = () => {
  return (
    <div className="about-container">
      <h1>GARUT DELIGHT</h1>
      <img src="/images/logo1.png" alt="Garut Delight Logo" className="about-image" />
      <p>
        Makanan khas Oleh Oleh dikenal dengan cita rasa yang unik dan khas, yang sering kali menggabungkan
        rasa manis, gurih, pedas, dan asam dalam berbagai hidangannya. Makanan khas Garut cenderung
        memiliki keseimbangan rasa manis dan gurih, dengan beberapa makanan juga menghadirkan sensasi
        pedas dan asam, memberikan pengalaman kuliner yang menarik.
      </p>
      <h2></h2>
      <ul>
        <li>Indra Mauludani Efendi</li>
      </ul>
    </div>
  );
};

export default About;
