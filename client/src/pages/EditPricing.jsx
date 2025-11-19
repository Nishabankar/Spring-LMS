import React, { useEffect, useState } from "react";
import axios from "axios";

const EditPricing = ({ id, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    planType: "monthly",
    features: [{ available: true, feature: "" }],
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch pricing by ID
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/pricing/${id}`);

        if (res.data) {
          const p = res.data;
          setFormData({
            name: p.name || "",
            price: p.price || "",
            planType: p.planType || "monthly",
            features:
              Array.isArray(p.features) && p.features.length > 0
                ? p.features.map((f) => ({
                    available: !!f.available,
                    feature: f.feature || "",
                  }))
                : [{ available: true, feature: "" }],
          });
        } else {
          setError("No pricing data found.");
        }
      } catch (err) {
        setError(err?.response?.data?.message || "Failed to load pricing data");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPricing();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, field, value) => {
    const updated = [...formData.features];
    updated[index][field] = value;
    setFormData({ ...formData, features: updated });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { available: true, feature: "" }],
    });
  };

  const removeFeature = (index) => {
    const updated = formData.features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: updated.length ? updated : [{ available: true, feature: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      await axios.put(`http://localhost:5000/api/pricing/${id}`, formData);
      onUpdated && onUpdated();
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-gray-700 p-4">Loading pricing...</div>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit Pricing Plan
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

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
            placeholder="Price"
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
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Features
          </h3>

          {formData.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
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
                value={String(f.available)}
                onChange={(e) =>
                  handleFeatureChange(i, "available", e.target.value === "true")
                }
                className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>

              <button
                type="button"
                onClick={() => removeFeature(i)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add Feature */}
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
        <button
          type="submit"
          disabled={saving}
          className="bg-green-600 text-white px-6 py-3 rounded-lg w-full
                     font-semibold text-lg shadow hover:bg-green-700 transition-all disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditPricing;
