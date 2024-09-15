import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto max-w-7xl p-6">
            {/* Header Section with Purple Background */}
            <header className="text-center my-12 bg-purple-600 text-white py-12 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">Hey there stranger!</h1>
                <p className="text-lg mt-4">
                    Read on to learn more about the Glucoz&apos;s story and who we are.
                </p>
            </header>
            

            {/* Image Section */}
            {/* <section className="my-12 flex justify-center">
                <div className="relative w-2/3">
                    <img src="./tom.jpg" alt="GlucozBeat Team" className="rounded-lg shadow-lg" />
                </div>
            </section> 
            */}

            {/* Our Story Section */}
            <section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Motivation</h2>
                    <p className="text-lg">
                        At Glucoz, we understand that pregnancy is a life-changing journey filled with excitement, hope, and sometimes, challenges.
                    </p>
                    <p className="text-lg mt-4">
                        For South Asian women, gestational diabetes mellitus (GDM) presents an additional concern, with statistics showing that this community faces higher risks of developing GDM compared to other populations. </p>
                    <p className="text-lg mt-4">
                        We realized that while general resources for managing diabetes exist, there is a significant lack of culturally tailored solutions that address the unique needs and preferences of South Asian women in Australia. Our project was born from the desire to fill this gap—to create a user-friendly platform that offers not just medical guidance but practical, everyday solutions.
                    </p>

                </div>

                {/* Images or other content */}
                <div className="flex flex-col space-y-4">
                    <Image src="/about.jpg" width={600} height={600} alt='Team at work' className='rounded-lg shadow-lg' />
                </div>
            </section>

            <section className="relative text-center my-12 bg-gradient-to-r from-purple-500 to-pink-200 text-white py-16 rounded-lg shadow-xl overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-5xl font-bold mb-6">Our Vision</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8">
                        We envision a world where every woman, regardless of cultural background, has access to the tools and resources needed to manage her health confidently during pregnancy.
                    </p>
                    <p className="text-lg max-w-3xl mx-auto mb-8">
                        By providing culturally relevant solutions, Glucoz aims to improve the pregnancy experiences and outcomes of South Asian women in Australia, ensuring they have the support and knowledge they need to thrive.
                    </p>
                </div>
            </section>


            {/* Team Members Section */}
            {/* <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="text-center">
                        <Image src="/Margaret.jpg" width={128} height={40} alt='Member 1' className='rounded-full mx-auto shadow-lg'/>
                        <h3 className="mt-4 text-xl font-semibold">Margaret Tai</h3>
                        <p className="text-gray-600">MCS</p>
                    </div>
                    <div className="text-center">
                        <Image src="/Nathan.jpg" alt='Member 2' width={128} height={40} className='rounded-full  mx-auto shadow-lg'/>
                        <h3 className="mt-4 text-xl font-semibold">Nhan Nguyen</h3>
                        <p className="text-gray-600">MAI</p>
                    </div>
                    <div className="text-center">
                        <Image src="/Ram.jpg" alt='Member 3' width={128} height={40} className='rounded-full  mx-auto shadow-lg'/>
                        <h3 className="mt-4 text-xl font-semibold">Sriram Vasan</h3>
                        <p className="text-gray-600">MDS</p>
                    </div>
                    <div className="text-center">
                        <Image src="/Susan.jpg" alt='Member 4' width={128} height={40} className='rounded-full  mx-auto shadow-lg'/>
                        <h3 className="mt-4 text-xl font-semibold">Susan Yu</h3>
                        <p className="text-gray-600">MIT</p>
                    </div>
                    <div className="text-center">
                        <Image src="/Jacky.jpg" alt='Member 5' width={128} height={40} className='rounded-full mx-auto shadow-lg'/>
                        <h3 className="mt-4 text-xl font-semibold">Zihao Dai</h3>
                        <p className="text-gray-600">MBIS</p>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;