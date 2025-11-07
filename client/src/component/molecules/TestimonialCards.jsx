import React from 'react'
import Button from '../atoms/Button'

const TestimonialCards = ( { item, index, className="" } ) => {
    return (
        <div className={`card-container bg-absolute-white w-full lg:max-w-[calc((100%-20px)/2)] 2xl:max-w-[calc((100%-30px)/2)] rounded-[10px] 2xl:rounded-xl ${className}`}>
            <div className='p-[30px] lg:p-10 2xl:p-[50px]'>
                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-30'>{item.description}</p>
            </div>
            <div className='px-[30px] py-5 bg-white-99 flex justify-between '>
                <div className='flex items-center gap-[10px] 2xl:gap-4' >
                    <img src={item.user_image} alt={index} className='w-[50px] height-[50px] 2xl:w-[60px] 2xl:h-[60px] rounded-md' />
                    <h3 className='text-base 2xl:text-lg font-semibold text-gray-20'>{item.user_name}</h3>
                </div>
                <div>
                    <Button text="Read Full Story" variation='primary_gray' size='medium' className="py-[14px] px-4  2xl:py-[18px] 2xl:px-6 text-sm 2xl:text-lg text-gray-15" />

                </div>
            </div>

        </div>
    )
}

export default TestimonialCards
