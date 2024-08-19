import React from 'react';

const Footer = ({ onStartChat, showContinueConversation }) => {
  return (
    <div className="relative z-10 mt-5 bg-white rounded-lg p-4">
      {/* Start Conversation Button */}
      <button
        className="w-full text-green-400 px-4 py-2 rounded-md hover:text-green-600 mb-2"
        onClick={onStartChat}
      >
        Start new message →
      </button>

      {/* Conditionally render the Continue Conversation button */}
      {showContinueConversation && (
        <button
          className="w-full text-green-400 px-4 py-2 rounded-md hover:text-green-600"
          onClick={onStartChat}
        >
          Continue conversation →
        </button>
      )}
    </div>
  );
};

export default Footer;
