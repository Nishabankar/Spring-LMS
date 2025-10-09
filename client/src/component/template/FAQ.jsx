import React, { useState } from 'react'
import FAQCard from '../molecules/FAQCard'
import HeadingText from '../molecules/HeadingText'

const FAQ = () => {
    const faqdata = [
        {
            question: "Can I enroll in multiple courses at once?",
            answer:
                "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
            icon_path: "assets/icons/plus-icon.svg",
            buttonText: "Enrollment Process for Different Courses",
            link: "#",
        },
        {
            question: "What kind of support can I expect from instructors?",
            answer:
                "Our instructors provide dedicated support through Q&A sessions, live chats, and community discussions.",
            icon_path: "assets/icons/plus-icon.svg",
            buttonText: "Enrollment Process for Different Courses",
            link: "#",

        },
        {
            question: "Are the courses self-paced or do they have specific start and end dates?",
            answer:
                "Most of our courses are self-paced, allowing you to learn at your own speed.",
            icon_path: "assets/icons/plus-icon.svg",
            buttonText: "Enrollment Process for Different Courses",
            link: "#",

        },
        {
            question: "Are there any prerequisites for the courses?",
            answer:
                "Some advanced courses may require prior knowledge, but beginner-friendly options are also available.",
            icon_path: "assets/icons/plus-icon.svg",
            buttonText: "Enrollment Process for Different Courses",
            link: "#",

        },
        {
            question: "Can I download the course materials for offline access?",
            answer:
                "Yes, most of our courses allow you to download resources for offline viewing.",
            icon_path: "assets/icons/plus-icon.svg",
            buttonText: "Enrollment Process for Different Courses",
            link: "#",
        },
    ]

    const [ openIndex, setOpenIndex ] = useState( 0 );

    const handleToggle = ( index ) => {
        setOpenIndex( openIndex === index ? null : index ); // close if same clicked
    }

    return (
        <>
            <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10  bg-absolute-white p-6 rounded-xl lg:flex-row mt-12  w-full lg:gap-20 lg:p-20 lg:justify-start items-start'>
                <HeadingText heading="Frequently Asked Questions" subheading="Still you have any questions? Contact our Team via support@skillbridge.com" BtnText='See All FAQ’s' isFAQ={true} />

                <div className='card-container flex flex-col  gap-5 w-full  justify-center items-center lg:max-w-[60%]  '>
                    {faqdata.map( ( item, index ) => (
                        <FAQCard
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle( index )} />
                    ) )}
                </div>
            </div>
        </>
    )
}

export default FAQ
