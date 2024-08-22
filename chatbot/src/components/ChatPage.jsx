import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import logo from '../assets/logo.jpg';
import { CHAT_MESSAGES } from '../constants';

const ChatPage = ({ onBackToLanding }) => {
  const [renderedMessages, setRenderedMessages] = useState([]);
  const [inputValue, setInputValue] = useState(''); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    let timeouts = [];
    CHAT_MESSAGES.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setRenderedMessages((prevMessages) => [...prevMessages, message]);
      }, index * 400);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') return; 

    const userMessage = {
      id: renderedMessages.length + 1,
      text: inputValue,
      icon: logo,
      isUser: true,
    };

    setRenderedMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue(''); 

    try {
      setIsLoading(true);
      const response = await axios.post(
        'https://nikles-ml-service.sense-23.com/chat',
        {
          question: inputValue,  
          session_id: 'etz70jdfr' 
        },
        {
          headers: {
            'Content-Type': 'application/json',
          
          },
          responseType:"text"
        }
      );

      console.log('Response from server:', response);
      const processedText = response.data
      .split('\n\n')  // Split on double newlines to separate events
      .map(chunk => chunk.replace(/^data: /gm, ''))  // Remove "data: " prefix from each line
      .join('')  // Join all the parts into a single string
      .replace(/\\n/g, '')  // Remove \n that are embedded in the string
      .replace(/\\/g, '')  // Remove all backslashes
      .replace(/""/g, '')  // Remove all double quotes
      .replace(/"\s/g, '')  // Remove remaining quotes followed by spaces
      .replace(/"/g, '');  // Remove any remaining stray quotes
    

      
  
  
  
  
    console.log('Processed text:', processedText);
      

      const botResponse = {
        id: renderedMessages.length + 2,
        text: processedText,
        icon: logo,
        isUser: false, 
      };

      setRenderedMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = {
        id: renderedMessages.length + 2,
        text: 'Error: Unable to fetch response from the server.',
        icon: logo,
        isUser: false, 
      };
      setRenderedMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[650px] bg-gray-100 max-w-lg mx-auto rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg relative">
        <button onClick={onBackToLanding} className="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">Nikles Bot</h1>
      </div>

      {/* Chat Messages */}
     <div className="flex-1 p-4 space-y-4 overflow-y-auto">
  {renderedMessages.map((message) => (
    <div
      key={message.id}
      className={`flex items-start space-x-2 ${message.isUser ? 'justify-end' : ''}`}
    >
      {!message.isUser && (
        <div className="bg-gray-800 text-white rounded-full p-2">
          <img src={message.icon} alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
      )}
      <div
        className={`${
          message.isUser ? 'bg-gray-500' : 'bg-gray-700'
        } text-white rounded-lg p-3 max-w-xs`}
      >
        {message.productName || message.imageUrl || message.productUrl ? (
          <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
            {message.imageUrl && (
              <div className="flex items-center space-x-4">
                <img
                  src={message.imageUrl}
                  alt={message.productName || 'Product Image'}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  {message.productName && (
                    <h2 className="text-xl font-bold text-gray-900">
                      {message.productName}
                    </h2>
                  )}
                  {message.productCode && (
                    <p className="text-sm text-gray-500">
                      Product Code: {message.productCode}
                    </p>
                  )}
                </div>
              </div>
            )}
            {message.description && (
              <p className="text-gray-700">
                {message.description}
              </p>
            )}
            {message.productUrl && (
              <a
                href={message.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Product
              </a>
            )}
          </div>
        ) : (
          // Fallback to plain text if no structured content is found
          message.text.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))
        )}
      </div>
    </div>
  ))}
  {isLoading && (
    <div className="flex items-start space-x-2">
      <div className="bg-gray-800 text-white rounded-full p-2">
        <img src={logo} alt="Loading" className="w-8 h-8 rounded-full" />
      </div>
      <div className="bg-gray-800 text-white rounded-lg p-3 max-w-xs">
        Typing...
      </div>
    </div>
  )}
</div>



      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-white flex items-center border-t border-gray-300 rounded-b-lg">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type a message"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
    />
    <button type="submit" className="ml-2 text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    </button>
  </form>
     
    </div>
  );
};

export default ChatPage;
