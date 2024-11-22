import { useState } from "react";

function AnalyzeResult({ plantImg }) {
  const [isOpen, setIsOpen] = useState(true);
  const images = [
    { src: plantImg, caption: "50% Late Blight" },
    { src: plantImg, caption: "50% Late Blight" },
    { src: plantImg, caption: "50% Late Blight" },
    { src: plantImg, caption: "50% Late Blight" },
  ];

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-2 flex flex-col space-y-2 max-h-[90%] overflow-y-auto">
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

            {/* highest match */}
            <div className="flex flex-col justify-center items-center">
              <img
                src={plantImg}
                alt="Plant Image"
                className="rounded-md mb-4 w-[80%]"
              />

              <div className="mx-auto space-y-2">
                <p className="font-bold text-xl text-center"> Early Blight </p>
                <div className=" space-x-2">
                  <div class="inline-block rounded-full bg-green-100 border border-green-200 px-4 py-1 text-sm text-green-700">
                    94% Match
                  </div>
                  <div class="inline-block rounded-full bg-green-100 border border-green-200 px-4 py-1 text-sm text-green-700">
                    Curable 
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center">
                  <ul className="list-disc w-auto">
                    <li>Brown leaves</li>
                  </ul>
                </div> */}

                <p> Main symptom: Brown leaves </p>
              </div>
            </div>

            {/* other potential matches */}
            <div className="overflow-x-auto">
              <div className="flex space-x-4 py-4 w-max">
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
                    <p className="mt-2 text-sm text-gray-600">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AnalyzeResult;
