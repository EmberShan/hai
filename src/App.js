import "./App.css";
import { useState, useRef } from "react";
import MyCamera from "./Components/MyCamera";
import ImagePreview from "./Components/ImagePreview";

function App(props) {
  // for upload image
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);
  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
    setSelectedImage(null); // Clear the selected image
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  // Handle file input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setIsOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center flex-col py-10">
        <h1 className="text-center font-bold text-xl"> Your Plant </h1>
        <p> Status: Healthy </p>
        <img src="/plant.png" className="max-w-[70%] bg-white" />
      </div>


      {/* choose image */}
      <div className="flex flex-col items-center"> 
        {/* the camera component using a npm package; Ignored for now */}
        {/* <MyCamera /> */}
        <button className="mb-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded w-[200px]">
          Take a picture
        </button>

        <label className="mb-4 text-center cursor-pointer bg-blue-500 text-white py-2 px-4 rounded w-[200px]">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef} // for clearing the ref after closing the pop up 
            className="hidden"
          />
          Choose Image
        </label>

        {/* Image preview */}
        {isOpen && (
          <ImagePreview imgsrc = {selectedImage} handleClose={closePopup} />
        )}
      </div>
    </div>
  );
}

export default App;
