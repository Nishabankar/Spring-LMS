import React, { useEffect, useState } from "react";
import axios from "axios";

const MyFAQ = ({ onEdit }) => {
  const [faqs, setFaqs] = useState([]);

  const fetchFAQs = async () => {
    const res = await axios.get("http://localhost:5000/api/faqs");
    setFaqs(res.data);
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this FAQ?");
    if (!confirmDelete) return;

    await axios.delete(`http://localhost:5000/api/faqs/${id}`);
    fetchFAQs();
  };

  return (
    <div>
      {/* 🔥 Updated Title + Reduced Bottom Space */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-wide">
        My FAQ
      </h2>

      {/* 🔥 Reduced gap between cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
          >
            {/* Top Header Strip */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>

            {/* Content */}
            <div className="p-5 space-y-3">

              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                  ❓
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {faq.question}
                </h3>
              </div>

              {/* Answer */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {faq.answer}
              </p>

              {/* Icon Path */}
              {faq.icon_path && (
                <span className="inline-block text-gray-500 text-xs font-medium px-3 py-1 rounded-full bg-gray-100 border mt-1">
                  {faq.icon_path}
                </span>
              )}

              {/* Buttons */}
              <div className="flex gap-4 pt-3">
                <button
                  onClick={() => onEdit(faq._id)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium shadow-sm transition-all"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => handleDelete(faq._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium shadow-sm transition-all"
                >
                  🗑 Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFAQ;
