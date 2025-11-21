import React, { useEffect, useState } from "react";
import HeadingText from "../molecules/HeadingText";
import CoursesCards from "../molecules/CoursesCards";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Courses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data.courses || res.data); // supports both formats
      } catch (error) {
        console.log("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <div className="benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20">

        <HeadingText
          onClick={() => navigate(`/courses`)}
          heading="Our Courses"
          subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />

        <div className="card-container flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center items-center lg:items-stretch">

          {loading && (
            <p className="text-gray-500 text-lg">Loading Courses...</p>
          )}

          {!loading && courses.length > 0 && courses.map((item, index) => (
            <CoursesCards key={index} item={item} index={index} />
          ))}

          {!loading && courses.length === 0 && (
            <p className="text-gray-500 text-lg">No courses found</p>
          )}

        </div>
      </div>
    </>
  );
};

export default Courses;
