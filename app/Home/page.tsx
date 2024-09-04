import Image from "next/image";
import { ImageCard } from "../Components/ImageCard";
import { FEATURES } from '../Constants/index';
import FeatureItem from "../Components/FeatureItem";



const Home = () => {
  return (
    <>
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <ImageCard
            backgroundImage="/homepage-bg-1.png"
            title="GDM Myth-Busting"
            subtitle="Manage Your Health with Confidence"
            src="/folded-map.svg"
          />
           <ImageCard
            backgroundImage="/homepage-bg-2.jpg"
            title="Snap It, Know It"
            subtitle="Personalized GDM Resources"
            src="/folded-map.svg"
          />
          <ImageCard
            backgroundImage="/homepage-bg.png"
            title="Healthy Eating Guide"
            subtitle="Personalized GDM Resources"
            src="/folded-map.svg"
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

      <section className="flexCenter flex-col">
        <div className="padding-container max-container w-full pb-24">
          <Image src="/prenancy.svg" alt="camp" width={50} height={50} />
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Guide You to Easy Path
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              At Glucoz, our mission is to simplify the journey of managing gestational diabetes mellitus (GDM) for South Asian women. We understand the challenges that come with navigating complex health information, especially during pregnancy. That’s why we've created a comprehensive, user-friendly platform that empowers you to take control of your health.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="flex flex-1 lg:min-h-[900px]">
            <Image
              src="/pregnant-3.jpg"
              alt="pregnant women"
              width={440}
              height={600}
              className="feature-women"
            />
          </div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className='relative'>
              <Image
                src="/baby.svg"
                alt="baby bottle"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
              <h2 className="bold-40 lg:bold-64">Our Features</h2>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home;