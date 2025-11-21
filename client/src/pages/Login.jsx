import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../component/atoms/Button";
import TestimonialCards from "../component/molecules/TestimonialCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Heading from "../component/molecules/Heading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";




const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  useContext( AuthContext );



 const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      const user = res.data.user; // backend user object
      const token = res.data.token;

      // ⭐ Save token + user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Login successful!");

      // ⭐ Redirect based on role
      if (user.isAdmin === true) {
        navigate("/dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage("Invalid email or password!");
    }
  };


  const data = [
    {
      description:
        "The web design course provided a solid foundation for me...",
      user_image: "assets/images/Sarah L.png",
      user_name: "Sarah L",
    },
    {
      description:
        "The UI/UX design course exceeded my expectations...",
      user_image: "assets/images/Jason M.png",
      user_name: "Jason M",
    },
    {
      description:
        "The mobile app development course was fantastic...",
      user_image: "assets/images/Emily R.png",
      user_name: "Emily R",
    },
    {
      description:
        "I enrolled in the graphic design course as a beginner...",
      user_image: "assets/images/Michael K.png",
      user_name: "Michael K",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full flex justify-center items-center bg-transparent max-w-[1597px] mx-auto mt-[50px]">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full gap-[50px] lg:gap-20 2xl:gap-[100px] ">
        {/* ---------------- LOGIN FORM SECTION ---------------- */}
        <div className="w-full lg:max-w-[calc(((100%-80px)/2)-60px)] 2xl:max-w-[calc(((100%-100px)/2)-85px)]  bg-absolute-white p-6 lg:p-10 2xl:p-[60px] rounded-2xl shadow-sm">
          <div className="flex flex-col gap-8 2xl:gap-[50px]">
            <div className="flex flex-col items-center text-center gap-2">
              <h1 className="text-[28px] font-semibold text-gray-15 lg:text-[38px] 2xl:text-[44px]">
                Login
              </h1>
              <p className="text-sm font-normal text-gray-30 lg:text-base 2xl:text-lg">
                Welcome back! Please log in to access your account.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleLogin}>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg">
                  Email
                </label>
                <div className="bg-white-99 border border-white-95 rounded-lg p-5 2xl:p-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-full text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-15 lg:text-base 2xl:text-lg">
                  Password
                </label>
                <div className="bg-white-99 border border-white-95 rounded-lg p-5 2xl:p-6 flex items-center justify-between gap-3">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="w-full text-sm font-normal text-gray-40 lg:text-base 2xl:text-lg outline-none bg-transparent"
                    required
                  />
                  <button type="button">
                    <img src="assets/icons/Eye-icon.svg" alt="show/hide" />
                  </button>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-sm font-normal text-gray-30 lg:text-base 2xl:text-lg"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Message */}
              {message && (
                <p className="text-center text-sm font-medium text-gray-15">
                  {message}
                </p>
              )}

              {/* Submit Button */}
              <Button text="Login" variation="primary" size="large" type="submit" />

              {/* OR */}
              <div className="flex justify-center">
                <img src="assets/icons/OR-icon.svg" alt="" />
              </div>

              <Button
                text="Login with Google"
                variation="primary_gray"
                size="large"
                icon="assets/icons/google-icon.svg"
                iconPosition="left"
                textClassName="text-gray-15 font-medium text-sm 2xl:text-lg"
              />

              {/* Signup Link */}
              <div className="flex justify-center items-center gap-1">
                <p className="text-sm font-normal text-gray-15 lg:text-base 2xl:text-lg">
                  Don’t have an account?{" "}
                  <span className="font-medium underline decoration-solid">
                    SignUp
                  </span>
                </p>
                <img src="assets/icons/arrow-icon.svg" alt="" />
              </div>
            </form>
          </div>
        </div>

        {/* ---------------- TESTIMONIAL SECTION ---------------- */}
        <div className="w-full lg:max-w-[calc(((100%-80px)/2)+60px)]  2xl:max-w-[calc(((100%-100px)/2)+85px)] flex flex-col items-start justify-center gap-10 lg:gap-[60px] 2xl:gap-20">
          <Heading
            heading="Students Testimonials"
            subheading="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
            className="!flex !flex-col !items-start !justify-start !gap-1 lg:!gap-1 2xl:!gap-[6px]"
            showUnderline={false}
            showPadding={false}
            showMargin={false}
          />

          <div className="flex flex-col gap-5 lg:gap-6 2xl:gap-[30px] w-full ">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop
              onSwiper={setSwiperInstance}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="w-full xl:max-w-full 2xl:max-w-full"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      <TestimonialCards
                        item={item}
                        index={index}
                        className="lg:max-w-full 2xl:!max-w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center lg:justify-end gap-4 w-full">
              <button
                ref={prevRef}
                className="w-12 h-12 rounded-lg bg-absolute-white border border-white-95 flex justify-center items-center shadow-md hover:bg-white-95"
              >
                <img src="assets/icons/arrow-left.svg" alt="Previous" />
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 rounded-lg bg-absolute-white border border-white-95 flex justify-center items-center shadow-md hover:bg-white-95"
              >
                <img src="assets/icons/arrow-right.svg" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
