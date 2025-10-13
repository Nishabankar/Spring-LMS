import React from 'react'
import Heading from '../component/molecules/Heading'
import CourseDetailsCard from '../component/template/CourseDetailsCard';
import VideoPlayer from '../component/atoms/VideoPlayer';

const CourseDetails = () => {
  const courseData = [
    {
      id: 1,
      title: "Introduction to UI/UX Design",
      // image: "/assets/images/course2_image1", // path to image
      lessons: [
        { name: "Understanding UI/UX Design Principles", duration: "45 Minutes", icon: "/assets/icons/clock-icon.svg" },
        { name: "Importance of User-Centered Design", duration: "1 Hour", icon: "/assets/icons/clock-icon.svg" },
        { name: "The Role of UI/UX Design in Product Development", duration: "45 Minutes", icon: "/assets/icons/clock-icon.svg" },
      ],
    },
    {
      id: 2,
      title: "User Research and Analysis",
      // image: "/assets/images/uiux2.jpg",
      lessons: [
        { name: "Conducting User Research and Interviews", duration: "1 Hour",icon:"/assets/icons/clock-icon.svg" },
        { name: "Analyzing User Needs and Behavior", duration: "1 Hour", icon:"/assets/icons/clock-icon.svg" },
        { name: "Creating User Personas and Scenarios", duration: "45 Minutes", icon:"/assets/icons/clock-icon.svg" },
      ],
    },
    {
      id: 3,
      title: "Wireframing and Prototyping",
      // image: "/assets/images/uiux3.jpg",
      lessons: [
        { name: "Introduction to Wireframing Tools and Techniques", duration: "1 Hour", icon:"/assets/icons/clock-icon.svg" },
        { name: "Creating Low-Fidelity Wireframes", duration: "1 Hour", icon:"/assets/icons/clock-icon.svg" },
        { name: "Prototyping and Interactive Mockups", duration: "1 Hour",icon:"/assets/icons/clock-icon.svg" },
      ],
    },
    {
      id: 4,
      title: "Visual Design and Branding",
      // image: "/assets/images/uiux4.jpg",
      lessons: [
        { name: "Color Theory and Typography in UI Design", duration: "1 Hour", icon:"/assets/icons/clock-icon.svg" },
        { name: "Visual Hierarchy and Layout Design", duration: "1 Hour", icon:"/assets/icons/clock-icon.svg" },
        { name: "Creating a Strong Brand Identity", duration: "45 Minutes", icon:"/assets/icons/clock-icon.svg" },
      ],
    },
    {
      id: 5,
      title: "Usability Testing and Iteration",
      // image: "/assets/images/uiux5.jpg",
      lessons: [
        { name: "Usability Testing Methods and Techniques", duration: "45 Minutes", icon:"/assets/icons/clock-icon.svg" },
        { name: "Analyzing Usability Test Results", duration: "45 Minutes", icon:"/assets/icons/clock-icon.svg" },
        { name: "Iterating and Improving UI Designs", duration: "45 Minutes", icon:"/assets/icons/clock-icon.svg" },
      ],
    },
  ];

  return (
    <div className='max-w-[1597px] mx-auto' >
      <Heading heading='UI/UX Design Course ' subheading='Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum' />
      <div className='flex flex-col gap-[50px] lg:gap-20 2xl:gap-[100px]'>
        <VideoPlayer link='https://www.youtube.com/watch?v=iLRZ9A26XMc&list=RDiLRZ9A26XMc&start_radio=1'/>
        <CourseDetailsCard courseData={courseData} />
        </div>
    </div>
  )
}

export default CourseDetails
