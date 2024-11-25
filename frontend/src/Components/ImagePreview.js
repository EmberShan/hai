import { useState } from "react";
import AnalyzeResult from "./AnalyzeResult";
import axios from "axios";

function ImagePreview({
  selectedImage,
  handleImageUpload,
  isOpen,
  setIsOpen,
  file,
}) {
  const [isResultOpen, setIsResultOpen] = useState(false);

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const openResult = () => {
    setIsResultOpen(true);
    closePopup();
  };

  const closePopup = () => {
    setIsOpen(false);
    // setSelectedImage(null); // Clear the selected image
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = ""; // Reset the file input value
    // }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.log("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.predicted_class !== undefined) {
        setResult({
          predicted_class: data.predicted_class,
          confidence: data.confidence.toFixed(2),
        });
        console.log('result: ', data.predicted_class, data.confidence.toFixed(2)); 
        setError(null);
        openResult(); 
      } else {
        setResult(null);
        setError(data.error);
      }
    } catch (err) {
      setResult(null);
      setError(err.message);
      console.log(err.message)
    }
  }; 

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-2 flex flex-col justify-center">
            {/* X button for closing */}
            <button
              onClick={closePopup}
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
            <img
              src={selectedImage}
              alt="Preview"
              className="rounded-md my-4"
            />

            <p className="text-center mb-4 font-bold">
              {" "}
              Is this the tomato picture you want to analyze?{" "}
            </p>

            {/* Two Buttons: choose image and analyze */}
            <div className="flex flex-col">
              <label className="mb-4 text-center cursor-pointer bg-blue-400 text-white py-2 px-4 rounded w-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                Choose another Image
              </label>

              <label
                className="text-center cursor-pointer bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleUpload}
              >
                Analyze
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Disease analysis result */}
      {isResultOpen && <AnalyzeResult plantImg={selectedImage} resule={result} />}
    </>
  );
}

export default ImagePreview;
