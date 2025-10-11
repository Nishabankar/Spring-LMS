import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-absolute-white mt-[50px] -mx-4 lg:-mx-5 xl:-mx-20 2xl:-mx-40 -mb-4 lg:-mb-5 xl:-mb-20 2xl:-mb-40 pt-[50px] pb-6 px-5 lg:pt-14 lg:px-20 lg:pb-5 2xl:pt-[100px] 2xl:pb-[30px] 2xl:px-[162px]'>
            <div className='max-w-[1597px] mx-auto'>
                <div className='flex flex-col gap-6 lg:flex lg:flex-row lg:justify-between lg:gap-6  lg:pb-5 '>
                    <div className='flex flex-col gap-[30px]'>
                        <img src="assets/icons/logo-icon.svg" alt="logo" className='w-8 h-8' />
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row gap-[6px]'>
                                <img src="assets/icons/subtract-icon.svg" alt="subtract" className='w-6 h-6' />
                                <p className='text-sm-[15px] lg:text-base 2xl:text-lg font-normal text-gray-15'>hello@skillbridge.com</p>
                            </div>
                            <div className='flex flex-row gap-[6px]'>
                                <img src="assets/icons/calling-icon.svg" alt="calling" className='w-6 h-6' />
                                <p className='text-sm-[15px] lg:text-base 2xl:text-lg font-normal text-gray-15'>+91 91813232309</p>
                            </div>
                            <div className='flex flex-row gap-[6px]'>
                                <img src="assets/icons/location-icon.svg" alt="location" className='w-6 h-6' />
                                <p className='text-sm-[15px] font-normal text-gray-15'>Somewhere in the World</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[30px] max-md:flex-wrap lg:gap-6 2xl:gap-[30px] lg:w-fit'>
                        <div className='flex flex-col gap-[10px] lg:gap-[14px] lg:w-full  max-xl:max-w-[((100%-200px)/3)] xl:min-w-[230px]  2xl:min-w-[249px]'>
                            <h3 className='text-lg 2xl:text-xl font-semibold text-gray-15'>Home</h3>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Benefits</p>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Our Courses</p>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Our Testimonials</p>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Our FAQ</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[14px] lg:w-full max-xl:max-w-[((100%-200px)/3)] xl:min-w-[230px] 2xl:min-w-[249px]'>
                            <h3 className='text-lg 2xl:text-xl font-semibold text-gray-15'>About Us</h3>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Company</p>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Achievements</p>
                                <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35'>Our Goals</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px] lg:gap-[14px] pb-5 lg:w-full  max-xl:max-w-[((100%-200px)/3)] xl:min-w-[230px] 2xl:min-w-[249px]'>
                            <h3 className='text-lg 2xl:text-xl font-semibold text-gray-15'>Social Profiles</h3>
                            <div className='flex gap-[14px]'>
                                <img src="assets/icons/facebook-icon.svg" alt="facebook" className='w-11 h-11' />
                                <img src="assets/icons/twitter-icon.svg" alt="twitter" className='w-11 h-11' />
                                <img src="assets/icons/linkdin-icon.svg" alt="linkdin" className='w-11 h-11' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5 border-t border-white-95'>
                    <p className='text-sm 2xl:text-lg font-normal text-gray-40 text-center'>
                        © 2023 Skillbridge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
