import "./App.css";
import { useState, useRef } from "react";
import ImagePreview from "./Components/ImagePreview";

function App(props) {
  // for upload image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTutorialOpen, setIsTutorialOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const fileInputRef = useRef(null);

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
    }
  };

  return (
    <div className="">
      {isTutorialOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-2">
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
                ref={fileInputRef} // for clearing the ref after closing the pop up
                className="hidden"
              />
              Choose Image
            </label>
          </div>
        </div>
      )}

      <ImagePreview
        imgsrc={selectedImage}
        handleImageUpload={handleImageUpload}
        setSelectedImage={setSelectedImage}
        fileInputRef={fileInputRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
