import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-[#16181c] text-white">
      <div className="text-center mt-72">
        <h1 className="xl:text-5xl text-3xl font-sans tracking-wide">
          Get to know us better!
        </h1>
        <p className="sm:mt-8 mt-6 font-sans text-md sm:text-lg font-light text-gray-300/100">
          It is a pleasure to have you on our website. Let us know if there's an
          opportunity to do something together.
        </p>
        <span className="w-full flex justify-center">
          <button className=" text-sm sm:text-[16px] group xl:h-14 mt-12 py-3 md:py-4 rounded-full px-8 flex bg-orange-500 hover:bg-white hover:text-orange-500">
            Drop us a message
          </button>
        </span>
      </div>

      <div className="xl:flex mt-64">
        <div className="text-center">
          <h1 className="ml-6 xl:ml-20 xl:mt-[-40px] mt-[-82px] text-2xl xl:text-[32px] text-white font-semibold tracking-wide">
            Geeks<span className=" text-orange-500"> Invention</span>
          </h1>
          <p className="xl:w-[17.49em] xl:ml-20 text-sm sm:text-md px-4 text-[#999da4]">
            447 Broadway, 2nd Floor Suite #772, New York 10013, United States,
            &nbsp;&nbsp; +1-347-535-0004
          </p>
        </div>
        <ul className="xl:ml-30 ml-2 sm:ml-10 md:ml-40 text-white flex xl:gap-8 gap-2 sm:gap-4 mt-5 text-[10.3px] xl:text-md sm:text-sm font-extralight tracking-wider">
          <li className="ul">Works</li>
          <li className="ul">Technologies</li>
          <li className="ul">Services</li>
          <li className="ul">Company</li>
          <li className="ul">Contacts</li>
          <li className="ul">Terms and Conditions</li>
          <li className="ul">Privacy Policy</li>
        </ul>
        <span className="w-full flex justify-center">
          <button className="border xl:ml-20 mt-4 xl:mt-0 text-sm md:text-md py-3 md:py-4 xl:h-14 rounded-full px-8 flex hover:bg-white hover:text-black">
            Stay tuned for our updates
          </button>
        </span>
      </div>
      <p className="text-center xl:mt-10 mt-4 text-[#3b414b] text-sm sm:text-md mb-10">
        © Copyright 2023 – Mobile App Design and Development Company. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
