import React, { useEffect, useState } from 'react'
import HeadingText from '../molecules/HeadingText'
import BenifitsCards from '../molecules/BenifitsCards'

const Benifits = () => {

  const data = [
    {
      id: 1,
      title: " Flexible Learning Schedule",
      description: " Fit your coursework around your existing commitments and obligations.",
    },
    {
      id: 2,
      title: "Expert Instruction",
      description: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: 3,
      title: "Diverse Course Offerings",
      description: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: 4,
      title: "Updated Curriculum",
      description: " Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: 5,
      title: "Practical Projects and Assignments",
      description: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: 6,
      title: "Interactive Learning Environment",
      description: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

  const [ visibleCards, setVisibleCards ] = useState( data );

  useEffect( () => {
    const handleResize = () => {
      const width = window.innerWidth;
      if ( width < 768 ) {
        setVisibleCards( data.slice( 0, 4 ) );
      } else if ( width >= 768 && width < 1024 ) {
        setVisibleCards( data.slice( 0, 4 ) );
      } else {
        setVisibleCards( data );
      }
    };
    handleResize();
    window.addEventListener( "resize", handleResize );

    return () => window.removeEventListener( "resize", handleResize );
  }, [] );

  return (
    <>
      <div className='benifit-container max-w-[1597px] mx-auto flex flex-col gap-10 lg:gap-[60px] xl:gap-20'>
        <HeadingText heading="Benifits" subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." />
        <div className='card-container flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center items-center lg:items-stretch '>
          {visibleCards.map( ( item, index ) => (
            <BenifitsCards key={index} item={item} index={index+1} />
          ) )}
        </div>
      </div>
    </>
  )
}

export default Benifits
