import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

// Placeholder components for other pages
const About = () => <div className="min-h-screen pt-20 px-4"><div className="max-w-7xl mx-auto py-12"><h1 className="text-4xl font-bold">About Page - Coming Soon</h1></div></div>;
const Services = () => <div className="min-h-screen pt-20 px-4"><div className="max-w-7xl mx-auto py-12"><h1 className="text-4xl font-bold">Services Page - Coming Soon</h1></div></div>;
const Products = () => <div className="min-h-screen pt-20 px-4"><div className="max-w-7xl mx-auto py-12"><h1 className="text-4xl font-bold">Products Page - Coming Soon</h1></div></div>;
const Contact = () => <div className="min-h-screen pt-20 px-4"><div className="max-w-7xl mx-auto py-12"><h1 className="text-4xl font-bold">Contact Page - Coming Soon</h1></div></div>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;