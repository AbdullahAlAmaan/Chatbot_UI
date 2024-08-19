// import React from 'react';

// const Header = ({ onClose }) => {
//   return (
//     <div className="relative">
//       <h1 className='text-3xl font-semibold text-gray-100 mb-5'>Nikles</h1>
//       <h1 className="text-xl font-semibold text-gray-100 mb-1">Hello 👋 </h1>
//       <p className="text-xl text-gray-100 font-semibold mb-1">I am Nikles Bot, a Virtual Assistant.</p>
//       <p className="text-xl text-gray-100 font-semibold pb-4">How may I help you?</p>
//       <button className="absolute top-1 right-2 text-gray-100 text-2xl">
//         &times;
//       </button>
//     </div>
//   );
// }

// export default Header;
import React from 'react';

const Header = ({ onClose }) => {
  return (
    <div className="relative">
      <h1 className='text-3xl font-semibold text-gray-100 mb-5'>Nikles</h1>
      <h1 className="text-xl font-semibold text-gray-100 mb-1">Hello 👋 </h1>
      <p className="text-xl text-gray-100 font-semibold mb-1">I am Nikles Bot, a Virtual Assistant.</p>
      <p className="text-xl text-gray-100 font-semibold pb-4">How may I help you?</p>
      {/* <button onClick={onClose} className="absolute top-1 right-2 text-gray-100 text-2xl">
  &times;
</button> */}

    </div>
  );
}

export default Header;

