import React from 'react';
import course from '../assets/Rectangle 14.png'

const CourseCategory = ({ title, courses, imageSrc }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4">
    <div className="bg-white rounded-lg overflow-hidden mb-2">
      <img src={course} alt={title} className="w-full h-24 object-cover" />
    </div>
    <h3 className="font-bold text-blue-900 text-sm">{title}</h3>
    <p className="text-xs text-gray-600">{courses} Courses</p>
  </div>
);

const Courses = () => {
  const categories = [
    {
      title: "Graphic Design",
      courses: "700+",
      imageSrc: "path_to_graphic_design_image.jpg"
    },
    {
      title: "UI/UX Design",
      courses: "700+",
      imageSrc: "path_to_ui_ux_design_image.jpg"
    },
    {
      title: "Software Development",
      courses: "700+",
      imageSrc: "path_to_software_development_image.jpg"
    },
    {
      title: "Web Development",
      courses: "700+",
      imageSrc: "path_to_web_development_image.jpg"
    }
  ];

  return (
    <div className="bg-blue-900 p-10 rounded-bl-[80px] max-w-6xl mx-auto">
      <h1 className="text-white text-4xl font-bold mb-3 text-center">Navigate Courses By Category</h1>
      
      <div className="flex items-center mb-3">
        <div className="flex-grow bg-grey-400 border-2 border-white rounded-lg max-w-sm overflow-hidden ml-80 mr-5">
          <input 
            type="text" 
            placeholder="Search Courses" 
            className="w-full bg-transparent text-white px-3 py-1 text-sm outline-none"
          />
        </div>
        <button className="bg-white text-blue-900 px-3 py-1 rounded-full font-bold text-sm">
          Search
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
      </div>
    </div>
  );
};

export default Courses;