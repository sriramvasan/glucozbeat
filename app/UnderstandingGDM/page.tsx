'use client';
import React from 'react'
import Accordion from '../Components/Accordian'
import { ImageCard } from '../Components/ImageCard';
import FlipCard from '../Components/FlipCard/FlipCard';
import Image from 'next/image';

const MythData = [
  { 
      id: 1,
      title : "Eating too much sugar causes GDM?",
      content: "Yes, diet matters, but GDM isn’t just about what you eat—it’s influenced by things like genetics, age, and hormones. It’s a common myth that eating sugar alone causes GDM. The real issue is more about overall energy balance and weight gain during pregnancy, not specific foods. So while it’s important to watch your carbs, they aren’t the enemy—it’s about finding the right balance that works for you."
  },
  {   
      id: 2, 
      title : "I will need insulin to manage my gestational diabetes?",
      content: "Don't worry, most women with gestational diabetes don’t need insulin. The first step is usually making small changes to your diet and getting some regular exercise, which can often keep your blood sugar in check. Your body is already working hard to produce more insulin during pregnancy, and these tweaks can help it do its job. Insulin can be a great tool if needed, but for most women, it’s not necessary—only about 10-20% actually end up needing it."
  },
  {
    id: 3,
    title : "All women with GDM will have big babies?",
    content: "Having a big baby is a concern with GDM, but it’s not a given. The risk comes from higher blood sugar levels passing from mom to baby, leading to extra fat storage in the baby. But the good news is, by keeping your blood sugar in check through diet and exercise, you can greatly lower the chances of having a large baby. It’s all about managing those sugar levels, and with the right plan, you can have a healthy pregnancy and baby."
  },
  {
    id:4,
    title : "All women who develop GDM will have permanent diabetes following childbirth?",
    content: "The development of GDM during pregnancy is often resolved as the blood-glucose levels regulate in the body, providing lower insulin resistance, and return glucose to normal levels. This can be monitored in screening. And, it is not certain, if not likely, that the woman will have a permanent diagnosis of diabetes; although immediate management during GDM, good diet, minimal excess weight, monitored signs of any health problems, active lifestyle and detecting prediabetes if present, will lower the associated risk with future Type-2 Diabetes diagnosis."
  }
]


const UnderstandingGDM = () => {
  return (
    <>
    <div className='pb-8  mx-auto max-w-[1000px] justify-center text-justify'>
      <h1 className='mx-8 px-8 '>Debunk the Rumors: Understanding GDM </h1>
      <p className='px-8 mx-8'> Let’s explore common myths about gestational diabetes and see what the data says.</p>
    </div>
    <section className='relative flex flex-col'>
      <div className='flex min-w-[250px] h-[360px] gap-8 max-w-[734px] mx-auto justify-center items-center' >
        <div className={`h-full w-full max-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl lg:rounded-l-5xl  2xl:rounded-5xl`}
        style={{
          backgroundImage: 'url(/priya-persona-4.jpg)' ,
        }}
        >
        <div className="flex h-full flex-col items-start justify-end p-6 lg:px-20 lg:py-50">
        <div className="flexEnd gap-4">
            <div className="rounded-full bg-purple-300 p-4">
              <Image
                src = "/menu.svg"
                alt = "map"
                width={28}
                height={28}
              />
            </div>
            <div className='w-full bg-opacity-45'>
            <div className="flex flex-col lg:gap-1 lg:w-2/3">
            <h4 className="bold-16 text-white">Meet Priya, a first-time mom in her early 30s.</h4>
            <p className="regular-12 text-white">When Priya was diagnosed with GDM, 
              She was worried she did something wrong—maybe she ate too much sugar? But is that really the cause?</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-purple-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-20 md:regular-28 2xl:regular-64 capitalize text-white">
            Remember <strong>You're not alone</strong> 
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
        </div>
    </section>

    <div className='m-5 p-5 '>
    {MythData.map((data) =>(
      <Accordion key= {data.id} title={data.title} content={data.content} className = "flex mx-auto w-[200px] sm:w-[500px] lg:w-[800px] justify-center items-center"></Accordion>
      // <FlipCard key={data.id} heading ={data.title} content={data.content}/>
      
      ))}

      
    </div>

    <div className='p-5  mx-auto max-w-[1000px] justify-center text-justify'>
      <h2>Relating Back to Priya’s Experience</h2>
      <p className=''>For Priya, understanding that GDM isn’t her fault was a relief. She focused on simple steps like balanced meals and moderate exercise, which helped keep her and her baby healthy</p>
      {/* <p>Remember: You are not alone. Like Priya, you can take control of your GDM journey with the right knowledge and support. Explore our resources to find meal plans and exercises tailored to your needs.</p> */}
    </div>

    <div className='px-5 mx-5'>
    </div>
    </>
  )
}

export default UnderstandingGDM

{/* <a href="https://www.freepik.com/free-photo/smiling-young-beautiful-girl-wearing-white-t-shirt-points-isolated-purple-with-copy-space_13958905.htm#fromView=search&page=1&position=7&uuid=7114e19b-5bd4-4d7c-9d9b-01f456cda07c">Image by stockking on Freepik</a> */}