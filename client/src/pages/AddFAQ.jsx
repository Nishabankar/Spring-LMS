import React, { useState } from "react";
import axios from "axios";

const AddFAQ = ({ onAdded }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    icon_path: "assets/icons/plus-icon.svg",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/faqs", formData);

    alert("FAQ added successfully!");

    if (onAdded) onAdded();

    setFormData({
      question: "",
      answer: "",
      icon_path: "assets/icons/plus-icon.svg",
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add FAQ</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Question */}
        <div>
          <label className="font-semibold text-gray-700">Question</label>
          <input
            type="text"
            name="question"
            placeholder="Enter FAQ question"
            value={formData.question}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Answer */}
        <div>
          <label className="font-semibold text-gray-700">Answer</label>
          <textarea
            name="answer"
            placeholder="Write the answer here..."
            value={formData.answer}
            onChange={handleChange}
            rows="4"
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>

        {/* Icon Path */}
        <div>
          <label className="font-semibold text-gray-700">Icon Path</label>
          <input
            type="text"
            name="icon_path"
            placeholder="assets/icons/plus-icon.svg"
            value={formData.icon_path}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                       font-semibold text-lg shadow hover:bg-green-700 transition-all"
          >
            Save FAQ
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddFAQ;
