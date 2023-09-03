"use client";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const Homepage = (props: Props) => {
  const [hideHamburger, setHideHamburger] = useState(false);

  const tabs: string[] = [
    "home",
    "works",
    "technologies",
    "services",
    "company",
    "contacts",
  ];

  const bigNavBarStyle = `h-full w-full justify-center lg:justify-end flex flex-col lg:flex-row space-y-6 lg:space-x-8 items-center lg:items-end invisible lg:visible`;

  const smallNavBarStyle = `h-full w-full justify-center lg:justify-end flex flex-col lg:flex-row space-y-6 lg:space-x-8 items-center lg:items-end  lg:invisible absolute left-0 top-0`;

  const styleParent = `p-4 flex fixed w-screen h-screen ${
    hideHamburger ? "" : "bg-[#25282ff4]"
  } lg:h-20 lg:bg-white/5 justify-between items-center`;

  return (
    <div className="w-full bg-[#16181c] h-screen">
      <div className={styleParent}>
        <div>
          <h1 className="flex top-2 sm:top-4 absolute text-[32px] text-white font-semibold tracking-wide">
            Geeks<span className=" text-orange-500">&nbsp;Invention</span>
          </h1>
        </div>
        <div className={bigNavBarStyle}>
          {tabs.map((item, index) => (
            <div key={index.toString()}>
              <text className="text-white ul font-light font-sans tracking-wider text-lg lg:text-sm">
                {item.toLocaleUpperCase()}
              </text>
            </div>
          ))}
        </div>

        {hideHamburger ? null : (
          <div className={smallNavBarStyle}>
            {tabs.map((item, index) => (
              <div key={index.toString()}>
                <text className="text-white ul font-light font-sans tracking-wider text-lg lg:text-sm">
                  {item.toLocaleUpperCase()}
                </text>
              </div>
            ))}
          </div>
        )}

        <div className="lg:hidden">
          <button
            id="btn"
            className="absolute text-white text-2xl top-5 right-6"
            onClick={() => {
              setHideHamburger((prevVal) => !prevVal);
            }}
          >
            {hideHamburger ? <RxHamburgerMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>

      <div className="text-white mt-96 xl:mt-[25%]">
        <h1 className="text-center text-4xl md:text-[65px] uppercase">
          Embrace the future
        </h1>
        <h2 className="md:mt-14 mt-5 text-center text-xl md:text-[32px] font-light font-sans tracking-wide">
          Welcome to the Age of Fiction
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
