// src/pages/EditBenefit.jsx
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
  }, [id]);

  const updateBenefit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/benefits/${id}`, { title, description });
      alert("Benefit updated");
      if (onUpdated) onUpdated();
    } catch (err) {
      console.log(err);
      alert("Error updating benefit");
    }
  };

  if (!id) return <p className="p-4">No benefit selected for editing.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Benefit</h2>
      <form onSubmit={updateBenefit} className="space-y-4 max-w-lg">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded h-32"
          required
        />
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
          <button type="button" onClick={onUpdated} className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditBenefit;
