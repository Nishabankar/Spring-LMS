import React, { useState } from "react";

// COURSE FILES
import AddCourse from "./AddCourse";
import Courses from "./Courses";
import EditCourse from "./EditCourse";

// BENEFIT FILES
import AddBenefits from "./AddBenefits";
import MyBenefits from "./MyBenefits";
import EditBenefit from "./EditBenefit";

// TESTIMONIAL FILES (You'll create these next)
import AddTestimonial from "./AddTestimonial";
import MyTestimonials from "./MyTestimonial";
import EditTestimonial from "./EditTestimonial";

const Dashboard = () => {
    const [activePage, setActivePage] = useState("courses");

    const [editCourseId, setEditCourseId] = useState(null);
    const [editBenefitId, setEditBenefitId] = useState(null);
    const [editTestimonialId, setEditTestimonialId] = useState(null);

    const goToCourses = () => setActivePage("courses");
    const goToBenefits = () => setActivePage("benefits");
    const goToTestimonials = () => setActivePage("testimonials");

    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <div className="w-[20%] bg-absolute-white text-white p-5 space-y-4">
                <h2 className="text-xl font-bold mb-4">Dashboard</h2>

                {/* Course Buttons */}
                <button
                    onClick={() => setActivePage("add-course")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    ➕ Add Course
                </button>

                <button
                    onClick={() => setActivePage("courses")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    📚 My Courses
                </button>

                {/* Benefit Buttons */}
                <button
                    onClick={() => setActivePage("add-benefit")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    ⭐ Add Benefit
                </button>

                <button
                    onClick={() => setActivePage("benefits")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    📝 My Benefits
                </button>

                {/* Testimonial Buttons */}
                <button
                    onClick={() => setActivePage("add-testimonial")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    💬 Add Testimonial
                </button>

                <button
                    onClick={() => setActivePage("testimonials")}
                    className="block w-full py-2 px-3 bg-white-90 rounded text-left"
                >
                    👥 My Testimonials
                </button>
            </div>

            {/* Right Panel */}
            <div className="w-[80%] bg-gray-100 p-6">

                {/* ---------------- COURSES ---------------- */}
                {activePage === "add-course" && <AddCourse />}
                {activePage === "courses" && (
                    <Courses
                        onEdit={(id) => {
                            setEditCourseId(id);
                            setActivePage("edit-course");
                        }}
                    />
                )}
                {activePage === "edit-course" && (
                    <EditCourse id={editCourseId} onUpdated={goToCourses} />
                )}

                {/* ---------------- BENEFITS ---------------- */}
                {activePage === "add-benefit" && <AddBenefits onAdded={goToBenefits} />}
                {activePage === "benefits" && (
                    <MyBenefits
                        onEdit={(id) => {
                            setEditBenefitId(id);
                            setActivePage("edit-benefit");
                        }}
                    />
                )}
                {activePage === "edit-benefit" && (
                    <EditBenefit id={editBenefitId} onUpdated={goToBenefits} />
                )}

                {/* ---------------- TESTIMONIALS ---------------- */}
                {activePage === "add-testimonial" && (
                    <AddTestimonial onAdded={goToTestimonials} />
                )}

                {activePage === "testimonials" && (
                    <MyTestimonials
                        onEdit={(id) => {
                            setEditTestimonialId(id);
                            setActivePage("edit-testimonial");
                        }}
                    />
                )}

                {activePage === "edit-testimonial" && (
                    <EditTestimonial
                        id={editTestimonialId}
                        onUpdated={goToTestimonials}
                    />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
