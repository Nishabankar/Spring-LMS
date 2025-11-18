import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBenefits = ({ onEdit }) => {
    const [benefits, setBenefits] = useState([]);
    const [viewData, setViewData] = useState(null); // For view modal

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
            <h2 className="text-2xl font-bold mb-6">All Benefits</h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {benefits.map((b) => (
                    <div
                        key={b._id}
                        className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                        <h3 className="font-semibold text-xl mb-2 text-gray-800">
                            {b.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed pb-4">
                            {b.description}
                        </p>

                        <div className="flex gap-2 mt-4">
                            {/* EDIT BUTTON */}
                            <button
                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded"
                                onClick={() => onEdit(b._id)}
                            >
                                Edit
                            </button>

                            {/* DELETE BUTTON */}
                            <button
                                className="px-3 py-1 bg-red-600 text-white text-sm rounded"
                                onClick={() => deleteBenefit(b._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            {/* ----------------- VIEW MODAL ----------------- */}

            {viewData && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">

                        <h2 className="text-xl font-bold mb-3">{viewData.title}</h2>
                        <p className="text-gray-600 mb-4">{viewData.description}</p>

                        <button
                            onClick={() => setViewData(null)} // close modal
                            className="bg-gray-700 text-white px-4 py-2 rounded w-full"
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
