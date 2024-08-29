import React from 'react';

const AboutPage = () => {
    return (
        <div className="container mx-auto max-w-7xl p-6">
            {/* Header Section with Purple Background */}
            <header className="text-center my-12 bg-purple-600 text-white py-12 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold">Hey there stranger! <br /> <span>EZPZ HERE🍋</span></h1>
                <p className="text-lg mt-4">
                    We're an optimistic and gratitude-filled group of remote workers scattered around the world
                </p>
                <p className="text-lg mt">
                    dedicated to creating a product our customers will use and love.
                </p>
                <p className="text-sm mt-4">
                    Read on to learn more about the GlucozBeat's story and who we are.
                </p>
            </header>

            {/* Image Section */}
            <section className="my-12 flex justify-center">
                <div className="relative w-2/3">
                    <img src="./tom.jpg" alt="GlucozBeat Team" className="rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Our Story Section */}
            <section className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-lg">
                        GlucozBeat started as a Startup Sprint project in [Month, Year] to solve a problem our Founder was experiencing — [Explain the problem and solution briefly].
                    </p>
                    <p className="text-lg mt-4">
                        Over the next few months, our team grew and began working on more solutions for people with diabetes, eventually leading to what GlucozBeat is today — a comprehensive platform for managing blood sugar levels and living a healthier life.
                    </p>
                    <p className="text-lg mt-4">
                        Today, GlucozBeat is powered by a fully remote and distributed team committed to transparency, innovation, and customer satisfaction.
                    </p>
                </div>

                {/* Images or other content */}
                <div className="flex flex-col space-y-4">
                    <img src="./TA40.jpg" alt="Team at Work" className="rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Team Members Section */}
            <section className="my-12">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="text-center">
                        <img src="./tom.jpg" alt="Member 1" className="rounded-full w-32 h-32 mx-auto shadow-lg" />
                        <h3 className="mt-4 text-xl font-semibold">Margaret Tai</h3>
                        <p className="text-gray-600">MCS</p>
                    </div>
                    <div className="text-center">
                        <img src="./tom.jpg" alt="Member 2" className="rounded-full w-32 h-32 mx-auto shadow-lg" />
                        <h3 className="mt-4 text-xl font-semibold">Nhan Nguyen</h3>
                        <p className="text-gray-600">MAI</p>
                    </div>
                    <div className="text-center">
                        <img src="./tom.jpg" alt="Member 3" className="rounded-full w-32 h-32 mx-auto shadow-lg" />
                        <h3 className="mt-4 text-xl font-semibold">Sriram Vasan</h3>
                        <p className="text-gray-600">MDS</p>
                    </div>
                    <div className="text-center">
                        <img src="./tom.jpg" alt="Member 4" className="rounded-full w-32 h-32 mx-auto shadow-lg" />
                        <h3 className="mt-4 text-xl font-semibold">Susan Yu</h3>
                        <p className="text-gray-600">MIT</p>
                    </div>
                    <div className="text-center">
                        <img src="./jacky.jpg" alt="Member 5" className="rounded-full w-32 h-32 mx-auto shadow-lg" />
                        <h3 className="mt-4 text-xl font-semibold">Zihao Dai</h3>
                        <p className="text-gray-600">MBIS</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;