import React from 'react';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import logo from './assets/logo.jpg';

const App = () => {
  return (
    <div className="max-w-lg mt-10 mx-auto rounded-lg shadow-lg font-sans">
      {/* Container with gradient background */}
      <div className="relative">
        {/* Top-to-bottom gradient background covering 40% of height */}
        <div className="absolute inset-0 h-[40%] bg-gradient-to-b from-gray-700 to-gray-500 rounded-t-lg z-0"></div>
        
        <div className="relative p-5 pb-8">
          <Header />
          
          {/* Logo Container */}
          <div className="absolute left-[60px] transform -translate-x-1/2 -translate-y-1/4 bg-gray-600 p-1  rounded-full z-20 ">
            <img src={logo} alt="Logo" className="w-11 h-11 rounded-full" />
          </div>
          
          {/* FAQ and Footer Container */}
          <div className="relative z-10 mt-5 bg-white rounded-lg p-4 shadow-lg outline outline-offset-2 outline-gray-500/10">
            <FAQ />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
