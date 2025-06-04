import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Convert to base64 and store in localStorage
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      localStorage.setItem("prescription", base64); // Save to localStorage
      setFileUrl(base64); // Set for preview
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section - Upload Prescription */}
        <div className="flex items-center gap-6 bg-blue-50 p-6 rounded-lg shadow">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
            alt="Upload Prescription"
            className="w-24 h-24 object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Order with Prescription
            </h3>
            <p className="text-gray-600 mb-4">
              Upload prescription and we will deliver your medicines
            </p>

            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="mb-2"
            />

            {fileUrl && (
              <p className="text-green-600 text-sm mb-2">
                ✅ Prescription saved locally!
              </p>
            )}

            <button
              disabled={!file}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
              onClick={() => alert("Prescription saved in local storage.")}
            >
              Save
            </button>
          </div>
        </div>

        {/* Right Section - How it Works */}
        <div className="bg-orange-50 p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            How does this work?
          </h4>
          <ol className="space-y-3 text-gray-700">
            <li>
              <span className="font-bold text-primary">1.</span> Upload a photo
              of your prescription
            </li>
            <li>
              <span className="font-bold text-primary">2.</span> It will be
              saved to your browser
            </li>
            <li>
              <span className="font-bold text-primary">3.</span> You can
              retrieve it when needed
            </li>
            <li>
              <span className="font-bold text-primary">4.</span> We’ll contact
              you to confirm the order
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Upload;
