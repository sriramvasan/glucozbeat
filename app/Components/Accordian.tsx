'use client';
import { useState } from 'react';

interface accordionItem{
    title: String, 
    content: String
}

const Accordion = ( 
  {title , content}: accordionItem ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='rounded-full'>
      <div
      className='bold-20 xl:regular-22 mt-5 p-5 rounded-xl bg-purple-700 text-white cursor-pointer'
        onClick={toggleAccordion}>
        {title} 
        {/* <span className='flexEnd'>&#86;</span> */}
      </div>
      {isOpen && (
        <div 
        className='flexCentre regular-14 xl:regular-16 mx-5 p-5 rounded-xl shadow-md'
        >
          {content}
        </div>
      )}
    </div>
  );
};


{/*const Accordion = () => {
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <AccordionItem
        title="Myth 1: Eating too much sugar causes GDM."
        content="Explanation and data visualizations to debunk this myth."
      />
      <AccordionItem
        title="Myth 2: XX"
        content="Content for Myth 2."
      />
      <AccordionItem
        title="Myth 3: XX"
        content="Content for Myth 3."
      />
      
    </div>
  );
};
*/}

export default Accordion;
