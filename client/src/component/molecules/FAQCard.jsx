import React from 'react'

const FAQCard = ( { item, isOpen, onToggle } ) => {

  return (
    <div className='flex flex-col gap-5 border border-white-95 p-6 rounded-[10px] lg:p-10 lg:gap-10 xl:gap-[50px] w-full'>
      <button onClick={onToggle}>
        <div className='flex items-center justify-center gap-7 lg:justify-between lg:gap-[30px] '>
          <h3 className='text-base font-medium lg:text-lg  xl:text-xl text-left'>{item.question}</h3>
          {isOpen ? <img src="assets/icons/close-icon.svg" alt="close button" className='w-10 h-10' /> : <img src={item.icon_path} alt="open button" className='w-10 h-10' />}
        </div>
      </button>
      {isOpen && <>
        <div className='border-t border-white-95 pt-5 '>
          <p className='text-sm font-normal text-gray-30 lg:text-base'>{item.answer}</p>
        </div>
        <div className='bg-white-97 rounded-md border border-white-95 py-3 px-5 lg:py-4 lg:px-6 xl:py-5 xl:px-[30px] flex items-center justify-center lg:justify-between '>
          <p className='text-sm lg:text-base xl:text-lg font-medium text-gray-20'>{item.buttonText}</p>
         <a href={item.link} className='cursor-pointer'> <img src="assets/icons/next-arrow-icon.svg" alt="" className='w-10 h-10' /></a>
        </div>
      </>
      }
    </div>
  )
}
export default FAQCard
