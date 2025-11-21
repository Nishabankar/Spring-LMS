import React, { useEffect, useState } from 'react';
// import TestimonialCards from '../component/molecules/TestimonialCards';
// import HeadingText from '../component/molecules/HeadingText';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import HeadingText from '../component/molecules/HeadingText';
import TestimonialCards from '../component/molecules/TestimonialCards';

const TestimonialsPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/testimonials");
                setData(res.data);
            } catch (error) {
                console.log("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20 mt-10'>

            <HeadingText
                heading="All Testimonials"
                subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                BtnText="Back"
                onClick={() => navigate(-1)}
            />

            {loading && (
                <p className='text-gray-500 text-lg text-center'>Loading testimonials...</p>
            )}

            {!loading && data.length === 0 && (
                <p className='text-gray-500 text-lg text-center'>No testimonials found</p>
            )}

            <div className='card-container flex flex-col lg:flex-row gap-5 2xl:gap-[30px] w-full flex-wrap justify-center items-center lg:items-stretch'>
                {!loading && data.map((item, index) => (
                    <TestimonialCards key={index} item={item} index={index} />
                ))}
            </div>

        </div>
    );
};

export default TestimonialsPage;
