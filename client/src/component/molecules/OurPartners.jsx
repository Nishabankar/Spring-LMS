import React, { useEffect, useState } from 'react'
import './OurPartners.css'

const OurPartners = () => {

  const image_path = [ "assets/icons/Logo-1.svg", "assets/icons/Logo-2.svg", "assets/icons/Logo-3.svg", "assets/icons/Logo-4.svg", "assets/icons/Logo-5.svg", "assets/icons/Logo-6.svg", "assets/icons/Logo-7.svg" ];

  const [ visibleImages, setVisibleImages ] = useState( 7 );

  useEffect( () => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if ( width < 640 ) setVisibleImages( 3 );
      else if ( width < 1024 ) setVisibleImages( 4 );
      else setVisibleImages( 7 );                     
    };

    updateVisible();
    window.addEventListener( 'resize', updateVisible );
    return () => window.removeEventListener( 'resize', updateVisible );
  }, [] );

  return (
    <div className="image-container p-2 lg:p-6 xl:p-7 my-7 lg:my-20 xl:my-24 flex border border-white-99 bg-white-99 rounded-xl max-w-[1595px] mx-auto">
      {image_path.slice( 0, visibleImages ).map( ( path, index ) => (
        <div key={index} className=' w-full py-5 lg:py-6 xl:py-7 border-r border-white-90 flex items-center justify-center '>
          <img src={path} alt={index} />
        </div>
      ) )}
    </div>

  )
}

export default OurPartners
