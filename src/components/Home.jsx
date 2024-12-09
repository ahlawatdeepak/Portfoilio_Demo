import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src="https://avatars.githubusercontent.com/u/103956638?v=4"
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white" >
          Hi 👋, I am Deepak Ahlawat
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A software engineer, specializing in the development of efficient full-stack applications crafting the frontend and backend components that contribute to the overall success of the product 🚀.
          </p>

          <div className="portfolio-btn">
            <a
              href="https://drive.google.com/file/d/1YBDQ1vjDwbABJy5Zbl-a5iHiGcsVlBK1/view?usp=sharing"
              smooth
              download= "true"
              duration={500}
              className="group text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" style={{fontSize:'120%'}}
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div className="big-screen">
          <img
            src="https://avatars.githubusercontent.com/u/103956638?v=4"
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
