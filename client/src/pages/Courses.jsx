import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- DELETE COURSE FUNCTION ---
  const deleteCourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);

      // Remove deleted course from UI
      setCourses(courses.filter((course) => course._id !== id));

      alert("Course deleted successfully!");
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Delete failed!");
    }
  };

  // --- FETCH ALL COURSES ---
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-lg font-semibold">
        Loading courses...
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="p-6 text-center text-lg font-semibold">
        No courses found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            {/* IMAGE */}
            {course.images?.length > 0 && (
              <img
                src={course.images[0]}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}

            {/* TITLE */}
            <h2 className="text-xl font-semibold">{course.title}</h2>

            {/* DESCRIPTION */}
            <p className="text-gray-700 mt-2 text-sm line-clamp-2">
              {course.description}
            </p>

            {/* INFO */}
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p><strong>Author:</strong> {course.author}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Chapters:</strong> {course.chapters.length}</p>
              <p>
                <strong>Total Lessons:</strong>{" "}
                {course.chapters.reduce(
                  (total, ch) => total + ch.lessons.length,
                  0
                )}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-4 flex justify-between">
              <a
                href={`/course/${course._id}`}
                className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
              >
                View
              </a>

              <a
                href={`/edit-course/${course._id}`}
                className="px-3 py-2 bg-green-600 text-white rounded text-sm"
              >
                Edit
              </a>

              <button
                onClick={() => deleteCourse(course._id)}
                className="px-3 py-2 bg-red-600 text-white rounded text-sm"
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

export default Courses;
