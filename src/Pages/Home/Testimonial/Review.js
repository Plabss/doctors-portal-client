import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, msg } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{msg}</p>
                <div className="card-actions mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div className='ml-8'>
                        <h4 className='text-2xl text-primary font-bold'>{name}</h4>
                        <h5 className='text-4 font-bold '>{location}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;