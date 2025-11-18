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

  // Fetch testimonial by ID
  const fetchTestimonial = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/testimonials/${id}`);
      setFormData({
        user_name: res.data.user_name,
        description: res.data.description,
        role: res.data.role,
        user_image: res.data.user_image,
      });
      setImagePreview(res.data.user_image); // preview existing image
    } catch (error) {
      console.error("Error loading testimonial:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) fetchTestimonial();
  }, [id]);

  // CLOUDINARY UPLOAD (same as AddCourse + AddTestimonial)
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

  // Remove image
  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      user_image: "",
    }));
    setImagePreview(null);
  };

  // Handle text changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update testimonial
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
      onUpdated(); // go back to My Testimonials
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("Failed to update testimonial.");
    }
  };

  if (loading) return <p>Loading testimonial...</p>;

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Testimonial</h2>

      {message && <p className="text-green-600 mb-3">{message}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>

        {/* USER NAME */}
        <div>
          <label className="block font-medium">User Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full border p-2 rounded"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* ROLE */}
        <div>
          <label className="block font-medium">Role</label>
          <input
            type="text"
            name="role"
            className="w-full border p-2 rounded"
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block font-medium">User Image</label>
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
                alt="preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-0 right-0 bg-red-600 text-white px-1 rounded text-xs"
              >
                X
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Testimonial
        </button>
      </form>
    </div>
  );
};

export default EditTestimonial;
