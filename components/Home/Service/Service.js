import Image from 'next/image';
import React, { useEffect } from 'react';

const Service = ({ service }) => {
    const { name, desc, img } = service;
    return (
        <div>
            <div className="card w-80 h-72 text-primary shadow-lg hover:shadow-2xl">
                <figure className="px-10 pt-10">
                    <Image src={img} alt="service" width={74} height={74} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;