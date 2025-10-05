import React from 'react'
import Button from '../atoms/Button'

const HeadingText = () => {
  return (
      <div className='flex flex-col  gap-5 lg:flex-row lg:items-end justify-between  w-full max-w-[1595px] mx-auto mt-12 lg:mt-24 xl:mt-36'>
          <div className='flex  flex-col items-start justify-start gap-1 w-full lg:max-w-[933px] '>
              <h3 className='text-[28px] font-semibold tracking-normal text-gray-15 lg:text-[38px] xl:text-5xl'>Benefits</h3>
              <p className='text-sm  font-normal tracking-normal text-gray-35 lg:text-base xl:text-lg'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          </div>
          <div className='w-full max-w-max flex justify-end'>
              <Button text="View All" variation='secondary' size='medium'/>
          </div>


    </div>
  )
}

export default HeadingText
