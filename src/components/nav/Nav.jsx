import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import nfd from "../../assets/nfd.svg";
import discord from "../../assets/discord.svg"
import twitter from "../../assets/twitter.svg"

function Nav() {
  const [isHiddenVisible, setHiddenVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHiddenVisible(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
      <nav className={`nav-style py-[16px] ${isHiddenVisible ?"bg-nav-bg":"bg-pre-nav-bg"}`}  >
        <div className={`w-[100%] max-w-[1392px]  mx-[24px]  rounded-[30px] color-white  ${isHiddenVisible ? " bg-transparent":"bg-white"}`}>
          <div className={` flex items-center justify-between px-[36px] ${isHiddenVisible ? "h-[49px]" : "h-[75px]"} `}>
            <div className="flex items-center gap-[22px]">
              <div>
                <img src={logo} alt="img" />
              </div>
              <div>
                <img src={nfd} alt="nfd_logo" />
              </div>
            </div>


            <div className={`flex gap-[20px] justify-between font-formular font-sans  ${isHiddenVisible ? "text-white":"text-custom-gray"}`}>
            <a href="" className="leading-20 text-[16px] no-underline font-font-w-500  p-[10px] bg-transparent relative">
                About
                </a>

                <a href="" className="leading-20 text-[16px] no-underline font-font-w-500  p-[10px] bg-transparent relative">
                Aggregator
                </a>

                <a href="" className="leading-20 text-[16px] no-underline font-font-w-500  p-[10px] bg-transparent relative">
                 Features
                </a>

                <a href="" className="leading-20 text-[16px] no-underline font-font-w-500  p-[10px] bg-transparent relative">
                Roadmap
                </a>

                <a href="" className="leading-20 text-[16px] no-underline font-font-w-500  p-[10px] bg-transparent relative">
                Contact us
                </a>
            </div>


            <div className="flex items-center">
              <div className="flex items-center gap-[20px]">
                <a href="">
                    <div>
                        <img src={discord} alt="" />
                    </div>
                </a>
                <a href="">
                    <div>
                        <img src={twitter} alt="" />
                    </div>
                </a>
              </div>

              <div
        className={`w-[337px] ml-[20px] flex justify-between gap-[32px] overflow-hidden font-formular font-sans 
        ${isHiddenVisible ? "block" : "hidden"}`}
      >                <a href="" className="w-[100%] max-w-[116px] min-w-auto">
                    <button className="relative h-[49px] flex flex-row items-start justify-start max-w-[189px] w-[100%] bg-transparent min-w-[120px] font-nav-font-w text-white  border-0 transition-all duration-500 ease-in-out delay-0">
                        <div className="relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue l-[1px] transition-all duration-500 ease-in-out delay-0 custom-clip-path-left"></div>
                        <span className="block w-full h-full bg-custom-blue transition-all duration-500 ease-in-out delay-0"></span>
                        <div className="w-full h-full absolute flex flex-row items-center justify-center gap-[15px] text-[14px] font-font-w-400 z-1">“Combine” software</div>
                        <div className="last-of-type:transform-last-of-type relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue transition-all duration-500 ease-in-out delay-0 custom-clip-path-right "></div>
                    </button>
                </a>
                <a href="">
                <button className="relative h-[49px] flex flex-row items-start justify-start max-w-[189px] w-[100%] bg-transparent min-w-[120px] font-nav-font-w text-white  border-0 transition-all duration-500 ease-in-out delay-0">
                        <div className="relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue l-[1px] transition-all duration-500 ease-in-out delay-0 custom-clip-path-left"></div>
                        <span className="block w-full h-full bg-custom-blue transition-all duration-500 ease-in-out delay-0"></span>
                        <div className="w-full h-full absolute flex flex-row items-center justify-center gap-[15px] text-[14px] font-font-w-400 z-1">Platform</div>
                        <div className="last-of-type:transform-last-of-type relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue transition-all duration-500 ease-in-out delay-0 custom-clip-path-right "></div>
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
