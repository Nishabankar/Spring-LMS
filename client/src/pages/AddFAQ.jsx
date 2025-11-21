import React, { useState } from "react";
import axios from "axios";

const AddFAQ = ({ onAdded }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    icon_path: "assets/icons/plus-icon.svg",
    buttonText: "",
    link: "#"
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
      buttonText: "",
      link: "#"
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
            className="border p-3 rounded-lg w-full mt-1"
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
            className="border p-3 rounded-lg w-full mt-1"
          ></textarea>
        </div>

        {/* Icon Path */}
        <div>
          <label className="font-semibold text-gray-700">Icon Path</label>
          <input
            type="text"
            name="icon_path"
            value={formData.icon_path}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1"
          />
        </div>

        {/* Button Text */}
        <div>
          <label className="font-semibold text-gray-700">Button Text</label>
          <input
            type="text"
            name="buttonText"
            placeholder="Enter button text"
            value={formData.buttonText}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1"
          />
        </div>

        {/* Link */}
        <div>
          <label className="font-semibold text-gray-700">Link</label>
          <input
            type="text"
            name="link"
            placeholder="#"
            value={formData.link}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full font-semibold text-lg shadow hover:bg-green-700 transition-all"
          >
            Save FAQ
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddFAQ;
