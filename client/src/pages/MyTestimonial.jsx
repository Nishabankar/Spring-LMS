import React, { useEffect, useState } from "react";
import axios from "axios";

const MyTestimonials = ({ onEdit }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(res.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
    setLoading(false);
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
      fetchTestimonials(); // refresh list
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {testimonials.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow p-4 rounded-lg border"
          >
            <h3 className="text-xl font-semibold">{item.user_name}</h3>
            <p className="text-gray-700 mt-1">{item.description}</p>

            {item.user_image && (
              <img
                src={item.user_image}
                alt="User"
                className="w-20 h-20 rounded-full mt-3 object-cover"
              />
            )}

            <p className="text-sm text-gray-500 mt-2">{item.role}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => onEdit(item._id)}
                className="bg-yellow-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTestimonial(item._id)}
                className="bg-red-600 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyTestimonials;
