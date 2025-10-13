import React from 'react';

const CourseDetailsCard = ( { courseData } ) => {


  return (
    <div className='flex flex-col gap-4 lg:gap-5 2xl:gap-[30px] w-full lg:flex-row lg:flex-wrap'>
      {courseData.map( ( course, courseIndex ) => (
        <div
          key={courseIndex}
          className='w-full flex flex-col gap-[30px] bg-absolute-white p-[30px] rounded-[10px] lg:p-10 lg:gap-10 2xl:p-[50px] 2xl:gap-[50px] lg:max-w-[calc((100%-20px)/2)] 2xl:max-w-[calc((100%-30px)/2)]'
        >
          {/* Course Number */}
          <div className='flex justify-end'>
            <h1 className='text-[50px] lg:text-6xl 2xl:text-[80px] font-bold text-gray-15'>
              0{courseIndex + 1}
            </h1>
          </div>

          {/* Course Title */}
          <div>
            <h2 className='text-lg lg:text-lg 2xl:text-2xl font-semibold text-gray-20'>
              {course.title}
            </h2>
          </div>

          {/* Lessons */}
          {course.lessons.map( ( lesson, index ) => {
            return (
              <div
                key={index}
                className={`group p-6 flex flex-col gap-4 lg:flex-row lg:py-5 lg:px-6
                  2xl:py-6 2xl:px-[30px] rounded-md cursor-pointer transition-all duration-200 border border-white-95 hover:border-orange-80`}
              >
                <div className='w-full flex flex-col gap-6 lg:flex-row lg:justify-between'>
                  {/* Lesson Info */}
                  <div className='flex flex-col gap-[2px] 2xl:gap-[6px]'>
                    <p className='text-base font-medium text-gray-20'>
                      {lesson.name}
                    </p>
                    <p className='text-sm font-normal 2xl:text-lg capitalize text-gray-35'>
                      lesson:0{index + 1}
                    </p>
                  </div>

                  {/* Duration Box */}
                  <div
                    className={` w-0 w-fit h-10 2xl:h-12 p-[10px] 2xl:py-3 2xl:px-[14px] rounded-md flex items-center justify-center gap-1 lg:min-w-max transition-all duration-200 bg-white-97  group-hover:bg-orange-80`}>
                    <img
                      src={lesson.icon}
                      alt=''
                      className='w-5 h-5 2xl:w-6 2xl:h-6'
                    />
                    <p className='text-sm font-normal'>{lesson.duration}</p>
                  </div>
                </div>
              </div>
            );
          } )}
        </div>
      ) )}
    </div>
  );
};

export default CourseDetailsCard;
