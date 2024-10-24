import React from 'react';
import Landing from '../assets/Images/Landing.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-transparent">
      <img 
        src={Landing} 
        alt="Landing" 
        className="w-full h-full"
      />
      <p className="mt-4 text-gray-600 text-center max-w-lg">
        This is the home page of our website, featuring a beautiful landing image and a sleek, modern design using Tailwind CSS.
      </p>
    </div>
  );
};

export default Home;
