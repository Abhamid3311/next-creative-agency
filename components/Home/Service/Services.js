import React from 'react';
import services from '../../../pages/api/services.json'
import Service from './Service';


const Services = () => {
    return (
        <div className='px-10'>
            <h2 className='font-bold text-3xl text-center text-primary'>Provide Awesome <span className='text-accent'>Services</span></h2>

            <div className='grid grid-cols-3 mt-20'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;