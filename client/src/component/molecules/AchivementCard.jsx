import React from 'react'

const AchivementCard = ( { item } ) => {
    console.log( item );

    return (
        <>
            <div className='bg-absolute-white rounded-[10px] p-[30px] lg:p-10 2xl:p-[50px] w-full lg:max-w-[calc((100%-20px)/2)] 2xl:max-w-[calc((100%-30px)/2)]'>
                <div className='flex flex-col gap-6 2xl:gap-[30px]'>
                    <div>
                        <img src={item.icon_image} />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <h3 className='text-lg font-medium text-gray-15 lg:text-xl 2xl:text-2xl'>{item.title}</h3>
                        <p className='text-sm font-normal text-gray-35 lg:text-base 2xl:text-lg'>{item.description}</p>
                    </div>
                </div>

            </div>
        </>




    )
}

export default AchivementCard
