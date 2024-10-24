// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import CartSidebar from './components/CartSidebar';
import About from './components/About';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Dodol', price: 12000, image: '/images/dodol.png' },
    { id: 2, name: 'Burayot', price: 10000, image: '/images/burayot.png' },
    { id: 3, name: 'Chocodot', price: 15000, image: '/images/chocodot.png' },
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.reload();
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <div className="main-content">
                      <LandingPage products={products} addToCart={addToCart} />
                      <CartSidebar cartItems={cartItems} onRemove={removeFromCart} />
                    </div>
                    <Footer onSearch={setSearchTerm} />
                  </>
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </Router>
  );
}

export default App;
