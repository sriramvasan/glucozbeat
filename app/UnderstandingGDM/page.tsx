'use client';
import React from 'react'
import Accordion from '../Components/Accordian'
import { ImageCard } from '../Components/ImageCard';

const MythData = [
  { 
      id: 1,
      title : "Myth 1: Eating too much sugar causes GDM?",
      content: "Yes, diet matters, but GDM isn’t just about what you eat—it’s influenced by things like genetics, age, and hormones. It’s a common myth that eating sugar alone causes GDM. The real issue is more about overall energy balance and weight gain during pregnancy, not specific foods. So while it’s important to watch your carbs, they aren’t the enemy—it’s about finding the right balance that works for you."
  },
  {   
      id: 2, 
      title : "Myth 2: I will need insulin to manage my gestational diabetes?",
      content: "Don't worry, most women with gestational diabetes don’t need insulin. The first step is usually making small changes to your diet and getting some regular exercise, which can often keep your blood sugar in check. Your body is already working hard to produce more insulin during pregnancy, and these tweaks can help it do its job. Insulin can be a great tool if needed, but for most women, it’s not necessary—only about 10-20% actually end up needing it."
  },
  {
    id: 3,
    title : "Myth 3: All women with GDM will have big babies?",
    content: "Having a big baby is a concern with GDM, but it’s not a given. The risk comes from higher blood sugar levels passing from mom to baby, leading to extra fat storage in the baby. But the good news is, by keeping your blood sugar in check through diet and exercise, you can greatly lower the chances of having a large baby. It’s all about managing those sugar levels, and with the right plan, you can have a healthy pregnancy and baby."
  },
  {
    id:4,
    title : "Myth 4: Addressing the Fear Section",
    content: "GDM is a result of complex interactions between hormones, genetics, and other factors beyond your control. What matters most is how you manage it with the right knowledge and support"
  }
]


const UnderstandingGDM = () => {
  return (
    <>
    <div>
      <h1 className='m-8 px-8 '>Debunk the Rumors: Understanding GDM </h1>
      <p className='p-8 m-8'> Let’s explore common myths about gestational diabetes and see what the data says.</p>
    </div>
    <div className='flex h-[550px] max-w-[734px] mx-auto justify-center items-center' >
      <ImageCard 
      backgroundImage='/priya-persona-4.jpg' 
      title='Meet Priya, a first-time mom in her early 30s.' 
      subtitle='When Priya was diagnosed with GDM, She was worried she did something wrong—maybe she ate too much sugar? But is that really the cause? '
      src = "/menu.svg" ></ImageCard>
    </div>

    <div className='m-5 p-5 '>
    {MythData.map((data) =>(
      <Accordion key= {data.id} title={data.title} content={data.content} className = "flex mx-auto w-[800px] justify-center items-center"></Accordion>
      ))}
    </div>

    <div className='p-5 m-5'>
      <h1>Relating Back to Priya’s Experience</h1>
      <p className=''>For Priya, understanding that GDM isn’t her fault was a relief. She focused on simple steps like balanced meals and moderate exercise, which helped keep her and her baby healthy</p>
    </div>

    <div className='p-5 m-5'>
      <p>Remember: You are not alone. Like Priya, you can take control of your GDM journey with the right knowledge and support. Explore our resources to find meal plans and exercises tailored to your needs.</p>
    </div>
    </>
  )
}

export default UnderstandingGDM

{/* <a href="https://www.freepik.com/free-photo/smiling-young-beautiful-girl-wearing-white-t-shirt-points-isolated-purple-with-copy-space_13958905.htm#fromView=search&page=1&position=7&uuid=7114e19b-5bd4-4d7c-9d9b-01f456cda07c">Image by stockking on Freepik</a> */}