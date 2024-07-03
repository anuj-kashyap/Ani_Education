import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-200 rounded-b-2xl rounded-tr-2xl  p-8 flex items-center space-x-10 relative  max-w-sm">
    <div className="bg-blue-100 rounded-full p-5 absolute -left-10 top-1/2 transform -translate-y-1/2 ">
      <span className="text-4xl" role="img" aria-label={title}>
        {icon}
      </span>
    </div>
    <div className="ml-24">
      <h3 className="font-bold text-blue-900 text-lg">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

const FeatureCards = () => {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Expert Instructor",
      description: "Learn from industry leaders. Gain practical skills with expert instructors. Elevate your knowledge and excel."
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      description: "Access support anytime, anywhere. 24/7 assistance for uninterrupted learning."
    },
    {
      icon: "🔄",
      title: "Lifetime access",
      description: "Enjoy Lifetime Access. Explore new topics, master skills, and grow at your own pace."
    }
  ];

  return (
    <div className="bg-gray-100 p-16">
      <div className="flex justify-center space-x-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;