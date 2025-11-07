import React from 'react'
import TestimonialCards from '../molecules/TestimonialCards';
import HeadingText from '../molecules/HeadingText';

const Testimonial = ( { showHeader = true } ) => {
    const data = [
        {
            description: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            user_image: "assets/images/Sarah L.png",
            user_name: "Sarah L",
        },
        {
            description: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
            user_image: "assets/images/Jason M.png",
            user_name: "Jason M",
        },
        {
            description: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
            user_image: "assets/images/Emily R.png",
            user_name: "Emily R",
        },
        {
            description: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
            user_image: "assets/images/Michael K.png",
            user_name: "Michael K"
        },
    ];

    return (
        <>
            <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>
                {showHeader && (
                    <HeadingText heading="Our Testimonials" subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." />
                )}

                <div className='card-container flex flex-col lg:flex-row gap-5 2xl:gap-[30px] w-full flex-wrap justify-center items-center lg:items-stretch '>
                    {data.map( ( item, index ) => (
                        <TestimonialCards key={index} item={item} index={index} />
                    ) )}
                </div>
            </div>
        </>
    )
}

export default Testimonial
