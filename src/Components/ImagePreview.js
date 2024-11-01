import { useState } from "react";

function ImagePreview({ imgsrc, handleClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* X button for closing */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image */}
        <img src={imgsrc} alt="Preview" className="rounded-md mb-4" />

        {/* Analyze button */}
        <button
          onClick={() => console.log("Analyze button clicked")}
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}

export default ImagePreview;
