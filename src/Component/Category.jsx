import React from 'react';
import circle from '../assets/Group 16.png';
import bm from '../assets/management.png'
import cs from '../assets/science.png'
import art from '../assets/art.png'
import personal from '../assets/p-development.png'


const CategoryImage = ({ src, alt }) => (
  <div className="w-44 h-44 relative">
    <img src={circle} alt="Circle background" className="w-full h-full absolute" />
    <div className="w-full h-full absolute flex items-center justify-center">
      <img src={src} alt={alt} className="w-16 h-16 object-cover" />
    </div>
  </div>
);

const CategoryItem = ({ imageSrc, title, subtitle }) => (
  <div className="flex flex-col items-center">
    <CategoryImage src={imageSrc} alt={title} />
    <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>
    <p className="text-sm text-center">{subtitle}</p>
  </div>
);

const Category = () => {
  const categories = [
    {
      title: "Business Management",
      imageSrc: bm
    },
    {
      title: "Art and Design",
      imageSrc:art 
    },
    {
      title: "Computer Science",
      imageSrc: cs
    },
    {
      title: "Personal Development",
      imageSrc: personal
    }
  ];

  return (
    <div className="container w-screen mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Course Categories</h2>
      <div className="flex justify-center space-x-12">
        {categories.map((category, index) => (
          <CategoryItem 
            key={index} 
            imageSrc={category.imageSrc} 
            title={category.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default Category;