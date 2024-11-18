import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoanTypes from './components/LoanTypes';
import LoanComparison from './components/LoanComparison';
import EMICalculator from './components/EMICalculator';
import ApplicationTracker from './components/ApplicationTracker';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <LoanTypes />
        <LoanComparison />
        <EMICalculator />
        <ApplicationTracker />
        <AboutUs />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;