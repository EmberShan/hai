import React, { useState } from "react";

const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setIsSubmitted(false); // Reset submission state if reopened
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show thank you message
  };

  return (
    <div className="relative">
      {/* Floating Action Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-400 text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none"
        aria-label="Feedback"
      >
        ?
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 mx-2">
            {/* Feedback Form */}
            {!isSubmitted ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Feedback Form
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="feedback"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows="4"
                      className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your feedback"
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={togglePopup}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            ) : (
              // Thank You Message
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-6">
                  We appreciate your feedback. Have a great day!
                </p>
                <button
                  onClick={togglePopup}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
