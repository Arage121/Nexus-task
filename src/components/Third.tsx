"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { easeInOut, motion } from "framer-motion";
import jsonData from "../data/db.json";

type Props = {};

type DataType = {
  imageUrl: string;
  title: string;
  description: string;
};

const Third = (props: Props) => {
  const data: DataType[] = jsonData.data;

  return (
    <div className="w-full">
      <div className="bg-[#1b1a21] text-center text-white">
        <div className="xl:ml-[25em] py-4 ml-14 sm:ml-40 md:ml-60 xl:p-20 w-[78%] md:w-[55%]">
          <h3 className="xl:text-5xl text-3xl">
            Check out more works by Geeks Invention
          </h3>
          <p className="mt-8 text-lg font-sans font-extralight">
            Our case studies describe design and development solutions
            implemented at our Geeks Invention projects. The stories are a
            valuable resource for those looking to develop their own mobile
            apps.
          </p>
          <span className="w-full flex justify-center">
            <button className="group mt-14 text-sm sm:text-[16px] py-3 md:py-4 b text-orange-500 rounded-full px-8 flex hover:bg-orange-500 hover:text-white">
              See full case study
              <span className="mt-[6px] ml-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-3">
                <BsArrowRight />
              </span>
            </button>
          </span>
        </div>
      </div>

      <div className="bg-[#22252b]">
        <div className="xl:ml-[30em] py-14 ml-12 sm:ml-40 md:ml-60 xl:p-20 w-[78%] md:w-[48%] text-white text-center">
          <h3 className="xl:text-5xl text-3xl">Recent clients</h3>
          <p className="mt-8 text-lg font-sans font-extralight">
            We worked with the Fortune 500 companies in the USA, Africa, UK,
            Middle East World&apos;s 4th Strongest Banking Brand, Automobile &amp; IoT
            industry
          </p>
        </div>

        <motion.div
          initial={{
            y: 120,
            opacity: 0,
          }}
          transition={{
            ease: easeInOut,
            duration: 1,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          className="grid xl:grid-cols-3 md:grid-cols-2 py-10 px-14 sm:px-32 md:px-30 gap-7 text-white xl:px-60"
        >
          {data?.map((item: any, index: any) => {
            return (
              <div
                key={index.toString()}
                className="bg-white/5 xl:px-10 xl:py-32 px-8  py-14 text-center"
              >
                <img src={item.imageUrl} alt="none" className="w-96" />
                <h4 className="text-xl font-semibold tracking-wide mt-8">
                  {item.title}
                </h4>
                <p className="mr-1 mt-5 font-extralight text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Third;
