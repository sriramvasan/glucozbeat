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
      <section className="2xl:max-container relative flex flex-col mt-10">
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

        <div className="w-full mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-purple-700 p-8 xl:rounded-5xl xl:px-12 xl:py-12 relative w-full overflow-hidden rounded-3xl">
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl tracking-tight font-normal capitalize text-white">
              Ready to Start on{" "}
              <strong>Your Gestational Diabetes Mellitus (GDM) Journey?</strong>
            </h2>
            <div className="w-full mt-5">
              <p className="text-lg leading-8 text-white w-full">
                Managing gestational diabetes can feel overwhelming 
                <span className="hidden sm:inline">, especially when faced with unfamiliar advice and conflicting information</span>
                . That’s why we’re here—to guide you through every step of your journey 
                <span className="hidden sm:inline"> with support, clarity, and culturally relevant resources</span>
              </p>
              <div className="flex mt-4">
                <a href="#features-section" className="btn">
                  Find Out More
                </a>
              </div>
            </div>

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

      <section className="overflow-hidden py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <Image src="/prenancy.svg" alt="camp" width={50} height={50} />
                <h2 className="uppercase text-lg font-semibold leading-7 text-primary">
                  We are here for you
                </h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Simplifying GDM,
                  <br />
                  One Step at a Time
                </p>
              </div>
            </div>
            <div className="flex items-end">
              <p className="text-lg leading-7 text-gray-600">
                At Glucoz, our mission is to simplify the journey of managing
                gestational diabetes mellitus (GDM) for South Asian women. We
                understand the challenges that come with navigating complex
                health information, especially during pregnancy. This
                easy-to-use platform is designed to help you take charge of your
                health with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features-section"
        className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-8 sm:py-12"
      >
        <div className="max-container px-6 relative w-full flex justify-end">
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
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-12">
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
