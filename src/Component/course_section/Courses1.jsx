import React from 'react';
import course from '../../assets/Rectangle 14.png';
import ux from '../../assets/ux.png';
import sd from '../../assets/sd.png';
import wd from '../../assets/wd.png';

const CourseCategory = ({ title, courses, imageSrc }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4">
    <div className="bg-white rounded-lg overflow-hidden mb-2">
      <img src={imageSrc} alt={title} className="w-full h-24 object-cover" />
    </div>
    <h3 className="font-bold text-blue-900 text-sm">{title}</h3>
    <p className="text-xs text-gray-600">{courses} Courses</p>
  </div>
);

const Courses1 = () => {
  const categories = [
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: course
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: ux
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: sd
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: wd
    }
  ];

  return (
    <div className="bg-blue-900  [background:linear-gradient(114.12deg,#2051BC_1.33%,#10285C_98.67%)] p-16 rounded-bl-[80px] max-w-8xl mt-10 mb-10 mx-auto">
      <h1 className="text-white text-[62px] font-bold leading-[92.69px] tracking-[-0.42625004053115845px] text-center">Course For You </h1>
      <h1 className="text-white text-[46px] font-light leading-[68.77px] tracking-[9px] text-center">Get Started Your Study </h1>
      
      <div className="flex items-center mb-3 ml-52">
        <div className="flex-grow bg-gray-300 border-2 border-white rounded-lg max-w-sm mt-5 mb-5 overflow-hidden ml-60 mr-5">
          <input
            type="text"
            placeholder="Search Courses"
            className="w-full bg-transparent text-white px-3 py-1 text-sm outline-none"
          />
        </div>
        <button 
        placeholder="Search"
        className="bg-white text-blue-900 px-3 py-1 rounded-full font-bold text-sm">
          Search
        </button>
      </div>
     
      <div className="grid grid-cols-2 sm:grid-cols-4   gap-10">
        {categories.map((category, index) => (
          <CourseCategory
            key={index}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
        {categories.map((category, index) => (
          <CourseCategory
            key={index + categories.length}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
        {categories.map((category, index) => (
          <CourseCategory
            key={index + categories.length}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
        {categories.map((category, index) => (
          <CourseCategory
            key={index + categories.length}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
        {categories.map((category, index) => (
          <CourseCategory
            key={index + categories.length}
            title={category.title}
            courses={category.courses}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses1;