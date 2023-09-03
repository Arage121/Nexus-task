"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const Second = (props: Props) => {
  return (
    <>
      <div className="bg-[#3f2ca9] h-screen w-full text-white md:flex">
        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          transition={{
            ease: easeInOut,
            duration: 0.9,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className="md:w-[28.4%] md:mt-52 mt-24 sm:mt-36 ml-4 p-2 sm:p-0 md:ml-10 lg:ml-56"
        >
          <h1 className="xl:text-[50px] lg:mb-4 text-4xl">Fintech Solution</h1>
          <h3 className="md:text-[25px] text-xl text-gray-300/80 font-light tracking-wide">
            Transforming Fintech with AI
          </h3>

          <ul className="flex mt-8 text-[13px] font-sans font-light gap-2">
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Fraud detection
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Transaction categorisation
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Risk Scoring
            </li>
          </ul>

          <p className="mt-6 lg:text-[19px] text-sm font-sans font-light tracking-wide">
            Empower your financial institution with our advanced fintech
            solutions. From real-time fraud detection to easy bookkeeping, our
            software development services provide credit risk scoring for
            accurate lending eligibility, transaction categorization for
            seamless organization, and anomaly detection to safeguard your
            assets
          </p>

          <span className="w-full flex justify-center xl:justify-start">
            <button className="group mt-5 sm:mt-10 py-3 md:py-4 border text-sm sm:text-[16px] rounded-full px-8 flex hover:bg-white hover:text-black">
              See full case study
              <span className="mt-[6px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                <BsArrowRight />
              </span>
            </button>
          </span>
        </motion.div>

        <div className=" md:mt-44 md:ml-32 ml-16 mt-10">
          <img
            src="https://drive.google.com/uc?export=view&id=1XpWtGfG7cwOUIYEG58zuI5KfRssOhBiV"
            alt=""
            className="md:h-[600px] md:w-[600px] h-64 sm:h-80"
          />
        </div>
      </div>

      <div className="bg-[#01b5ab] h-screen w-full text-white md:flex">
        <div className="md:mt-60 sm:mt-40 mt-8 p-20 sm:p-0 sm:ml-4 md:ml-10 xl:ml-56">
          <img
            src="https://drive.google.com/uc?export=view&id=1ie-xSPmfP1Ga4vpUSnbS_xbUOoTVD_ti"
            alt="none"
            className="sm:w-66 md:h-80 lg:h-96 h-44"
          />
        </div>

        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          transition={{
            ease: easeInOut,
            duration: 0.9,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className="md:w-[28.4%] sm:mt-10 md:mt-56 md:ml-20 lg:ml-44 mt-[-36px] ml-4 p-3 sm:p-0 sm:mr-20"
        >
          <h1 className="xl:text-[50px] lg:mb-4 text-4xl">Industrial IoT</h1>
          <h3 className="md:text-[25px] text-xl text-gray-300/80 font-light tracking-wide">
            Providing a better connected experience
          </h3>

          <ul className="flex mt-8 text-[11.82px] sm:text-[13px] font-sans font-light gap-2">
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Connected Manufacturing
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Aviation
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Smart Building
            </li>
          </ul>

          <p className="mt-6 lg:text-[19px] text-sm font-sans font-light tracking-wide">
            Revolutionize your industry with our innovative IoT solutions. Our
            software development services offer connected manufacturing,
            pollution control, smart transportation, and intelligent farming,
            agriculture, and forestry. With our expertise, you can harness the
            power of technology to increase efficiency, reduce waste, and
            optimize operations for a sustainable future.
          </p>

          <span className="w-full flex justify-center xl:justify-start">
            <button className="group mt-5 sm:mt-10 py-3 md:py-4 text-sm sm:text-[16px] border rounded-full px-8 flex hover:bg-white hover:text-black">
              See full case study
              <span className="mt-[6px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                <BsArrowRight />
              </span>
            </button>
          </span>
        </motion.div>
      </div>

      <div className="bg-[#1b1a21] h-screen w-full text-white md:flex">
        <div className="md:mt-60 sm:mt-40 mt-10 p-20 sm:p-0 ml-4 sm:ml-8 xl:ml-56">
          <img
            src="https://drive.google.com/uc?export=view&id=1WssiTgGQBCOWE5x_SP72DAIXytTYAsxX"
            alt="none"
            className="sm:w-66 md:h-80 lg:h-96 lg:w-[34em] h-44 sm:h-60"
          />
        </div>

        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          transition={{
            ease: easeInOut,
            duration: 0.9,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className="md:w-[28.4%] sm:mt-10 md:mt-44 md:ml-20 lg:ml-44 mt-[-28px] ml-4 p-3 sm:p-0 sm:mr-20"
        >
          <h1 className="xl:text-[50px] lg:mb-4 text-4xl">Smart Education</h1>
          <h3 className="md:text-[25px] text-xl text-gray-300/80 font-light tracking-wide">
            Elevate your Education Institution
          </h3>

          <ul className="flex mt-8 text-[12.7px] sm:text-[13px] font-sans font-light gap-2">
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Learning Management
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Course Offering
            </li>
            <li className="rounded-full py-[6.5px] px-4 bg-white/10">
              Professional Training
            </li>
          </ul>

          <p className="mt-6 lg:text-[19px] text-sm font-sans font-light tracking-wide">
            Elevate your education institution with our comprehensive software
            solutions. Learning management, course offerings, professional
            training, certification, and school management tools to streamline
            your operations and enhance your students&apos; learning experience.
            Trust us to provide the cutting-edge technology and support you need
            to thrive in the ever-evolving education industry.
          </p>

          <span className="w-full flex justify-center xl:justify-start">
            <button className="group mt-5 sm:mt-6 lg:mt-10 py-3 md:py-4 text-sm sm:text-[16px] border rounded-full px-8 flex hover:bg-white hover:text-black">
              See full case study
              <span className="mt-[6px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                <BsArrowRight />
              </span>
            </button>
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Second;
