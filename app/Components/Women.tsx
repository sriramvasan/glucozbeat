// import React from 'react';
// import Image from 'next/image';

// const Women = () => {
//   return (
//     <section className="max-container padding-container flex flex-col gap-10 py-10 pb-32 lg:flex-row lg:items-center">
//       {/* Left Side: Text Content */}
//       <div className="flex-1">
//         <h1 className="bold-18 lg:bold-32">
//         Here for South Asian women in Australia navigating gestational diabetes.</h1>
//         <p className="regular-16 mt-6 text-gray-30 lg:max-w-[480px]">
//         With culturally tailored advice, compassionate support, and practical tips, we’re by your side through every step of your pregnancy journey.        </p>
//       </div>

//       {/* Right Side: Image */}
//       <div className="flex-1">
//         <Image
//           src="/homepage-bg.jpg"
//           alt="Family Support"
//           width={600} // Adjust based on your desired width
//           height={400} // Adjust based on your desired height
//           className="rounded-lg object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default Women;

import { PEOPLE_URL } from "../Constants";
import Image from "next/image";

interface FeatureProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Feature = ({ backgroundImage, title, subtitle}: FeatureProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
     <div className="flexCenter gap-4">
        <div className="rounded-full bg-purple-300 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
        <h4 className="bold-18 text-white">{title}</h4>
        <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
     </div>
    </div>
  )
}

const Women = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Feature 
          backgroundImage="/homepage-bg-1.png"
          title="GDM Myth-Busting"
          subtitle="Manage Your Health with Confidence"
        />
        <Feature
          backgroundImage="/homepage-bg.png"
          title="Healthy Eating Guide"
          subtitle="Personalized GDM Resources"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-purple-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
          Unsure Where to Start on <strong>Your GDM Journey?</strong> 
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
  )
}

export default Women