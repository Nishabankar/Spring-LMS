import React from 'react'

const ContactCard = ( { item, index } ) => {
    return (
        <div className='bg-white-99 border border-white-95 rounded-md p-[30px] flex flex-col justify-center items-center gap-[14px] 2xl:gap-5'
            key={index}>
            {item.icon_path && (
                <img src={item.icon_path} alt="icon" />
            )}
            {item.icon_paths && (
                <div className='flex flex-row gap-[10px]'>
                    {item.icon_paths.map( ( icon, i ) => (
                        <img key={i} src={icon} alt={`social-${ i }`} />
                    ) )}
                </div>
            )}
            <p className='text-sm font-normal text-gray-30 lg:text-base 2xl:text-lg'>{item.text}</p>
        </div>
    )
}
export default ContactCard
