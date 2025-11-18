import React, { useState } from "react";
import axios from "axios";

const AddTestimonial = ({ onAdded }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    description: "",
    role: "",
    user_image: "", // will store Cloudinary secure_url
  });

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // CLOUDINARY UPLOAD (same style as AddCourse)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "spring-lms");

      // SAME URL as AddCourse
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/db2g3c5w6/image/upload`,
        form
      );

      const imageUrl = uploadRes.data.secure_url;

      setFormData((prev) => ({
        ...prev,
        user_image: imageUrl,
      }));

      setImagePreview(imageUrl);
    } catch (error) {
      console.error("Cloudinary error:", error);
      alert("Image upload failed");
    }

    setUploading(false);
  };

  // REMOVE IMAGE
  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      user_image: "",
    }));
    setImagePreview(null);
  };

  // INPUT CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.user_image) {
      alert("Please upload a user image");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/testimonials", formData);
      setMessage("Testimonial added successfully!");
      onAdded();
    } catch (error) {
      console.error("Error adding testimonial:", error);
      setMessage("Failed to add testimonial.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Testimonial</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* USER NAME */}
        <div>
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        {/* ROLE */}
        <div>
          <label className="block font-medium">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Student, Developer, etc."
          />
        </div>

        {/* IMAGE UPLOAD (same style as AddCourse) */}
        <div>
          <label className="block font-medium">Upload User Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2"
          />

          {uploading && (
            <p className="text-blue-500 text-sm">Uploading image...</p>
          )}

          {/* PREVIEW */}
          {imagePreview && (
            <div className="relative w-max mt-2">
              <img
                src={imagePreview}
                className="w-24 h-24 rounded-full object-cover"
                alt="Preview"
              />
              <button
                type="button"
                className="absolute top-0 right-0 bg-red-600 text-white px-1 text-xs rounded"
                onClick={removeImage}
              >
                X
              </button>
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          {loading ? "Adding..." : "Add Testimonial"}
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;
