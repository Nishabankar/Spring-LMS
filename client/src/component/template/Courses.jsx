import React, { useEffect, useState } from "react";
import HeadingText from "../molecules/HeadingText";
import CoursesCards from "../molecules/CoursesCards";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");

        const apiCourses = Array.isArray(res.data)
          ? res.data
          : res.data.courses || [];

        setCourses(apiCourses);
      } catch (err) {
        console.error("Error fetching courses for home:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const homeCourses = courses.slice(0, 10);

  const mapApiCourseToCard = (course) => ({
    image_path: course.images?.[0] || "assets/images/default-course.png",
    duration: course.duration || "",
    course_for: course.level || "",
    author: course.author ? `By ${course.author}` : "",
    title: course.title || "",
    description: course.description || "",
  });

  return (
    <>
      <div className="benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20">
        <HeadingText
          onClick={() => navigate(`/courses`)}
          heading="Our Courses"
          subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et..."
        />

        <div className="card-container flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center items-center lg:items-stretch ">
          {loading ? (
            <p>Loading courses...</p>
          ) : homeCourses.length > 0 ? (
            homeCourses.map((course, index) => (
              <CoursesCards
                key={course._id || index}
                item={mapApiCourseToCard(course)}
                index={index}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
