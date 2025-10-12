import React from 'react'
import Heading from '../component/molecules/Heading'
import CourseWithThreeImage from '../component/template/CourseWithThreeImage'

const Course = () => {

  const data = [
    {
      description:
      {
        heading: "Web Design Fundamentals",
        subheading: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        btn_type: "secondary"
      },
      image_path:
        [
          { path: "assets/images/course1_image1.png" },
          { path: "assets/images/course1_image2.png" },
          { path: "assets/images/course1_image3.png" },
        ],
      duration: "4 Weeks",
      course_for: "Beginner",
      author: "By John Smith",
      title: "Web Design Fundamentals",
      Curriculum:
        [
          { name: "Introduction to HTML" },
          { name: "Styling with CSS" },
          { name: "Introduction to Responsive Design" },
          { name: "Design Principles for Web" },
          { name: "Building a Basic Website" },
        ],
    },
    {
      description:
      {
        heading: "UI/UX Design",
        subheading: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        btn_type: "secondary"
      },
      image_path:
        [
          { path: "assets/images/course2_image1.png" },
          { path: "assets/images/course2_image2.png" },
          { path: "assets/images/course2_image3.png" },
        ],
      duration: "6 Weeks",
      course_for: "Intermediate",
      author: "By Emily Johnson",
      title: "UI/UX Design",
      Curriculum: [
        { name: "Introduction to UI/UX Design" },
        { name: "User Research and Personas" },
        { name: "Wireframing and Prototyping" },
        { name: "Visual Design and Branding" },
        { name: "Usability Testing and Iteration" },
      ]
    },
    {
      description:
      {
        heading: "Mobile App Development",
        subheading: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        btn_type: "secondary"
      },
      image_path:
        [
          { path: "assets/images/course3_image1.png" },
          { path: "assets/images/course3_image2.png" },
          { path: "assets/images/course3_image3.png" },
        ],
      duration: "8 Weeks",
      course_for: "Intermediate",
      author: "By David Brown",
      title: "Mobile App Development",
      Curriculum: [


        { name: "Introduction to Mobile App Development" },
        { name: "Fundamentals of Swift Programming (iOS)" },
        { name: "Fundamentals of Kotlin Programming (Android)" },
        { name: "Building User Interfaces" },
        { name: "App Deployment and Testing" },


      ]
    },
    {
      description:
      {
        heading: "Graphic Design for Beginners",
        subheading: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        btn_type: "secondary"
      },
      image_path:
        [
          { path: "assets/images/course4_image1.png" },
          { path: "assets/images/course4_image2.png" },
          { path: "assets/images/course4_image3.png" },
        ],
      duration: "10 Weeks",
      course_for: "Beginner",
      author: "By Sarah Thompson",
      title: "Graphic Design for Beginners",
      Curriculum: [
        { name: "Introduction to Graphic Design" },
        { name: "Typography and Color Theory" },
        { name: "Layout Design and Composition" },
        { name: "Image Editing and Manipulation" },
        { name: "Designing for Print and Digital Media" },
      ]
    },
    {
      description:
      {
        heading: "Front-End Web Development",
        subheading: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        btn_type: "secondary"
      },
      image_path:
        [
          { path: "assets/images/course5_image1.png" },
          { path: "assets/images/course5_image2.png" },
          { path: "assets/images/course5_image3.png" },
        ],
      duration: "10 Weeks",
      course_for: "Intermediate",
      author: "By Michael Adams",
      title: "Front-End Web Development",
      Curriculum: [
        { name: "HTML Fundamentals" },
        { name: "CSS Styling and Layouts" },
        { name: "JavaScript Basics" },
        { name: "Building Responsive Websites" },
        { name: "Introduction to Bootstrap and React" },
      ]
    },

  ]
  return (
    <div>
      <Heading heading='Online Courses on Design and Development' subheading='Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.'/>
      <CourseWithThreeImage data={data} />
    </div>
  )
}

export default Course
