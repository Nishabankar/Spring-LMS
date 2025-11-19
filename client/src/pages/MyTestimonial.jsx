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
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
          >
            {/* Top Header Strip */}
            <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>

            {/* Inner Content */}
            <div className="p-6">

              {/* Image + User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.user_image}
                  alt={item.user_name}
                  className="w-16 h-16 rounded-full object-cover border shadow"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.user_name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mt-4 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => onEdit(item._id)}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium shadow-sm transition-all"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => deleteTestimonial(item._id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium shadow-sm transition-all"
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

export default MyTestimonials;
