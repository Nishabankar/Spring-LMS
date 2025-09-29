import React from 'react'

const Button = ( { text, variation = "primary" , size="small"} ) => {
    const btn_classes = {
        primary:
            "bg-orange-50 py-3 px-8 text-[18px] text-absolute-white",
        secondary:
            "",
        link: "py-3 px-6 hover:bg-white-95",
    };

     const btn_sizes = {
        small:
            "",
        medium:
            "",
        large: "",
    };




    return (
        <button className={`${ btn_classes[ variation ] } ${btn_sizes[size]} rounded-lg capitalize`}>
            {text}
        </button>
    )
}

export default Button
