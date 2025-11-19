import React, { useEffect, useState } from "react";
import axios from "axios";

const MyPricing = ({ onEdit }) => {
  const [pricing, setPricing] = useState([]);
  const [error, setError] = useState("");

  const fetchPricing = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pricing");
      setPricing(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load pricing plans");
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this pricing plan?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/pricing/${id}`);
      fetchPricing();
    } catch (err) {
      console.error(err);
      alert("Failed to delete pricing plan");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 tracking-wide">
        Manage Pricing Plans
      </h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {pricing.map((plan) => (
          <div
            key={plan._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
          >

            {/* Top Gradient Strip */}
            <div className="h-3 bg-gradient-to-r from-blue-600 to-blue-800"></div>

            {/* Card Content */}
            <div className="p-6 space-y-4">

              {/* Title + Plan Type */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize mt-1">
                  {plan.planType} Plan
                </p>
              </div>

              {/* Price */}
              <p className="text-4xl font-extrabold text-blue-600 tracking-tight">
                ₹{plan.price}
              </p>

              {/* Features */}
              <div className="mt-3">
                <h4 className="font-semibold text-gray-800 mb-2">Features</h4>

                <ul className="space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span>
                        {f.available ? (
                          <span className="text-green-600 text-lg font-bold">✔</span>
                        ) : (
                          <span className="text-red-600 text-lg font-bold">✖</span>
                        )}
                      </span>
                      {f.feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">

                <button
                  onClick={() => onEdit && onEdit(plan._id)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium shadow-sm transition-all"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => handleDelete(plan._id)}
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

export default MyPricing;
