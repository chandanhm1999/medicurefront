import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("No file selected!");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "medicure_preset"); // 🔄 your unsigned preset
    // Optional: formData.append("folder", "prescriptions");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dcbmadhmo/auto/upload", // 🔄 your cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ Cloudinary response:", data);
      setFileUrl(data.secure_url);
      alert("✅ File uploaded!");
    } catch (error) {
      console.error("❌ Upload Error:", error);
      alert("Upload failed. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
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
                ✅ Uploaded!{" "}
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700"
                >
                  View File
                </a>
              </p>
            )}

            <button
              disabled={!file || uploading}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
              onClick={handleUpload}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>

        {/* Right Section */}
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
              uploaded to Cloudinary
            </li>
            <li>
              <span className="font-bold text-primary">3.</span> You'll get a
              public URL instantly
            </li>
            <li>
              <span className="font-bold text-primary">4.</span> We'll contact
              you to confirm the order
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Upload;
