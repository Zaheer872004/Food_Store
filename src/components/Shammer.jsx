import React from 'react';

const Shammer = () => {
  // Create an array of 10 elements to render placeholders
  const placeholders = Array.from({ length: 16 });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="bg-white drop-shadow-lg rounded-lg border hover:ring-1 hover:border-gray-400 flex flex-col p-4"
        >
          <div className="w-full h-40 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="flex items-center mt-2">
              <div className="h-4 w-12 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shammer;
