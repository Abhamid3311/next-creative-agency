import Image from 'next/image';
import React from 'react';

const Partner = () => {
    return (
        <div className=' text-base-content flex justify-between items-center px-10 my-20 hover:text-red-600'>
            <div><Image src={'/logos/slack.png'} alt="slack" width={140} height={36} /></div>
            <div><Image src={'/logos/airbnb.png'} alt="airbnb" width={140} height={36} /></div>
            <div> <Image src={'/logos/google.png'} alt="google" width={140} height={36} /></div>
            <div><Image src={'/logos/netflix.png'} alt="netflix" width={140} height={36} /></div>
            <div><Image src={'/logos/uber.png'} alt="uber" width={140} height={36} /></div>
        </div>
    );
};

export default Partner;