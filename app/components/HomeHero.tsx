import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = () => {
  return (
    <section className=" max-w-4xl mx-auto flex md:flex-row flex-col mt-16 ">
      {/* left start here */}

      <div className="p-5 max-w-lg  ">
        <h1>I am a Full Stack developer</h1>
        <p>
        Highly skilled and motivated full stack developer with 2 years of experience in designing and developing dynamic and responsive web applications. Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Typescript, Solidity and Python. Strong problem-solving abilities and a passion for delivering high-quality, user-friendly solutions. Excellent teamwork and communication skills, able to collaborate effectively with cross-functional teams to meet project goals and deadlines.
        </p>

        {/* <button className="bg-gradient-to-b to-cyan-500 from-blue-500  py-2 px-4 rounded-lg">
          Profile-u
        </button>
        <button className="bg-gradient-to-b from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile-b
        </button> */}
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div>
        <img
          src="https://resume-template-gamma.vercel.app/images/car3.webp"
          className="md:w-full w-1/2 mx-auto"
        />
      </div>
      {/* right ends */}
    </section>
  );
};