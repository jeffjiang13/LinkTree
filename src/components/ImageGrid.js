import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={image}
            alt={`image-${index}`}
            className="w-full h-auto rounded-md border shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
