import React from 'react'
import Button from '../atoms/Button';

const CoursesCards = ( { item, index } ) => {
    console.log( item );

    return (

        <div className='bg-absolute-white  p-6 lg:p-10 2xl:-p-12 rounded-xl border border-white-95 flex flex-col items-start justify-between w-full lg:max-w-[calc((100%-20px)/2)]  2xl:max-w-[calc((100%-30px)/2)] gap-6 2xl:gap-7 '>
            <div className='rounded-md w-full h-auto'>
                <img src={item.image_path} alt={index} className='object-cover w-full h-full'/>
            </div>
            <div className=' w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-3'>
                <div className='flex items-start justify-start gap-2 '>
                    <p className='border border-white-95 rounded-md py-2 px-[14px] text-sm 2xl:text-lg font-normal text-gray-30'>{item.duration}</p>
                    <p className='border border-white-95 rounded-md py-2 px-[14px] text-sm 2xl:text-lg  font-normal text-gray-30'>{item.course_for}</p>

                </div>
                <div>
                    <p className='text-base  2xl:text-xl font-medium text-gray-15'>{item.author}</p>
                </div>
            </div>
            <div className='flex  flex-col items-start justify-start gap-2 '>
                <h3 className='text-xl 2xl:text-2xl  font-semibold text-gray-15'>{item.title}</h3>
                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-30'>{item.description}</p>
            </div>
            <div className='w-full'>
                <Button text="got it now" variation='primary_gray' size='large' />
            </div>


        </div>
    )
}

export default CoursesCards
