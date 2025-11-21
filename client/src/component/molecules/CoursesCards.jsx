import React from 'react'
import Button from '../atoms/Button';
import axios from "axios";

const CoursesCards = ({ item }) => {

    // TEMP userId (replace when real login system exists)
    const userId = localStorage.getItem("userId") || "guest_user";

    const handleAddCourse = async () => {
        try {
            await axios.post("http://localhost:5000/api/mycourses", {
                userId: userId,
                courseId: item._id
            });

            alert("Course added to My Courses!");
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className='bg-absolute-white p-6 lg:p-10 rounded-xl border border-white-95 flex flex-col items-start justify-between w-full lg:max-w-[calc((100%-20px)/2)] gap-6'>

            <div className='rounded-md w-full h-auto'>
                <img
                    src={item.images && item.images.length > 0 ? item.images[0] : "/assets/images/default.png"}
                    alt={item.title}
                    className='object-cover w-full h-full'
                />
            </div>

            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3'>
                <div className='flex items-center gap-2'>
                    <p className='border border-white-95 rounded-md py-2 px-[14px] text-sm'>{item.duration}</p>
                    <p className='border border-white-95 rounded-md py-2 px-[14px] text-sm'>{item.level}</p>
                </div>
                <p className='text-base font-medium text-gray-15'>{item.author}</p>
            </div>

            <div className='flex flex-col items-start gap-2'>
                <h3 className='text-xl font-semibold text-gray-15'>{item.title}</h3>
                <p className='text-sm text-gray-30'>{item.description}</p>
            </div>

            <div className='w-full'>
                <Button
                    text="got it now"
                    variation='primary_gray'
                    size='large'
                    onClick={handleAddCourse}
                />
            </div>
        </div>
    )
}

export default CoursesCards
