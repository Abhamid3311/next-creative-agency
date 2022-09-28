import React from 'react';
import reviews from '../../../pages/api/feedback.json';
import Feedback from './Feedback';

const Feedbacks = () => {
    return (
        <div className='px-10 py-20'>
            <h2 className='font-bold text-3xl text-center text-primary'>Clients <span className='text-accent'>Feedback</span></h2>

            <div className='grid grid-cols-1 lg:grid-cols-3  mt-16'>
                {
                    reviews.map(review => <Feedback
                        review={review}
                        key={review.id}></Feedback>)
                }
            </div>

        </div>
    );
};

export default Feedbacks;