import React from 'react';

const GridItem = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col bg-white items-center p-4 border rounded-lg shadow-md">
      <div className="mb-4 mt-4">
        <Icon className="w-14 h-16 text-blue-500" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default GridItem;
