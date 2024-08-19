import React from 'react';

const Footer = () => {
  return (
    <div className=" relative z-10 mt-5 bg-white rounded-lg p-4">
      <button className="w-full text-green-400  px-4 py-2 rounded-md hover:text-green-600">
        Start new message →
      </button>
      <button className="w-full text-green-400 px-4 py-2 rounded-md hover:text-green-600 ">
        Continue conversation →
      </button>
    </div>
  );
}

export default Footer;
