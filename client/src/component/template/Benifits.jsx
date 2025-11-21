import React, { useEffect, useState } from 'react'
import HeadingText from '../molecules/HeadingText'
import BenifitsCards from '../molecules/BenifitsCards'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Benifits = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  // Fetch benefits from backend
  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/benefits");
        setData(res.data); // backend returns an array
      } catch (error) {
        console.log("Error fetching benefits:", error);
      }
    };

    fetchBenefits();
  }, []);

  // Show limited cards on home page
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;

      // Show only 4 on home page for all screens except large desktop
      if (width < 1024) {
        setVisibleCards(data.slice(0, 6));
      } else {
        setVisibleCards(data.slice(0, 6)); // still 4 on home section
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, [data]);

  return (
    <>
      <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>

        <HeadingText
          heading="Benefits"
          subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          BtnText="View All"
          onClick={() => navigate(`/benefits`)}
        />

        <div className='card-container flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center items-center lg:items-stretch'>
          {visibleCards.map((item, index) => (
            <BenifitsCards key={index} item={item} index={index + 1} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Benifits;
