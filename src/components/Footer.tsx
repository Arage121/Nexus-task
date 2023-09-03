import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const tabs: string[] = [
    "Works",
    "Technologies",
    "Services",
    "Company",
    "Contacts",
    "Terms and Conditions",
    "Privacy Policy",
  ];

  return (
    <div className="w-screen h-screen items-center flex flex-col  bg-[#16181c] text-white relative ">
      <div className=" absolute text-center top-1/4">
        <h1 className="xl:text-5xl text-3xl font-sans tracking-wide">
          Get to know us better!
        </h1>
        <p className="sm:mt-8 mt-6 font-sans text-md sm:text-lg font-light text-gray-300/100">
          It is a pleasure to have you on our website. Let us know if there&apos;s an
          opportunity to do something together.
        </p>
        <span className="w-full flex justify-center">
          <button className=" text-sm sm:text-[16px] group xl:h-14 mt-12 py-3 md:py-4 rounded-full px-8 flex bg-orange-500 hover:bg-white hover:text-orange-500">
            Drop us a message
          </button>
        </span>
      </div>

      <div className=" absolute bottom-24 w-screen flex md:flex-row flex-col  justify-between items-center p-3 mt-6 md:space-x-3 md:space-y-0 space-y-4">
        <div className="flex-none basis-1/4  text-center">
          <h1 className=" text-2xl text-white font-semibold tracking-wide">
            Geeks<span className=" text-orange-500"> Invention</span>
          </h1>
          <p className=" text-sm sm:text-md px-4 text-[#999da4]">
            447 Broadway, 2nd Floor Suite #772, New York 10013, United States,
            &nbsp;&nbsp; +1-347-535-0004
          </p>
        </div>
        <div className="grow  p-4 flex flex-row  flex-wrap  items-center justify-evenly">
          {tabs.map((item, index) => (
            <div key={index.toString()}>
              <text className="text-white hover:border-b-2 hover:border-b-orange-500 ul font-light font-sans tracking-wider sm:text-sm text-xs ">
                {item.toLocaleUpperCase()}
              </text>
            </div>
          ))}
        </div>
        <div className="flex-none basis-1/6 p-4">
          <span className="w-full flex justify-center">
            <button className="border  text-sm md:text-md py-3 md:py-4 rounded-full px-8 flex hover:bg-white hover:text-black">
              Stay tuned for our updates
            </button>
          </span>
        </div>
      </div>

      <p className=" absolute bottom-0 text-center align-bottom xl:mt-10 mt-4 text-[#3b414b] text-sm sm:text-md mb-10">
        &#169; Copyright 2023 – Ayush Mobile App Design and Development Company.
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
