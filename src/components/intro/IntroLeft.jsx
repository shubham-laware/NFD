import React from "react";
import '../../../src/App.css'
import introLogo from "../../assets/intro-logo.svg";
import widgetLogo from "../../assets/widget-logo.svg";
import privateToolsLogo from "../../assets/private-tools.svg";
import functionalityLogo from "../../assets/functionality.svg";

function IntroLeft() {

    const backgroundStyle = {
        backgroundImage: "url('https://www.nfd.gg/PurpleEllips.webp')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

  return (
            <div className=" relative w-[50%] bg-white rounded-tl-[12px] rounded-bl-[12px] p-home-left-p flex flex-col items-center  overflow-hidden">
              <img src={introLogo} alt="intro-logo" />

              <div className="flex flex-col items-center mt-[40px]">
                <span className="font-syne text-center text-[50px]  font-font-w-700 text-home-font-color">
                  NFD platform
                </span>

                <span className="font-syne text-[50px] font-font-w-700 text-nfd.gg-font-color">
                  “NFD.gg”
                </span>
              </div>

              <div className="max-w-[568px] w-full mt-[16px] text-center leading-7 font-custom-formular font-sans text-[18px] font-font-w-400 text-custom-gray text-gap">
                An Alpha community 2.0 with its own platform for participating,
                searching, and tracking any crypto related information.
              </div>

              <div className="flex justify-between gap-[20px] mt-[40px] ">
                <div className="bg-white shadow-custom rounded-[15px] pt-[6px] pr-[20px] pb-[6px] pl-[6px] flex justify-between items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] bg-custom-bg-gray rounded-[10px] flex items-center justify-center">
                    <img src={widgetLogo} alt="widget-logo" />
                  </div>

                  <div className="font-custom-formular font-sans text-[14px] font-font-w-400 text-widget-font-color">
                    Info in one place
                  </div>
                </div>

                <div className="bg-white shadow-custom rounded-[15px] pt-[6px] pr-[20px] pb-[6px] pl-[6px] flex justify-between items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] bg-custom-bg-gray rounded-[10px] flex items-center justify-center">
                    <img src={privateToolsLogo} alt="widget-logo" />
                  </div>

                  <div className="font-custom-formular font-sans text-[14px] font-font-w-400 text-widget-font-color">
                    Private tools
                  </div>
                </div>

                <div className="bg-white shadow-custom rounded-[15px] pt-[6px] pr-[20px] pb-[6px] pl-[6px] flex justify-between items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] bg-custom-bg-gray rounded-[10px] flex items-center justify-center">
                    <img src={functionalityLogo} alt="widget-logo" />
                  </div>

                  <div className="font-custom-formular font-sans text-[14px] font-font-w-400 text-widget-font-color">
                    Wide functionality
                  </div>
                </div>
              </div>

              <div className="flex item-center justify-center  gap-[32px] mt-[47px] w-full ">
                <div className="max-w-[183px] w-full">
                  <a href="" className="bg-transparent w-[183px] ">
                    <button className="relative h-[49px] flex items-start justify-start flex-row max-w-[183px] w-full border-0 bg-transparent min-w-[120px] font-font-w-500 text-white transition-all duration-500 ease-in-out delay-0">
                      <div className="relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue left-[1px] transition-all duration-500 ease-in-out delay-0 custom-clip-path-left"></div>
                      <span className="block w-full h-full bg-custom-blue transition-all duration-500 ease-in-out delay-0"></span>
                      <div className="w-full h-full absolute flex flex-row items-center justify-center gap-[15px] text-[14px] font-font-w-400 z-1">
                        Try Platform
                      </div>
                      <div className="last-of-type:transform-last-of-type relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue transition-all duration-500 ease-in-out delay-0 custom-clip-path-right "></div>
                    </button>
                  </a>
                </div>

                <button className="flex items-center justify-center bg-transparent border-0 font-custom-formular text-[17px] font-font-w-400 text-custom-light-blue">
                  How it works?
                </button>
              </div>

              <div className="w-[100%] h-[93px]  absolute bottom-0" style={backgroundStyle}> </div>
            </div>

            
      
  )
}

export default IntroLeft
