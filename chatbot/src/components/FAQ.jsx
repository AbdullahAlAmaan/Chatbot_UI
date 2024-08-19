import React from 'react';
import FAQItem from './FaqItem';
import logo from '../assets/logo.jpg'

const FAQ = () => {
  const faqs = [
    'Why is Nikles Special?',
    'Show me some head showers?',
    'What technologies do you have?',
    'Which locations does Nikles have?',
  ];

  return (
    <>
     {/* <div className="flex justify-center mb-4">
        <div className="bg-gray-200 p-3 rounded-full">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
      </div> */}

<h1 className='text-black text-xl font-semibold mt-2 flex items-center'>
  Frequently Asked Questions 
  <span className="inline-flex items-center justify-center text-black text-2xl bg-yellow-200 rounded-xl w-8 h-8 ml-2">？</span>
</h1>

   
    <div className="space-y-3 mt-10 ">
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
    </>
  );
}

export default FAQ;
