import React, { useState } from 'react'
import PriceCard from '../molecules/PriceCard'

import Button from '../atoms/Button';

const Pricing = ( { showHeader = true, noTopMargin = false } ) => {
  const plans = {
    monthly: [
      {
        name: "Free Plan",
        price: "$0",
        features: [
          { available: "true", feature: "Access to selected free courses." },
          { available: "true", feature: "Limited course materials and resources." },
          { available: "true", feature: "Basic community support." },
          { available: "true", feature: "No certification upon completion." },
          { available: "true", feature: "Ad-supported platform." },
          { available: "false", feature: "Ad-supported platform." },
          { available: "false", feature: "Early access to new courses and updates." },
        ],
      },
      {
        name: "Pro Plan",
        price: "$79",
        features: [
          { available: "true", feature: "Unlimited access to all courses." },
          { available: "true", feature: "Unlimited course materials and resources." },
          { available: "true", feature: "Priority support from instructors." },
          { available: "true", feature: "Course completion certificates." },
          { available: "true", feature: "Ad-free experience." },
          { available: "true", feature: "Access to exclusive Pro Plan community forums." },
          { available: "true", feature: "Early access to new courses and updates." },
        ],
      },
    ],

    yearly: [
      {
        name: "Basic plan",
        price: "$75",
        features: [
          { available: "true", feature: "Access to selected free courses." },
          { available: "true", feature: "Limited course materials and resources." },
          { available: "true", feature: "Basic community support." },
          { available: "true", feature: "No certification upon completion." },
          { available: "true", feature: "Ad-supported platform." },
          { available: "false", feature: "Ad-supported platform." },
          { available: "false", feature: "Early access to new courses and updates." },
        ],
      },
      {
        name: "Pro Plan",
        price: "$179",
        features: [
          { available: "true", feature: "Unlimited access to all courses." },
          { available: "true", feature: "Unlimited course materials and resources." },
          { available: "true", feature: "Priority support from instructors." },
          { available: "true", feature: "Course completion certificates." },
          { available: "true", feature: "Ad-free experience." },
          { available: "true", feature: "Access to exclusive Pro Plan community forums." },
          { available: "true", feature: "Early access to new courses and updates." },
        ],
      },
    ],
  };

  const [ planType, setPlanType ] = useState( "monthly" );
  const handleClick = ( type ) => {
    if ( type === "monthly" ) {
      setPlanType( "monthly" )
    }
    else if ( type === "yearly" ) {
      setPlanType( "yearly" )
    }
  }

  console.log( "planType: ", planType );

  return (
    <>
      <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>
        <div className={`flex flex-col gap-5 ${ showHeader ? 'lg:flex-row lg:items-end justify-between' : 'items-center justify-center'
          } w-full max-w-[1595px] mx-auto ${ noTopMargin ? 'mt-0' : 'mt-12 lg:mt-24 xl:mt-36'
          }`}
        >
          {showHeader && (   // 👈 only show if true

            <div className='flex  flex-col items-start justify-start gap-1 w-full lg:max-w-[933px] '>
              <h3 className='text-[28px] font-semibold tracking-normal text-gray-15 lg:text-[38px] xl:text-5xl'>"Our Pricing"</h3>
              <p className='text-sm  font-normal tracking-normal text-gray-35 lg:text-base xl:text-lg'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
          )}


          <div className='flex justify-center  lg:mx-0 bg-absolute-white p-3 rounded-lg max-w-[400px] mx-auto'>
            <Button text="Monthly" variation={planType === "monthly" ? "primary" : "secondary"} size='medium' onClick={() => handleClick( "monthly" )} />
            <Button text="Yearly" variation={planType === "yearly" ? "primary" : "secondary"} size='medium' onClick={() => handleClick( "yearly" )} />

          </div>
        </div>
        <div className='card-container bg-absolute-white flex flex-col lg:flex-row gap-[30px] w-full lg:p-6 lg:pt-10 2xl:p-[30px] 2xl:pt-[50px] rounded-xl  '>
          {plans[ planType ].map( ( item, index ) => (
            <PriceCard key={index} item={item} type={planType} />
          ) )}
        </div>
      </div>
    </>
  )
}

export default Pricing
