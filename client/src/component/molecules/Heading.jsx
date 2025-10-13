import React from 'react'

const Heading = ({heading="", subheading=""}) => {
  return (
      <div className='my-[50px] lg:my-20 2xl:my-[100px] w-full max-w-[1597px] mx-auto border-b border-white-90 '>
          <div className='flex flex-col items-start justify-start gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-20 2xl:gap-[100px] pb-[30px] lg:pb-10 2xl:pb-[50px]'>
              <h1 className='text-[28px] lg:text-[38px] 2xl:text-5xl font-semibold text-gray-15 w-full '>{ heading}</h1>
              <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35 w-full '>{ subheading}</p>
          </div>
    </div>
  )
}

export default Heading
