import React from 'react'
import Button from '../atoms/Button'

const PriceCard = ( { item, type } ) => {

  return (
    <>
        <div className='bg-white-99 border border-white-95 rounded-xl p-5 pt-[30px] flex flex-col items-center justify-center w-full lg:max-w-[((100%-30px)/2)] gap-[30px] lg:gap-[60px] 2xl:gap-[50px] '>
          <div className='py-2 text-center bg-orange-97 border border-orange-90 rounded-[4px] w-full'>
            <p>{item.name}</p>
          </div>
          <div>
          <p className='text-sm font-normal text-gray-30'><span className='text-[50px] font-semibold text-gray-15'>{item.price}</span>/{ type}</p>
          </div>
          <div className='flex w-full flex-col p-5 lg:px-[30px] gap-5 bg-absolute-white border border-white-95 rounded-[10px] rounded-b-none'>
            <h1 className='text-center font-medium text-lg text-gray-15'>Available Features</h1>
            <div className='flex flex-col gap-5 lg:px-[30px]'>
              {item.features.map( ( feature ) => (
                <div className='flex gap-2 items-start w-full rounded-md border border-white-95 p-3 lg:px-[30px]'>
                  {feature.available === "true" ? <img src="assets/icons/available.svg" alt="avaialble" /> : <img src="assets/icons/not-available.svg" alt="not-avaialble" />}
                  <p className='text-sm font-normal text-gray-30'>{feature.feature}</p>
                </div>
              ) )}
            </div>
          </div>
          <Button text="Get Started" variation='primary' size="large" className="-mt-[30px] rounded-t-none" />
        </div>
    </>
  )
}

export default PriceCard
