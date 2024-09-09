"use client";

import Image from "next/image";
import { ImageCard } from "../Components/ImageCard";
import { FEATURES } from "../Constants/index";
import FeatureItem from "../Components/FeatureItem";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1));
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 1 ? 3 : prev - 1));
  }, []);
  useEffect(() => {
    const url = location.href;
    location.href = `#slide${currentSlide}`;
    history.replaceState(null, "", url);
  }, [currentSlide]);

  return (
    <>
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="relative h-[340px] lg:h-[400px] xl:h-[640px]">
          <div className="carousel w-full space-x-8 h-full -mt-20 *:pt-20">
            <div id="slide1" className="carousel-item">
              <ImageCard
                backgroundImage="/homepage-bg-1.png"
                title="GDM Myth-Busting"
                subtitle="Manage Your Health with Confidence"
                src="/folded-map.svg"
              />
            </div>
            <div id="slide2" className="carousel-item relative">
              <ImageCard
                backgroundImage="/homepage-bg-2.jpg"
                title="Snap It, Know It"
                subtitle="Swap your food for better choices"
                src="/folded-map.svg"
              />
            </div>
            <div id="slide3" className="carousel-item relative">
              <ImageCard
                backgroundImage="/homepage-bg.png"
                title="Healthy Eating Guide"
                subtitle="Personalized GDM Resources"
                src="/folded-map.svg"
              />
            </div>
          </div>

          <div className="z-30 absolute left-5 right-5 top-1/2 flex translate-y-1/2 lg:-translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>

        <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-purple-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              Unsure Where to Start on{" "}
              <strong>Your Gestational Diabetes Mellitus (GDM) Journey?</strong>
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Managing gestational diabetes can feel overwhelming, especially
              when faced with unfamiliar advice and conflicting information.
              That’s why we’re here—to guide you through every step of your
              journey with support, clarity, and culturally relevant resources
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
          <p className="uppercase regular-18 -mt-1 mb-3 text-primary">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Guide You to Easy Path
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              At Glucoz, our mission is to simplify the journey of managing
              gestational diabetes mellitus (GDM) for South Asian women. We
              understand the challenges that come with navigating complex health
              information, especially during pregnancy. That’s why we&apos;ve
              created a comprehensive, user-friendly platform that empowers you
              to take control of your health.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="relative flex flex-1 items-center">
            <Image
              src="/pregnant-3.jpg"
              alt="pregnant women"
              width={440}
              height={600}
              className="feature-women absolute w-full"
            />
          </div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className="relative">
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
                  link={feature.link}
                  label={feature.label}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
