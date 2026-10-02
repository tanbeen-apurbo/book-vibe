
import React from 'react';
import Image from 'next/image';
import bannerImg from '../assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="px-4 py-12 md:py-20">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-10 md:p-12 lg:p-16">

                    {/* Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold tracking-wide text-green-800">
                            YOUR NEXT GREAT READ
                        </span>

                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Books to freshen up your
                            <span className="text-green-700"> bookshelf.</span>
                        </h2>

                        <p className="mx-auto max-w-lg text-base leading-7 text-gray-600 md:mx-0 md:text-lg">
                            Discover amazing stories, explore new ideas,
                            and find the perfect books to inspire your
                            next adventure.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button className="btn rounded-xl border-0 bg-green-700 px-7 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg">
                                Explore Books
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>

                        <p className="text-sm text-gray-500">
                            Find your next favorite story.
                        </p>
                    </div>

                    {/* Banner Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute h-4/5 w-4/5 rounded-full bg-green-200/60 blur-3xl" />

                        <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
                            <Image
                                src={bannerImg}
                                alt="Books for your bookshelf"
                                priority
                                className="h-auto w-full object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
