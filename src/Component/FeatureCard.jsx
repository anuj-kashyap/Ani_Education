import React from 'react';

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
      <div className="flex justify-center space-x-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 max-w-sm">
            <div className="bg-blue-100 rounded-full p-3">
              <span className="text-2xl" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;