import React from 'react'
import test1 from '../assets/Ellipse 6.png'
import test2 from '../assets/Ellipse 7.png'
import rect from '../assets/rectangle.png'
import rect2 from '../assets/Rectangle 20.png'

const TestimonialCard = ({ name, image, testimonial }) => (
    <div className="bg-gray-200 rounded-3xl p-6 flex items-center space-x-4 relative">
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover absolute -left-3 top-1/2 transform -translate-y-1/2 border-4 border-blue-900" />
        <div className="ml-24">
            <h3 className="font-bold text-blue-900 text-lg">{name}</h3>
            <p className="text-sm text-gray-700">{testimonial}</p>
        </div>
    </div>
);


const Testimonial = () => {
    return (
        <div className="bg-blue-900 min-h-screen text-white p-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-2">Hear From Our Students</h1>
                <p className="text-xl text-center mb-12">Student's Testimonials</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <TestimonialCard
                        name="Anhishek Sharma"
                        image={test1} 
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <TestimonialCard
                        name="Kajal Sharma"
                        image={test2}
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
            </div>
            <div className='w-full relative h-40 mt-20'>
                <img src={rect} alt="" className='absolute  w-full h-full object-cover' />
                <img src={rect2} alt="" className='absolute  w-full h-full object-cover' />
            </div>
        </div>
    );
};
export default Testimonial