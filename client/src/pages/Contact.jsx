import React from 'react'
import Heading from '../component/molecules/Heading'
import Button from '../component/atoms/Button'
import ContactCard from '../component/molecules/contactCard';

const Contact = () => {

    const data = [
        {
            icon_path: "assets/icons/support-icon.svg",
            text: "support@skillbridge.com",
        },
        {
            icon_path: "assets/icons/call-icon.svg",
            text: "+91 00000 00000",
        },
        {
            icon_path: "assets/icons/contact-location-icon.svg",
            text: "Some Where in the World",
        },
        {
            icon_paths: [
                "assets/icons/contact-facebook-icon.svg",
                "assets/icons/contact-twitter-icon.svg",
                "assets/icons/contact-linkdin-icon.svg",
            ],
            text: "Social Profiles",
        }
    ];

    return (
        <>
           <div>
                <Heading
                    heading="Contact Us"
                    subheading="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
                />
            </div>
            <div className='bg-absolute-white p-[30px] flex flex-col gap-[30px]
                            lg:flex-row lg:p-[60px] lg:gap-10 2xl:p-20 2xl:gap-[50px]
                            rounded-[10px] mx-auto'>
                <div className='flex flex-col gap-[30px] flex-1 items-center'>
                    <form action="" className="w-full">
                        <div className='flex flex-col gap-5'>
                            <div className='lg:flex flex-row lg:gap-6 2xl:gap-[30px]'>
                                <div className='flex flex-col gap-3 flex-1'>
                                    <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                        First Name
                                    </label>
                                    <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                        <input
                                            type="text"
                                            name='first_name'
                                            placeholder='Enter First Name'
                                            className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg w-full'
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-3 flex-1'>
                                    <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                        Last Name
                                    </label>
                                    <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                        <input
                                            type="text"
                                            name='last_name'
                                            placeholder='Enter Last Name'
                                            className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:flex flex-row lg:gap-6 2xl:gap-[30px]'>
                                <div className='flex flex-col gap-3 flex-1'>
                                    <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                        Email
                                    </label>
                                    <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='Enter your Email'
                                            className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg w-full'
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-3 flex-1'>
                                    <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                        Phone
                                    </label>
                                    <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                        <input
                                            type="tel"
                                            name='phone'
                                            placeholder='Enter your Phone'
                                            className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg w-full'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                    Subject
                                </label>
                                <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                    <input
                                        type="text"
                                        name='subject'
                                        placeholder='Enter your Subject'
                                        className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg w-full'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <label className='text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg'>
                                    Message
                                </label>
                                <div className='bg-white-99 border border-white-95 p-5 rounded-md 2xl:py-6 px-5 2xl:rounded-lg'>
                                    <textarea
                                        name="message"
                                        placeholder="Enter your Message here.."
                                        className='text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg resize-none w-full'
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>

                        </div>
                    </form>
                    <div className="w-full lg:w-[250px] flex justify-center">
                        <Button text='Send Your Message' variation='primary' size='large' />
                    </div>
                </div>

                <div className='border-t border-white-95 pt-[30px]
                                lg:border-t-0 lg:border-l lg:border-white-95 lg:pl-[50px]
                                flex flex-col gap-5 lg:gap-6 2xl:gap-[50px]'>
                    {data.map((item, index) => (
                        <ContactCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contact
