import Image from 'next/image';
import React from 'react';

const Feedback = ({ review }) => {
    const { name, designation, comment, img } = review;
    return (
        <div className="card w-80 p-5 text-primary shadow-lg hover:shadow-2xl mt-5">
            <div className='flex items-center justify-start mb-5'>
                <Image src={img} width={64} height={64} alt="" />
                <div className='ml-3'>
                    <h2 className='text-lg font-bold'>{name}</h2>
                    <h3>{designation}</h3>
                </div>
            </div>
            <p >{comment}</p>
        </div>
    );
};

export default Feedback;