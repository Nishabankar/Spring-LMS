import React, { useState } from "react";
import axios from "axios";

const AddPricing = ({ onAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    planType: "monthly",
    features: [{ available: true, feature: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index][field] = value;
    setFormData({ ...formData, features: updatedFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { available: true, feature: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/pricing", formData);
    onAdded();
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Pricing Plan</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Plan Name */}
        <div>
          <label className="font-semibold text-gray-700">Plan Name</label>
          <input
            type="text"
            name="name"
            placeholder="Plan Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price (₹)"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Plan Type */}
        <div>
          <label className="font-semibold text-gray-700">Plan Type</label>
          <select
            name="planType"
            value={formData.planType}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Features</h3>

          {formData.features.map((f, i) => (
            <div key={i} className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Feature"
                value={f.feature}
                onChange={(e) =>
                  handleFeatureChange(i, "feature", e.target.value)
                }
                className="border p-3 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <select
                value={f.available}
                onChange={(e) =>
                  handleFeatureChange(i, "available", e.target.value === "true")
                }
                className="border p-3 rounded-lg w-40 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>
          ))}

          {/* Add Feature Button */}
          <button
            type="button"
            onClick={addFeature}
            className="flex items-center gap-2 border border-blue-500 text-blue-600
                       px-4 py-2 rounded-lg hover:bg-blue-50 transition-all"
          >
            <span className="text-xl">➕</span>
            <span>Add Feature</span>
          </button>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                       font-semibold text-lg shadow hover:bg-green-700 transition-all"
          >
            Save Pricing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPricing;
