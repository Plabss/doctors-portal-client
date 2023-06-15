import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import p1 from '../../../assets/images/people1.png'
import p2 from '../../../assets/images/people2.png'
import p3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviewData=[
        {
            id:1,
            name:"Joy Islam",
            msg:" is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, conten",
            img:p1,
            location:"dhaka"
        },
        {
            id:2,
            name:"dibbo",
            msg:" is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, conten",
            img:p2,
            location:"sylhet"
        },
        {
            id:3,
            name:"lahiri",
            msg:" is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, conten",
            img:p3,
            location:"rajshahi"
        }
    ]
    return (
        <div className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-4xl'>What our Patients says</h2>
                </div>
                <img src={quote} className="w-48" alt='' />
            </div>
            <div className='grid mt-8 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewData.map(review=><Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;