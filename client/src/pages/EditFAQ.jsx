import React, { useEffect, useState } from "react";
import axios from "axios";

const EditFAQ = ({ id, onUpdated }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    icon_path: "assets/icons/plus-icon.svg",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQ = async () => {
      const res = await axios.get(`http://localhost:5000/api/faqs/${id}`);
      setFormData(res.data);
      setLoading(false);
    };
    fetchFAQ();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/faqs/${id}`, formData);

    alert("FAQ updated successfully!");
    onUpdated && onUpdated();
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit FAQ</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Question */}
        <div>
          <label className="font-semibold text-gray-700">Question</label>
          <input
            type="text"
            name="question"
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
            value={formData.icon_path}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                       font-semibold text-lg shadow hover:bg-green-700 transition-all"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditFAQ;
