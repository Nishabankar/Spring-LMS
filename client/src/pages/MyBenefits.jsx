import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBenefits = ({ onEdit }) => {
  const [benefits, setBenefits] = useState([]);
  const [viewData, setViewData] = useState(null);

  const fetchBenefits = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/benefits");
      setBenefits(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching benefits");
    }
  };

  const deleteBenefit = async (id) => {
    if (!window.confirm("Are you sure you want to delete this benefit?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/benefits/${id}`);
      fetchBenefits();
    } catch (error) {
      console.log(error);
      alert("Error deleting benefit");
    }
  };

  useEffect(() => {
    fetchBenefits();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-wide">
        My Benefits
      </h2>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {benefits.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
          >
            {/* Decorative Header Strip */}
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>

            <div className="p-6 space-y-3">
              <h3 className="font-semibold text-xl text-gray-900 leading-tight">
                {b.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {b.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => onEdit(b._id)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg shadow transition-all font-medium"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => deleteBenefit(b._id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow transition-all font-medium"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------- VIEW MODAL --------------------- */}
      {viewData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-gray-200">

            <h2 className="text-2xl font-bold mb-3 text-gray-900">{viewData.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{viewData.description}</p>

            <button
              onClick={() => setViewData(null)}
              className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg shadow transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyBenefits;
