import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-secondary text-primary px-10 rounded-b-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src="/logos/Frame.png" priority width={825} height={622} className="max-w-sm rounded-lg shadow-2xl" alt='banner-frame' />
                <div>
                    <h1 className="text-5xl font-bold">Let&apos;s Grow Your <br /> Brand To The <br /> Next Level</h1>

                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-primary text-white">Hire Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;