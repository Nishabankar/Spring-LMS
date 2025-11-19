import React, { useState } from "react";
import axios from "axios";

const AddBenefits = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/benefits", {
        title,
        description,
      });

      alert("Benefit added successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error.response?.data);
      alert("Error adding benefit");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Benefit</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Benefit Title */}
        <div>
          <label className="font-semibold text-gray-700">Benefit Title</label>
          <input
            type="text"
            placeholder="Enter benefit title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Benefit Description */}
        <div>
          <label className="font-semibold text-gray-700">Benefit Description</label>
          <textarea
            placeholder="Describe the benefit..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                     font-semibold text-lg shadow hover:bg-green-700 transition-all"
        >
          Add Benefit
        </button>

      </form>
    </div>
  );
};

export default AddBenefits;
