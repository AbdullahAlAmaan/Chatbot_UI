// import React from 'react';
// import logo from '../assets/logo.jpg';
// import { CHAT_MESSAGES } from '../constants';

// const ChatPage = ({ onBackToLanding }) => {
//   return (
//     <div className="flex flex-col h-[650px] bg-gray-100 max-w-lg mx-auto rounded-lg shadow-lg mt-10">
//       {/* Header */}
//       <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg relative">
//   <button onClick={onBackToLanding} className="z-10">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="w-6 h-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//       />
//     </svg>
//   </button>

//   <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
//     Nikles Bot
//   </h1>

//   <button  className="absolute top-2 right-4 text-white z-10 text-3xl">
//     &times;
//   </button>
// </div>


//       {/* Chat Messages */}
//       <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//         {CHAT_MESSAGES.map((message) => (
//           <div key={message.id} className="flex items-start space-x-2">
//             <div className="bg-gray-800 text-white rounded-full p-2">
//               <img src={message.icon} alt="Logo" className="w-8 h-8 rounded-full" />
//             </div>
//             <div className="bg-gray-700 text-white rounded-lg p-3 max-w-xs">
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <div className="p-4 bg-white flex items-center border-t border-gray-300 rounded-b-lg">
//         <input
//           type="text"
//           placeholder="Type a message"
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
//         />
//         <button className="ml-2 text-gray-600">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
import React from 'react';
import logo from '../assets/logo.jpg';
import { CHAT_MESSAGES } from '../constants';

const ChatPage = ({ onBackToLanding }) => {
  return (
    <div className="flex flex-col h-[650px] bg-gray-100 max-w-lg mx-auto rounded-lg shadow-lg mt-10">
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

        {/* <button onClick={onBackToLanding} className="absolute top-2 right-4 text-white z-10 text-3xl">
  &times;
</button> */}

      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {CHAT_MESSAGES.map((message) => (
          <div key={message.id} className="flex items-start space-x-2">
            <div className="bg-gray-800 text-white rounded-full p-2">
              <img src={message.icon} alt="Logo" className="w-8 h-8 rounded-full" />
            </div>
            <div className="bg-gray-700 text-white rounded-lg p-3 max-w-xs">
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white flex items-center border-t border-gray-300 rounded-b-lg">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400"
        />
        <button className="ml-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
