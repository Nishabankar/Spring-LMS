import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BenifitsCards from "../component/molecules/BenifitsCards";
import HeadingText from "../component/molecules/HeadingText";

const BenefitsPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/benefits");
        setData(res.data);
      } catch (error) {
        console.log("Error fetching benefits:", error);
      }
    };
    fetchBenefits();
  }, []);

  return (
    <div className="benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20 mt-10">

      <HeadingText
        heading="All Benefits"
        subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        BtnText="Back"
        onClick={() => navigate(-1)}
      />

      <div className="card-container flex flex-col lg:flex-row gap-5 flex-wrap justify-center items-center lg:items-stretch w-full">
        {data.map((item, index) => (
          <BenifitsCards key={index} item={item} index={index + 1} />
        ))}
      </div>

    </div>
  );
};

export default BenefitsPage;
