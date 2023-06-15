import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
    const serviceData = [
        {
            id: 1,
            name: "Fluride Treatment",
            description: "asdfghjk dfghjk fghjkl",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Treatment",
            description: "asdfghjk dfghjk fghjkl",
            img: cavity
        },
        {
            id: 3,
            name: "Whitening",
            description: "asdfghjk dfghjk fghjkl",
            img: whitening
        },
    ]
    return (
        <div className='m-8'>
            <h1 className='text-sm text-center text-primary font-bold'>Our Services</h1>
            <h1 className='text-3xl text-center'>Services We Provide</h1>
            <div className='grid mt-32 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='m-32'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse p-8">
                        <div className='lg:w-[497px] h-[347px]'>
                            <h1 className="text-[38px] font-bold">Exceptional Dental Care, on Your Terms!</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable En</p>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                        </div>
                        <img src={treatment} className="lg:w-[458px] h-[576px] rounded-lg shadow-2xl mr-8" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;