import React, { useState, useEffect } from 'react';
// import FAQCard from '../molecules/FAQCard';
// import HeadingText from '../molecules/HeadingText';
import axios from "axios";
import { useNavigate } from "react-router-dom";   // ⭐ Add this
import HeadingText from '../component/molecules/HeadingText';
import FAQCard from '../component/molecules/FAQCard';

const FAQ = () => {

    const [faqdata, setFaqdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(0);

    const navigate = useNavigate();   // ⭐ Add this

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/faqs");
                setFaqdata(res.data);
            } catch (error) {
                console.log("Error fetching FAQs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 bg-absolute-white p-6 rounded-xl lg:flex-row mt-12 w-full lg:gap-20 lg:p-20 items-start'>

            <HeadingText
                heading="Frequently Asked Questions"
                subheading="Still have questions? Contact our Team via support@skillbridge.com"
                BtnText="See All FAQ’s"
                isFAQ={true}
                onClick={() => navigate("/faqs")}
            />

            <div className='card-container flex flex-col gap-5 w-full justify-center items-center lg:max-w-[60%]'>

                {loading && (
                    <p className="text-gray-500 text-lg">Loading FAQs...</p>
                )}

                {!loading && faqdata.length > 0 && faqdata.map((item, index) => (
                    <FAQCard
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}

            </div>

        </div>
    );
};

export default FAQ;
