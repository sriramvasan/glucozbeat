import React from 'react';

interface CustomMessage{
  message: string
}

const SpinnerLoader = ({message}:CustomMessage) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-black mt-12">
      <div className="flex space-x-1">
        <div className="w-2 h-6 bg-purple-400 animate-scale"></div>
        <div className="w-2 h-6 bg-purple-400 animate-scale delay-100"></div>
        <div className="w-2 h-6 bg-purple-400 animate-scale delay-200"></div>
        <div className="w-2 h-6 bg-purple-400 animate-scale delay-300"></div>
        <div className="w-2 h-6 bg-purple-400 animate-scale delay-400"></div>
      </div>
      {message}
    </div>
  );
};

export default SpinnerLoader;
