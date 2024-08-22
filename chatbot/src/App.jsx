import React, { useState } from 'react';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatPage from './components/ChatPage'; 
import logo from './assets/logo.jpg';

const App = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasConversationStarted, setHasConversationStarted] = useState(false);


  const handleStartChat = () => {
    setIsChatStarted(true);
    setHasConversationStarted(true); 
  };
  const handleContinueChat = () => {
    setIsChatStarted(true);  
  };
  

  const handleBackToLanding = () => {
    setIsChatStarted(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsChatStarted(false);
  };

  return (
    <div className="relative">
      {/* Always visible logo button */}
      <button
        onClick={handleOpenModal}
        className="fixed bottom-4 right-4 bg-gray-600 p-2 rounded-full shadow-lg border border-gray-500 z-40"
      >
        <img src={logo} alt="Logo" className="w-11 h-11 rounded-full" />
      </button>

      {/* Modal for Landing Page and Chat Page */}
      {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div
        className="bg-white rounded-lg w-full max-w-md relative"
        style={{
          transform: 'translateX(-40px) translateY(-35px)'
        }}
      >
            {/* Close Button for the Modal */}
            {isChatStarted ? (
              <button onClick={handleCloseModal} className="absolute top-2 right-7 text-white text-3xl z-10">
                &times;
              </button>
            ) : (
              <button onClick={handleCloseModal} className="absolute top-5 right-7 text-white text-3xl z-10">
                &times;
              </button>
            )}

            {/* Conditional Rendering of Chat Page or Landing Page */}
            {isChatStarted ? (
              <ChatPage onBackToLanding={handleBackToLanding} 
              isNewConversation={!hasConversationStarted} />
            ) : (
              <div className="relative bg-white rounded-lg p-3 shadow-lg">
                {/* Top-to-bottom gradient background covering 40% of height */}
                <div className="absolute inset-0 h-[40%] bg-gradient-to-b from-gray-700 to-gray-500 rounded-t-lg z-0"></div>
                
                <div className="relative p-4 pb-6">
                  <Header onClose={handleCloseModal} />
                  
                  {/* Logo Container */}
                  <div className="absolute left-[60px] transform -translate-x-1/2 -translate-y-1/4 bg-gray-600 p-1 rounded-full z-20 border border-gray-500">
                    <img src={logo} alt="Logo" className="w-9 h-9 rounded-full" />
                  </div>
                  
                  {/* FAQ and Footer Container */}
                  <div className="relative z-10 mt-5 bg-white rounded-lg p-3 shadow-lg outline outline-offset-2 outline-gray-500/10">
                    <FAQ />
                    <Footer 
  onStartChat={handleStartChat} 
  onContinueChat={handleContinueChat} 
  showContinueConversation={hasConversationStarted} 
/>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
