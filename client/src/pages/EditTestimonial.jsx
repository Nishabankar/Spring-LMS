import React, { useEffect, useState } from "react";
import axios from "axios";

const EditTestimonial = ({ id, onUpdated }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    description: "",
    role: "",
    user_image: "",
  });

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const fetchTestimonial = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/testimonials/${id}`);
      setFormData({
        user_name: res.data.user_name,
        description: res.data.description,
        role: res.data.role,
        user_image: res.data.user_image,
      });
      setImagePreview(res.data.user_image);
    } catch (error) {
      console.error("Error loading testimonial:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) fetchTestimonial();
  }, [id]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "spring-lms");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/db2g3c5w6/image/upload",
        form
      );

      const imageUrl = uploadRes.data.secure_url;

      setFormData((prev) => ({
        ...prev,
        user_image: imageUrl,
      }));

      setImagePreview(imageUrl);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      alert("Image upload failed");
    }

    setUploading(false);
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      user_image: "",
    }));
    setImagePreview(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_image) {
      alert("Please upload a user image");
      return;
    }

    setMessage("");

    try {
      await axios.put(
        `http://localhost:5000/api/testimonials/${id}`,
        formData
      );

      setMessage("Testimonial updated successfully!");
      onUpdated();
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("Failed to update testimonial.");
    }
  };

  if (loading) return <p>Loading testimonial...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Testimonial</h2>

      {message && <p className="text-green-600 font-medium mb-4">{message}</p>}

      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* USER NAME */}
        <div>
          <label className="font-semibold text-gray-700">User Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          ></textarea>
        </div>

        {/* ROLE */}
        <div>
          <label className="font-semibold text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Student, Developer, etc."
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="font-semibold text-gray-700">User Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1"
          />

          {uploading && <p className="text-blue-500 text-sm">Uploading image...</p>}

          {/* PREVIEW */}
          {imagePreview && (
            <div className="relative inline-block mt-3">
              <img
                src={imagePreview}
                className="w-24 h-24 rounded-full object-cover border shadow"
                alt="Preview"
              />
              <button
                type="button"
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full shadow"
                onClick={removeImage}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                     font-semibold text-lg shadow hover:bg-green-700 transition-all"
        >
          Update Testimonial
        </button>

      </form>
    </div>
  );
};

export default EditTestimonial;
