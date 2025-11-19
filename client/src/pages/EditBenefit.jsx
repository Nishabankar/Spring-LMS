import React, { useEffect, useState } from "react";
import axios from "axios";

const EditBenefit = ({ id, onUpdated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchBenefit = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/benefits/${id}`);
      setTitle(res.data.title || "");
      setDescription(res.data.description || "");
    } catch (err) {
      console.log(err);
      alert("Error fetching benefit");
    }
  };

  useEffect(() => {
    if (id) fetchBenefit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateBenefit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/benefits/${id}`, { title, description });
      alert("Benefit updated successfully!");
      if (onUpdated) onUpdated();
    } catch (err) {
      console.log(err);
      alert("Error updating benefit");
    }
  };

  if (!id) return <p className="p-4">No benefit selected for editing.</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Benefit</h2>

      <form onSubmit={updateBenefit} className="space-y-5">

        {/* Benefit Title */}
        <div>
          <label className="font-semibold text-gray-700">Benefit Title</label>
          <input
            type="text"
            value={title}
            placeholder="Enter updated title"
            onChange={(e) => setTitle(e.target.value)}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Benefit Description */}
        <div>
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            value={description}
            placeholder="Update description..."
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow font-semibold transition-all"
          >
            Update Benefit
          </button>

          <button
            type="button"
            onClick={onUpdated}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow font-medium transition-all"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditBenefit;
