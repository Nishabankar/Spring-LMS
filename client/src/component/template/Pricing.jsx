import React from 'react'
import HeadingText from '../molecules/HeadingText'
import PriceCard from '../molecules/PriceCard'
import HeadingWithTwoCTA from '../molecules/HeadingWithTwoCTA';

const Pricing = () => {

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

  return (
     <>
      <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>
        <HeadingWithTwoCTA heading="Our Pricing" subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." />
        <div className='card-container bg-absolute-white flex flex-col lg:flex-row gap-[30px] w-full lg:p-6 lg:pt-10 2xl:p-[30px] 2xl:pt-[50px] rounded-xl  '>
          {plans.yearly.map( ( item, index ) => (
            <PriceCard key={index} item={item}/>
          ) )}
        </div>
      </div>
    </>
  )
}

export default Pricing
