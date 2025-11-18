import React, { useState } from "react";
import axios from "axios";

const AddBenefits = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const _res = await axios.post("http://localhost:5000/api/benefits", {
                title,
                description
            });

            alert("Benefit added successfully!");
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log(error.response?.data);
            alert("Error adding benefit");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Add Benefit</h2>

            <form onSubmit={handleSubmit} className="space-y-4 w-[400px]">

                <input
                    type="text"
                    placeholder="Benefit Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full rounded"
                />

                <textarea
                    placeholder="Benefit Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 w-full rounded h-32"
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Add Benefit
                </button>

            </form>
        </div>
    );
};

export default AddBenefits;
