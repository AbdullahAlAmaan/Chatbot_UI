import React from 'react';

const FaqItem = ({ faq }) => {
  return (
    <div>
     <button className="w-full bg-gray-100 outline outline-offset-2 outline-gray-500/10 text-gray-700 text-left px-4 py-2 rounded-md hover:text-green-400 flex items-center">
  <span className="text-green-400 mr-2 text-2xl">⦿</span> 
  {faq}
</button>

    </div>
  );
}

export default FaqItem;
