import React from 'react'
import HeadingText from '../molecules/HeadingText'
import CoursesCards from '../molecules/CoursesCards'

const Courses = () => {

    const data = [
        {
            image_path: "assets/images/Image-1.png",
            duration: "4 Weeks",
            course_for: "Beginner",
            author: "By John Smith",
            title: "Web Design Fundamentals",
            description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        },
        {
            image_path: "assets/images/Image-2.png",
            duration: "6 Weeks",
            course_for: "Intermediate",
            author: "By Emily Johnson",
            title: "UI/UX Design",
            description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
        },
        {
            image_path: "assets/images/Image-4.png",
            duration: "8 Weeks",
            course_for: "Intermediate",
            author: "By David Brown",
            title: "Mobile App Development",
            description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        },
        {
            image_path: "assets/images/Image-5.png",
            duration: "10 Weeks",
            course_for: "Beginner",
            author: "By Sarah Thompson",
            title: "Graphic Design for Beginners",
            description: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
        },
        {
            image_path: "assets/images/Image-6.png",
            duration: "10 Weeks",
            course_for: "Intermediate",
            author: "By Michael Adams",
            title: "Front-End Web Development",
            description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        },
        {
            image_path: "assets/images/Image-3.png",
            duration: "6 Weeks",
            course_for: "Advance",
            author: "By Jennifer Wilson",
            title: "Advanced JavaScript",
            description: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
        },
    ]

    return (
        <>
            <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>
                <HeadingText heading="Our Courses" subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." />
                <div className='card-container flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center items-center lg:items-stretch '>
                    {data.map( ( item, index ) => (
                        <CoursesCards key={index} item={item} index={index} />
                    ) )}
                </div>
            </div>
        </>

    )
}

export default Courses
