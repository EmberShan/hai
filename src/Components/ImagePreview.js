import { useState } from "react";

function ImagePreview({ imgsrc, handleClose }) {
  return (
    // <div>
    //   <img
    //     src={imgsrc}
    //     alt="Uploaded Preview"
    //     className="mt-4 w-48 h-48 object-cover rounded-md shadow-md"
    //   />
    // </div>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
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
