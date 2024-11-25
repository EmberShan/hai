import "./App.css";
import { useState, useRef } from "react";
import ImagePreview from "./Components/ImagePreview";
import FeedbackForm from "./Components/FeedbackForm";

function App(props) {
  // for upload image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTutorialOpen, setIsTutorialOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 

  // fake data 
  const images = [
    { src: "/disease/1.JPG", caption: "12/23/2024" },
    { src: "/disease/1.JPG", caption: "12/23/2024" },
    { src: "/disease/1.JPG", caption: "12/23/2024" },
    { src: "/disease/1.JPG", caption: "12/23/2024" },
  ];

  const closeTutorial = () => {
    setIsTutorialOpen(false);
  };

  // Handle file input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setIsOpen(true);
        closeTutorial();
      };
      reader.readAsDataURL(file); 
      e.target.value = null; //resetting value so onChange is triggered even input file is the same as last time
    }
  };


  return (
    <div className="">
      {/* Tutorial */}
      {isTutorialOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-2">
            {/* X button for closing */}
            <button
              onClick={closeTutorial}
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

            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Welcome to Plant Assistant!
            </h2>
            <p className="text-gray-700 mb-4">
              🌱 Hi there! Plant Assistant is here to help you:
            </p>
            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-2">
              <li>Identify potential plant diseases based on your photos.</li>
              <li>
                Double-check symptoms to ensure our suggestions match your
                plant's condition.
              </li>
              <li>Keep a record of your plant pictures for easy reference.</li>
            </ul>

            <label className="mb-4 text-center cursor-pointer bg-green-500 text-white py-2 px-4 rounded w-[200px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              Start Analyzing
            </label>
          </div>
        </div>
      )}

      <FeedbackForm />

      {/* upload another image */}
      <ImagePreview
        selectedImage={selectedImage}
        handleImageUpload={handleImageUpload}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* homepage (diary): recently uploaded images */}
      <div className="flex flex-col justify-center p-10 space-y-2">

        <div className="mx-auto space-y-2 w-full flex flex-col justify-center mb-4">
          <p className="font-bold text-center"> Last checked: 2 days ago </p>
          {/* most recently analyzed image of the plant */}
          <div className="flex flex-col justify-center items-center">
            <img
              src="/plant.png"
              alt="Plant Image"
              className="rounded-md mb-4 w-[80%]" 
            />

            <div className="flex flex-row items-center space-x-2 mb-2">
              <p> Status: </p>
              <div class="inline-block rounded-full bg-green-100 border border-green-200 px-4 py-1 text-sm text-green-700">
                In Recovery
              </div>
            </div>
          </div>

          <label className="mb-4 text-center cursor-pointer bg-green-500 text-white py-2 px-4 rounded w-[200px] mx-auto">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            Analzye
          </label>
        </div>

        {/* other potential matches */}
        <p className=""> Previous analyses </p>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 py-2 w-max">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="h-[100px] object-contain"
                />
                <p className="mt-2 text-sm text-gray-600">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
