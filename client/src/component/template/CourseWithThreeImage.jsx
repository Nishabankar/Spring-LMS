import React from 'react'
import HeadingText from '../molecules/HeadingText';
import "./CourseWithThreeImage.css"
import { useNavigate } from 'react-router-dom';


const CourseWithThreeImage = ( { data } ) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='max-w-[1597px] mx-auto flex flex-col gap-5 lg:gap-10 2xl:gap-[50px]'>
                {data.map( ( course, index ) => (
                    <div key={index} className='bg-absolute-white rounded-lg p-6 flex flex-col gap-10'>
                        <div className='flex flex-col gap-6 2xl:gap-[30px]'>
                            <HeadingText onClick={() => navigate( `/course/${ course.id }` )} heading={course.description.heading} subheading={course.description.subheading} mainHeadingClass="!text-lg lg:!text-xl 2xl:!text-2xl" extraClass="!mt-[0px] lg:!mt-[0px] 2xl:!mt-[0px]" />
                            <div className='flex flex-col gap-6 ' >
                                <div className='flex flex-row justify-between gap-[10px] lg:gap-5 2xl:gap-[30px] w-full '>
                                    {course.image_path.map( ( img, index ) => (
                                        <div key={index} className=' w-full lg:max-w-[((100%-20px)/3)] 2xl:max-w-[((100%-30px)/3)] '>
                                            <img src={img.path} alt={index} className='rounded-[4px] w-full h-full object-fill' />
                                        </div>
                                    ) )}
                                </div>
                                <div className='flex flex-col items-start justify-start gap-4 lg:flex-row lg:justify-between'>
                                    <div className='flex flex-row gap-2 2xl:gap-[10px]'>
                                        <p className='bg-absolute-white borderborder-white-95 py-2 px-3 2xl:py-[10px] 2xl:px-4 text-sm font-normal text-gray-35 rounded-md'>{course.duration}</p>
                                        <p className='bg-absolute-white border border-white-95 py-2 px-3 2xl:py-[10px] 2xl:px-4 text-sm  font-normal text-gray-35 rounded-md'> {course.course_for}</p>
                                    </div>
                                    <p className='text-base lg:text-lg 2xl:text-xl font-medium text-gray-15'>{course.author}</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-white-95 rounded-[10px] flex flex-col'>
                            <h1 className='py-[14px] px-5 border-b border-white-95 text-base lg:text-lg 2xl:text-[22px] font-semibold text-gray-15'>Curriculum</h1>
                            <div className='max-lg:p-6 lg:py-6 flex flex-col max-lg:gap-5 lg:gap-y-10  lg:flex-row max-xl:flex-wrap'>
                                {course.Curriculum.map( ( chapter, index ) => (
                                    <div key={index} className='curriculum-card w-full flex flex-col  max-lg: gap-3 max-lg:border-b border-white-95 lg:border-b-none  lg:border-r lg:max-w-[243px] 2xl:max-w-[309px] max-lg:pb-5 lg:px-10 2xl:px-[50px]'>
                                        <p className='text-3xl lg:text-4xl 2xl:text-[50px] font-extrabold text-gray-15'>0{index + 1}</p>
                                        <p className='text-sm lg:text-base 2xl:text-lg font-medium text-gray-20'>{chapter.name}</p>
                                    </div>
                                ) )}
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
        </>
    )
}

export default CourseWithThreeImage
