'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import MythSection from './MythSection';

const UnderstandingGDM = () => {

  const [showinfo, setInfo] = useState(false);
  const router = useRouter();


  const toggleInfoSection = () =>{
    if (showinfo){
      setInfo(false)
    }
    else{
      setInfo(true)
    }
  }
  const handleClick = () => {
    router.push("/CheckYourRisk");
  };

  return (
    <>
    <div className='pb-8  mx-auto max-w-[1000px] justify-center text-justify'>
      <h1 className='mx-8 px-8 '>Debunk the Rumors: Understanding GDM </h1>
      <p className='px-8 mx-8'> Let&apos;s explore common myths about gestational diabetes and see what the data says.</p>
    </div>
    <section className='relative flex flex-col'>
      <div className='flex w-full h-[380px] gap-8 max-w-[734px] mx-auto justify-center items-center' >
        <div className={`h-full w-full max-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl lg:rounded-l-5xl  2xl:rounded-5xl`}
        style={{
          backgroundImage: 'url(/priya-persona-4.jpg)' ,
        }}
        >
        <div className="flex h-full flex-col items-start justify-end p-5 lg:px-20 lg:py-50">
        <div className="flexEnd gap-4">
            <div className="rounded-full bg-black">
              <Image
                src = "/info.svg"
                alt = "map"
                width={100}
                height={100}
                onClick= {toggleInfoSection}
              />
            </div>
            <div className='w-full bg-opacity-45'>
            <div className="flex flex-col lg:gap-1 lg:w-2/3">
            
            
            
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
    { showinfo && 
        <div className='flex flex-col max-w-[500px] mt-5 p-3 mx-auto rounded-md bg-purple-50 px-auto justify-center items-center'>
          <h4 className="bold-16 text-black">Meet Priya, a first-time mom in her early 30s.</h4>
          <p className="regular-12 text-black">When Priya was diagnosed with GDM, 
          She was worried she did something wrong—maybe she ate too much sugar? But is that really the cause?</p>
        </div>
             }

    <div className='m-5 p-5 '>


  <MythSection/>
      
    </div>

    <div className='p-5 mb-5 mx-auto max-w-[800px] justify-center text-justify rounded-lg bg-purple-100'>
      <h2>Relating Back to Priya&apos;s Experience</h2>
      <p className=''>For Priya, understanding that GDM isn&apos;t her fault was a relief. She focused on simple steps like balanced meals and moderate exercise, which helped keep her and her baby healthy</p>
      {/* <p>Remember: You are not alone. Like Priya, you can take control of your GDM journey with the right knowledge and support. Explore our resources to find meal plans and exercises tailored to your needs.</p> */}
    </div>

    <div className='flex flex-col px-5 mx-auto my-5 justify-center text-left max-w-[800px] bg-purple-100 rounded-xl'>
    <h2 className="capitalize text-black"> Remember <strong>You&apos;re not alone</strong> </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-stone-500">
            Managing gestational diabetes can feel overwhelming, especially when faced with unfamiliar advice and conflicting information. That’s why we’re here—to guide you through every step of your journey with support, clarity, and culturally relevant resources
            </p>
            <Image 
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="women-quote"
            />
            {/* <div className='mx-auto'> */}
            <button className='flex flex-row px-2 my-2 mx-auto bg-purple-600 max-w-[350px] justify-center items-center text-left text-white rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105'
            onClick={handleClick}>
              <div className='py-2 mx-1 items-center justify-center'>
                <Image src='/quiz.svg' width={25} height={25} alt='QUIZ' />
              </div>
              Understand Better
            </button>

            {/* </div> */}
            
    </div>
    </>
  )
}

export default UnderstandingGDM