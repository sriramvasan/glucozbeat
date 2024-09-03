import Image from "next/image";
import { ImageCard } from "../Components/ImageCard";

const Home = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <ImageCard 
          backgroundImage="/homepage-bg-1.png"
          title="GDM Myth-Busting"
          subtitle="Manage Your Health with Confidence"
          src = "/folded-map.svg"
        />
        <ImageCard
          backgroundImage="/homepage-bg.png"
          title="Healthy Eating Guide"
          subtitle="Personalized GDM Resources"
          src = "/folded-map.svg"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-purple-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
          Unsure Where to Start on <strong>Your Gestational Diabetes Mellitus (GDM) Journey?</strong> 
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

export default Home;