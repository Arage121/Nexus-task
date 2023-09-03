"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import jsonData from '../data/db1.json';

type Props = {};

type DataType = {
  id: number;
  imgLink: string;
  desc: string;
};

const Forth = (props: Props) => {
  const data:DataType[] = jsonData.data;

  return (
    <div className="w-full bg-[#1a1a20] text-white">
      <motion.div
        initial={{
          y: 300,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="text-center sm:mt-20 mt-10 sm:p-4 px-8 py-4"
      >
        <h1 className="xl:text-5xl text-3xl">Software for modern platforms</h1>
        <p className="sm:mt-6 mt-4 font-sans text-lg font-light text-gray-300/100">
          We develop applications for mobile, web, wearables, and TV.
        </p>

        <div className="xl:flex grid grid-cols-2 md:grid-cols-3 mt-2 md:mt-0 gap-14 p-10 ml-8 sm:ml-32 md:ml-44 lg:ml-30 xl:ml-0 sm:gap-14 xl:gap-32 md:py-40 justify-center align-middle items-center">
          {data?.map((item : any) => (
            <div key={item.id}>
              <motion.img
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                whileInView={{
                  height: 90,
                  opacity: 1,
                }}
                src={item.imgLink}
                alt="none"
                className="h-18 sm:h-18 md:h-24"
              />
              <p className="mt-4 text-left">{item.desc}</p>
            </div>
          ))}
        </div>

        <span className="w-full flex justify-center">
          <button className="group mt-10 mb-10 text-sm sm:text-[16px] py-3 md:py-4 b text-orange-500 rounded-full px-8 flex hover:bg-orange-500 hover:text-white">
            See our tech stack
            <span className="mt-[3px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
              <BsArrowRight />
            </span>
          </button>
        </span>
      </motion.div>
    </div>
  );
};

export default Forth;
