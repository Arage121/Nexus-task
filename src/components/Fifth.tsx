"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import jsonData from "../data/db2.json";

type Props = {};

type DataType = {
  id: number;
  imgLink: string;
  desc: string;
};

const Fifth = (props: Props) => {
  const data: DataType[] = jsonData.data;
  return (
    <div className="w-full bg-[#22252b] text-white">
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
        className="text-center  sm:mt-20 mt-10 sm:p-4 px-8 py-4"
      >
        <h1 className="xl:text-5xl text-3xl">Only Dedicated teams</h1>
        <p className="mt-6 font-sans text-md font-light text-gray-300/100">
          Our team is 100% concentrated on your project and you have full
          control over management of the dedicated team members.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 ml-20 mt-2 md:mt-0 gap-14 p-14 xl:px-80 xl:ml-24 md:ml-44  sm:gap-10 xl:gap-32 md:py-40 justify-center align-middle items-center">
          {data?.map(({ id, imgLink, desc }: any) => (
            <div key={id}>
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
                src={imgLink}
                alt=""
                className="h-18 sm:h-18 md:h-24"
              />
              <p className="sm:mt-6 mt-3 text-left xl:text-xl sm:tracking-wide">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <span className="w-full flex justify-center">
          <button className="group mt-6 mb-10 text-sm sm:text-[16px] py-3 md:py-4 b text-orange-500 rounded-full px-8 flex hover:bg-orange-500 hover:text-white">
            See our services
            <span className="mt-[4px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
              <BsArrowRight />
            </span>
          </button>
        </span>
      </motion.div>
    </div>
  );
};

export default Fifth;
