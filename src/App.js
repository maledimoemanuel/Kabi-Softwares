import React from 'react';
import Company from './components/Company';
import Services from './components/Services';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
