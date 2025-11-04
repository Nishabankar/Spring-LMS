import React from 'react'
import Heading from '../component/molecules/Heading'
import AchivementCard from '../component/molecules/AchivementCard';
import OurGoalsCard from '../component/molecules/OurGolasCard';
import Button from '../component/atoms/Button';


const AboutUs = () => {
  const Achievements_data = [
    {
      icon_image: "assets/icons/Icon-1.svg",
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },

    {
      icon_image: "assets/icons/Icon-2.svg",
      title: "Award-Winning Courses",
      description: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon_image: "assets/icons/Icon-3.svg",
      title: "Positive Student Feedback",
      description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
    },
    {
      icon_image: "assets/icons/Icon-4.svg",
      title: "Industry Partnerships",
      description: " We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
    },

  ];


  const OurGoals_data = [
    {
      icon_image: "assets/icons/Icon-5.svg",
      title: "Provide Practical Skills",
      description: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon_image: "assets/icons/Icon-6.svg",
      title: "Foster Creative Problem-Solving",
      description: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },

    {
      icon_image: "assets/icons/Icon-7.svg",
      title: "Promote Collaboration and Community",
      description: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },

    {
      icon_image: "assets/icons/Icon-8.svg",
      title: "Stay Ahead of the Curve",
      description: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];


  return (
    <div>
      <Heading heading='About Skillbridge' subheading='Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.' />

      <div className='flex flex-col gap-[50px] lg:gap-[60px] 2xl:gap-20'>
        <div className='flex flex-col gap-[6px]' >
          <h1 className='text-2xl font-medium text-gray-20 lg:text-3xl 2xl:text-5xl'>Achievements</h1>
          <p className='text-sm font-normal text-gray-35 lg:text-base 2xl:text-lg'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
        </div>

        <div className=' card-container flex flex-col gap-5  lg:flex-row 2xl:gap-[30px] w-full flex-wrap justify-center items-center lg:items-stretch '>
          {Achievements_data.map( ( item, index ) => (
            <AchivementCard key={index} item={item} />
          ) )}
        </div>

        <div className='flex flex-col gap-[6px]' >
          <h1 className='text-2xl font-medium text-gray-20 lg:text-3xl 2xl:text-5xl'>Our Goals</h1>
          <p className='text-sm font-normal text-gray-35 lg:text-base 2xl:text-lg'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to</p>
        </div>

        <div className=' card-container flex flex-col gap-5  lg:flex-row 2xl:gap-[30px] w-full flex-wrap justify-center items-center lg:items-stretch '>
          {OurGoals_data.map( ( item, index ) => (
            <OurGoalsCard key={index} item={item} />
          ) )}
        </div>

        <div className='bg-absolute-white flex flex-col gap-10 lg:flex-row justify-between lg:items-center 2xl:flex-row 2xl:justify-between 2xl:items-center rounded-[10px] p-[30px]  lg:p-[60px] 2xl:rounded-xl 2xl:p-20   '>
          <div className='flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5'>
            <h1 className='text-[28px] font-semibold leading-[120%] lg:text-[38px] 2xl:text-5xl'> <span className='text-orange-50'>Together</span>, let's shape the future of digital innovation</h1>
            <p className='text-sm font-normal text-gray-30 leading-[150%] lg:text-base 2xl:text-lg'>Join us on this exciting learning journey and unlock your potential in design and development.</p>
          </div>
          <button className='bg-orange-50 py-[14px] px-5 rounded-md 2xl:py-[18px] 2xl:px-6 2xl:rounded-lg
                               w-[140px] h-[48px]
                               lg:w-[160px] lg:h-[52px]
                               2xl:w-[180px] 2xl:h-[60px]'>
            <p className='text-base font-semibold text-absolute-white lg:text-lg'>Join Now</p>
          </button>

        </div>


      </div>
    </div>

  )
}

export default AboutUs
