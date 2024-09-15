'use client';
import { useState } from 'react';
import Image from 'next/image';

interface accordionItem{
    title: String, 
    content: any,
    className : string,
    img : string,
    visual? : any
}

const Accordion = ( 
  {title , content, className, img, visual}: accordionItem ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-full flex flex-col ${className}`}>
      <div
      className='bold-20 xl:regular-22 mt-5 p-5 min-w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] rounded-xl bg-purple-500 text-white cursor-pointer justify-center text-center'
        onClick={toggleAccordion}>
          <div className='flex flex-row justify-center items-center'>
            <Image className='px-4 justify-center' src={img} width={60} height={60} alt = "Image" />
          {title}
          </div>
        {/* {title}  */}
        {/* <span className='flexEnd'>&#86;</span> */}
      </div>
      {isOpen && (
        <div 
        className='regular-14 min-w-[250px] xl:regular-16 mx-5 p-5 rounded-xl shadow-md'
        >
          {content}
          <div className='flex p-auto mx-auto justify-center align-middle items-center'>{visual}</div>
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
