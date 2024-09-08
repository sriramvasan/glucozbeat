'use client';
import React from 'react'
import Accordion from '../Components/Accordian'
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const MythData = [
  { 
      id: 1,
      title : "Eating too much sugar causes GDM?",
      content: (
        <>
          Yes, diet matters, but GDM isn’t just about what you eat—it’s influenced by things like 
          <span className="text-purple-700"> genetics, age, and hormones</span>. 
          It’s a common myth that <span className="text-purple-700">eating sugar alone causes GDM</span>. 
          The real issue is more about <span className="text-purple-700">overall energy balance and weight regulation during pregnancy</span>, not specific foods. 
          So while it’s important to <span className="text-purple-700">watch your carbs</span>, they aren’t the 
          enemy—it’s about finding the right balance that works for you.
        </>
      )
      ,image: "/sugar.svg"
    },
  {   
      id: 2, 
      title : "I will need insulin to manage my gestational diabetes?",
      content: (
        <>
          Don’t worry, <span className="text-purple-700">most women with gestational diabetes don’t need insulin</span>. 
          The first step is usually <span className="text-purple-700">making small changes to your diet</span> and 
          <span className="text-purple-700"> getting some regular exercise</span>, which can often keep your blood sugar in check. 
          Your body is already <span className="text-purple-700">working hard to produce more insulin during pregnancy</span>, and these tweaks can help it do its job. 
          <span className="text-purple-700"> Insulin can be a great tool if needed</span>, but for most women, it’s not necessary—only about
           <span className="text-purple-700"> 10-20% actually end up needing it</span>.
        </>
      )
      ,image: "/insulin.svg"
    },
  {
    id: 3,
    title : "All women with GDM will have big babies?",
    content: (
      <>
        Having a big baby is a concern with GDM, but it’s not a given. 
        The risk comes from <span className="text-purple-700">higher blood sugar levels passing from mom to baby</span>, 
        leading to extra fat storage in the baby. But the good news is, 
        by <span className="text-purple-700">keeping your blood sugar in check through diet and exercise</span>, 
        you can greatly lower the chances of having a large baby. It’s all about <span className="text-purple-700">managing those sugar levels</span>, 
        and with the right plan, <span className="text-purple-700">you can have a healthy pregnancy and baby</span>.
      </>
    )
    ,image: "/bigbaby.svg"
  },
  {
    id:4,
    title : "All women who develop GDM will have permanent diabetes following childbirth?",
    content: (
      <>
        The development of GDM during pregnancy is often resolved as 
        <span className="text-purple-700"> blood-glucose levels regulate</span> in the body, 
        providing <span className="text-purple-700">lower insulin resistance</span>, 
        and return glucose to normal levels. This can be <span className="text-purple-700">monitored in screening</span>. 
        It is not certain, if not likely, that the woman will have a <span className="text-purple-700">
          permanent diagnosis of diabetes</span>; although immediate management during GDM, 
        <span className="text-purple-700"> good diet, minimal excess weight</span>, 
        monitored signs of any health problems, <span className="text-purple-700">active lifestyle </span> 
        and detecting prediabetes if present, will <span className="text-purple-700">
          lower the associated risk with future Type-2 Diabetes diagnosis</span>.
      </>
    )
    ,image: "/mother.svg"
  }
]



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
    router.push("/CheckYourRisk"); // Replace with the route you want to navigate to
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
      {/* <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-purple-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-20 md:regular-28 2xl:regular-64 capitalize text-white">
            Remember <strong>You&apos;re not alone</strong> 
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
            Managing gestational diabetes can feel overwhelming, especially when faced with unfamiliar advice and conflicting information. That’s why we’re here—to guide you through every step of your journey with support, clarity, and culturally relevant resources
            </p>
            <Image 
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="women-quote"
            />
          </div>
        </div> */}

    </section>
    { showinfo && 
        <div className='flex flex-col max-w-[500px] mt-5 p-3 mx-auto rounded-md bg-purple-50 px-auto justify-center items-center'>
          <h4 className="bold-16 text-black">Meet Priya, a first-time mom in her early 30s.</h4>
          <p className="regular-12 text-black">When Priya was diagnosed with GDM, 
          She was worried she did something wrong—maybe she ate too much sugar? But is that really the cause?</p>
        </div>
             }

    <div className='m-5 p-5 '>
    {MythData.map((data) =>(
      <>
      <Accordion key= {data.id} title={data.title} content={data.content} img={data.image} 
      className = "flex mx-auto w-[200px] sm:w-[500px] lg:w-[800px] justify-center items-center transition-transform hover:scale-105"></Accordion>
      {/* // <FlipCard key={data.id} heading ={data.title} content={data.content}/> */}
      {/* <Image src={data.image} width={50} height={50} alt={data.image}/> */}
      </>
      ))}

      
    </div>

    <div className='p-5 mb-5 mx-auto max-w-[800px] justify-center text-justify rounded-lg bg-purple-100'>
      <h2>Relating Back to Priya&apos;s Experience</h2>
      <p className=''>For Priya, understanding that GDM isn&apos;t her fault was a relief. She focused on simple steps like balanced meals and moderate exercise, which helped keep her and her baby healthy</p>
      {/* <p>Remember: You are not alone. Like Priya, you can take control of your GDM journey with the right knowledge and support. Explore our resources to find meal plans and exercises tailored to your needs.</p> */}
    </div>

    <div className='flex flex-col px-5 mx-auto my-5 justify-center text-justify max-w-[800px] bg-purple-100 rounded-xl'>
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
            <button className='px-auto my-2 mx-auto mb-2 bg-purple-600 max-w-[175px] justify-center items-center text-center text-white rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105'
            onClick={handleClick}>
              <div className='py-3 mx-3 my-auto py-auto'>
                Understand Better
              </div>
            </button>
    </div>
    </>
  )
}

export default UnderstandingGDM