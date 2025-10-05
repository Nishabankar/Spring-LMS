import React from 'react'
import Button from '../atoms/Button'
import './HeroBanner.css'

const HeroBanner = () => {
    return (
        <>
            <div className='pt-12 '>
                <div className=' flex items-center justify-start rounded-lg w-auto max-w-[455px] lg:max-w-[643px] xl:max-w-[854px] p-[14px] bg-white-99 border border-white-95  gap-[10px] mx-auto heading'>
                    <img src="assets/icons/hero-icon.svg" alt="" className='p-3 xl:p-4 bg-orange-95 ' />
                    <p className='text-base font-semibold tracking-normal  md:text-2xl lg:text-4xl xl:text-5xl'><span className='text-orange-50'>Unlock </span>Your Creative Potential</p>
                </div>
                < div className='pt-4 xl:pt-5 px-8 pb-12 xl:pb-[60px] flex flex-col gap-[6px] xl:gap-[10px] items-center justify-center'>
                    <p className='text-2xl font-medium tracking-normal text-center text-gray-15  lg:text-[28px] xl:text-4xl '>with Online Design and Development Courses.</p>
                    <p className='text-sm font-normal tracking-normal text-center px-1 text-gray-15 lg:text-base xl:text-lg '>Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <Button text="Explore Courses" variation='primary' size='medium'/>
                    <Button text="View Pricing" variation='secondary' size='medium'/>
                </div>
            </div>
        </>
    )
}

export default HeroBanner
