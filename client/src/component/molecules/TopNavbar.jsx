import React from 'react'


const TopNavbar = () => {
  return (
      <div className='w-auto bg-orange-50 py-3 px-4 flex items-center justify-center rounded-md  gap-2 md:gap-4 lg:gap-4'>
          <div className='  flex  items-center  '>
              <p className=' text-sm text-absolute-white tracking-normal leading-[150%] font-normal text-center'>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
          </div>
          <div className='flex items-center '>
              <button>
                  <img src="/assets/icons/right-arrow-icon.svg" alt="Right Arrow" />
              </button>
          </div>

    </div>
  )
}

export default TopNavbar
