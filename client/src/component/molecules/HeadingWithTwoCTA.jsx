import React from 'react'
import Button from '../atoms/Button'


const HeadingWithTwoCTA = ({heading, subheading}) => {
  return (
     <div className='flex flex-col  gap-5 lg:flex-row lg:items-end justify-between  w-full max-w-[1595px] mx-auto mt-12 lg:mt-24 xl:mt-36'>
          <div className='flex  flex-col items-start justify-start gap-1 w-full lg:max-w-[933px] '>
              <h3 className='text-[28px] font-semibold tracking-normal text-gray-15 lg:text-[38px] xl:text-5xl'>{ heading}</h3>
              <p className='text-sm  font-normal tracking-normal text-gray-35 lg:text-base xl:text-lg'>{ subheading}</p>
          </div>
          <div className='w-full max-w-max flex justify-end mx-auto lg:mx-0 bg-absolute-white p-3 rounded-lg'>
               <Button text="Monthly" variation='primary' size='medium' />
              <Button text="Yearly" variation='secondary' size='medium' />

          </div>
    </div>
  )
}

export default HeadingWithTwoCTA
