import React from 'react'

const Heading = ({heading="", subheading=""}) => {
  return (
      <div className='py-[50px] lg:py-20 2xl:py-[100px] w-full max-w-[1597px] mx-auto'>
          <div className='flex flex-col items-start justify-start gap-4 lg:flex-row lg:gap-20 2xl:gap-[100px] border-b border-white-90'>
              <h1 className='text-[28px] lg:text-[38px] 2xl:text-5xl font-semibold text-gray-15 w-full lg:pb-10 2xl:pb-[50px]'>{ heading}</h1>
              <p className='text-sm lg:text-base 2xl:text-lg font-normal text-gray-35 w-full pb-[30px]'>{ subheading}</p>
          </div>
    </div>
  )
}

export default Heading
