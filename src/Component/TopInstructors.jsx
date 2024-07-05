import React from 'react';
import old from '../assets/old-man.png';
import inst2 from '../assets/rectbg.png';
import inst3 from '../assets/ryan.png';

const instructors = [
  {
    image: old,
    name: 'Dr. Jane Smith',
    title: 'Data Science Expert',
    description: `With a Ph.D. in Computer Science and over 15 years of experience in data analysis and machine learning, 
                  Dr. Smith is passionate about helping students unlock the power of data. Her courses blend theoretical 
                  knowledge with practical applications, making complex concepts accessible to everyone.`,
  },
  {
    image: inst2,
    name: 'Dr. John Doe',
    title: 'Machine Learning Specialist',
    description: `Dr. Doe has extensive experience in machine learning and artificial intelligence. He has worked on numerous 
                  high-profile projects and is dedicated to sharing his knowledge and expertise with students. His approach 
                  to teaching focuses on real-world applications and hands-on learning.`,
  },
  {
    image: inst3,
    name: 'Dr. Emily Johnson',
    title: 'AI Researcher',
    description: `Dr. Johnson is a leading researcher in artificial intelligence and deep learning. She has published several 
                  papers in top conferences and journals. Her teaching style emphasizes critical thinking and problem-solving, 
                  preparing students to tackle challenging issues in the AI field.`,
  },
];

const MeetOurInstructors = () => {
  return (
    <section className="bg-blue-900 py-16 px-8 rounded-br-[80px]">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold text-white mb-16">Meet Some Of Our Top Instructors</h2>
        {instructors.map((instructor, index) => (
          <div key={index} className="mb-16 bg-gray-200 rounded-lg p-6 md:flex md:items-center md:justify-center w-full rounded-br-[80px] rounded-tl-[80px]">
            <div className="md:w-1/3">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="rounded-lg ml-10 object-cover md:h-96"
              />
            </div>
            <div className="md:w-2/3 md:pl-12 text-left mt-6 md:mt-0">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{instructor.name}</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">{instructor.title}</h4>
              <p className="text-lg text-gray-600">{instructor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurInstructors;
