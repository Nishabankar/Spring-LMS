import React from 'react'
import Button from '../atoms/Button'

const HeadingText = ( { heading, subheading, BtnText = "View All", isFAQ = false } ) => {

  const mainClass = isFAQ
    ? "mt-0 lg:max-w-[40%] lg:flex-col lg:mt-0 2xl:mt-0 lg:gap-10 2xl:gap-[50px] "
    : " mt-12 lg:mt-24 xl:mt-36";


  const headingClass = isFAQ
    ? "lg:text-[38px] 2xl:text-5xl"
    : "";

  const subheadingClass = isFAQ
    ? "lg:text-sm 2xl:text-lg"
    : "";

  const buttonClass = isFAQ
    ? "mr-auto"
    : "";

  return (
    <div className={`flex flex-col  gap-5 lg:flex-row lg:items-end justify-between w-full max-w-[1595px] mx-auto ${ mainClass }`}>
      <div className='flex  flex-col items-start justify-start gap-1 w-full lg:max-w-[933px]'>
        <h3 className={`text-[28px] font-semibold tracking-normal text-gray-15 lg:text-[38px] xl:text-5xl ${ headingClass }`}>{heading}</h3>
        <p className={`text-sm  font-normal tracking-normal text-gray-35 lg:text-base xl:text-lg ${ subheadingClass }`}>{subheading}</p>
      </div>
      <div className={`w-full max-w-max flex justify-end ${ buttonClass }`}>
        <Button text={BtnText} variation='secondary' size='medium' />
      </div>
    </div>
  )
}

export default HeadingText
