import React from 'react'

const Button = ( { text, variation = "secondary", size = "small" } ) => {
    const btn_classes = {
        primary:
            "bg-orange-50 py-3 px-8 text-[18px] text-absolute-white",
        secondary:
            "bg-absolute-white py-4 px-6  text-[18px] text-gray-15 border border-white-95",

        link: "py-3 px-6 hover:bg-white-95",

        icon: " w-[54px] h-[54px] p-4  xl:w-[74px] xl:h-[74px] xl:p-5 border border-white-95"
    };

    const btn_sizes = {
        small:
            "max-w-[117px] max-h-[55px]",
        medium:
            "max-w-[195px] max-h-[63px]",
        large:
            "w-auto max-h-[63px]",
    };




    return (
        <button className={`${ btn_classes[ variation ] } ${ btn_sizes[ size ] } rounded-lg capitalize w-full h-full`}>
            {variation === "icon" ? (
                <img src="/assets/icons/link-icon.svg" alt={`${ variation }`} className='w-[26px] h-[26px] xl:w[34px] xl:h[34px]' />
            ) : (
                text
            )}
        </button>
    )
}

export default Button
