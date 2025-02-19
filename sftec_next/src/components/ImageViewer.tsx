"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx"; // Optional: Helps merge class names

interface ImageViewerProps {
  images: string[];
  className?: string; // Allow passing custom class names
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={clsx("flex flex-col items-center space-y-4", className)}>
      {/* Large Image Display */}
      <div className="w-full max-w-full">
        <Image
          src={selectedImage}
          alt="Selected"
          width={800}
          height={600}
          className="w-full h-[600px] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Thumbnail Buttons */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((img:any, index:any) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`border-2 rounded-md transition p-1 ${
              selectedImage === img ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={60}
              height={60}
              className="w-16 h-16 object-cover rounded"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
