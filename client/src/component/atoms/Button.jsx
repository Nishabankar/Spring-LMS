import React from 'react'

const Button = ( { text, variation = "secondary", size = "small" } ) => {
    const btn_classes = {
        primary:
            "bg-orange-50 py-3 px-8 text-absolute-white",
        secondary:
            "bg-absolute-white py-4 px-6 text-gray-15 border border-white-95",

        link: "py-3 px-6 hover:bg-white-95",

        icon: "max-w-[54px] max-h-[54px] p-4 xl:max-w-[74px] xl:max-h-[74px] xl:p-5 border border-white-95 bg-white-99",

        primary_gray:"bg-white-97 py-3 border border-white-95",
    };

    const btn_sizes = {
        small:
            "max-w-[117px] max-h-[55px]",
        medium:
            "max-w-fit max-h-[63px]",
        large:
            "w-full max-h-[63px]",
    };




    return (
        <button className={`${ btn_classes[ variation ] } ${ btn_sizes[ size ] } rounded-lg capitalize  flex items-center justify-center font-medium`}>
            {variation === "icon" ? (
                <img src="/assets/icons/link-icon.svg" alt={`${ variation }`} className='w-[26px] h-[26px] xl:w-[34px] xl:h-[34px]' />
            ) : (
                text
            )}
        </button>
    )
}

export default Button
