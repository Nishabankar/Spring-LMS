import React, { useState, useEffect } from 'react'
import PriceCard from '../molecules/PriceCard'
import Button from '../atoms/Button';
import axios from "axios";

const Pricing = ({ showHeader = true, noTopMargin = false }) => {

  const [plans, setPlans] = useState({ monthly: [], yearly: [] });
  const [planType, setPlanType] = useState("monthly");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/pricing");
        console.log("PRICING API RESPONSE:", res.data);

        const response = res.data;

        if (Array.isArray(response)) {
          setPlans({
            monthly: response,
            yearly: response
          });
        }
        else if (response.monthly && response.yearly) {
          setPlans(response);
        }
        else if (response.plans) {
          setPlans(response.plans);
        }
        else {
          setPlans({ monthly: [], yearly: [] });
        }

      } catch (error) {
        console.log("Error fetching pricing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const handleClick = (type) => setPlanType(type);

  return (
    <>
      <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>

        <div
          className={`flex flex-col gap-5 ${showHeader ? 'lg:flex-row lg:items-end justify-between' : 'items-center justify-center'}
          w-full max-w-[1595px] mx-auto ${noTopMargin ? 'mt-0' : 'mt-12 lg:mt-24 xl:mt-36'}`}
        >
          {showHeader && (
            <div className='flex flex-col items-start gap-1 w-full lg:max-w-[933px]'>
              <h3 className='text-[28px] font-semibold text-gray-15 lg:text-[38px] xl:text-5xl'>Our Pricing</h3>
              <p className='text-sm text-gray-35 lg:text-base xl:text-lg'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
          )}

          <div className='flex justify-center bg-absolute-white p-3 rounded-lg max-w-[400px] mx-auto'>
            <Button text="Monthly" variation={planType === "monthly" ? "primary" : "secondary"} size='medium' onClick={() => handleClick("monthly")} />
            <Button text="Yearly" variation={planType === "yearly" ? "primary" : "secondary"} size='medium' onClick={() => handleClick("yearly")} />
          </div>
        </div>

        <div className='card-container bg-absolute-white flex flex-col lg:flex-row gap-[30px] w-full lg:p-6 lg:pt-10 rounded-xl'>
          {loading && <p className='text-gray-500 text-lg text-center w-full'>Loading pricing...</p>}

          {!loading &&
            plans[planType] &&
            plans[planType].length > 0 &&
            plans[planType].map((item, index) => (
              <PriceCard key={index} item={item} type={planType} />
            ))}
        </div>

      </div>
    </>
  )
}

export default Pricing;
