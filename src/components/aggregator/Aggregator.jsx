import React from "react";
import { useState } from "react";

function Aggregator() {
  const aggregatorDivStyle = {
    background:
      "linear-gradient(147.35deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 116.23%)",
  };

  const bgImage = {
    backgroundImage: "url(https://www.nfd.gg/noiseOPT.webp)",
  };

  const bgImage2 = {
    backgroundImage: "url(https://www.nfd.gg/Grid.png)",
  };

  const alphaBg = {
    background:
      "linear-gradient(90deg, rgb(209, 160, 255) 0%, rgb(218, 191, 255) 100%) text",
    WebkitTextFillColor: "transparent",
  };

  const customMargin = {
    margin: "240px 0px 110px",
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className=" w-[100%] flex justify-center relative"
      style={aggregatorDivStyle}
    >
      <div
        style={bgImage}
        className="h-[100%] w-[100%] absolute z-3 top-0 left-0"
      ></div>

      <div
        style={bgImage2}
        className=" h-[797px] absolute z-2 w-[100%] top-0 left-0 "
      ></div>

      <div className="absolute z-1 top-0 flex flex-col overflow-hidden items-start w-[100%] ">
        <img
          src="https://www.nfd.gg/_next/image?url=%2Fblurs%2Fthird_block_one_blur.webp&w=16&q=75"
          alt="img"
          className="text-transparent w-[100%] h-[1000px]"
        />
      </div>

      <div className="max-w-[1220px] mx-[100px] w-[100%] z-5 ">
        <div
          className="w-[100%] flex flex-col items-center  "
          style={customMargin}
        >
          <div className="max-w[289px] w-[100%] flex flex-col items-center font-font-w-700 text-[36px] leading-[44px] text-center custom-white font-syne">
            No spam, only
            <div className=" relative inline-block" style={alphaBg}>
              Alpha
            </div>
            <div className="  font-custom-formular font-font-w-400 text-[15px] leading-[25px] text-center text-right-intro-lg-gray-color max-w-[700px] w-[100%] mt-[25px] text-gap ">
              We publish on the NFD.gg platform only that activities have been
              selected and researched by our team.
            </div>
            <div className="w-[100%] mt-[35px] ">
              <div className="ml-auto mr-auto relative overflow-hidden list-none z-1">
                <div
                  className="relative w-[100%] h-[100%] z-1 flex transition-transform box-content"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="w-[1220px] flex justify-center transform translate-z-0 backface-hidden swiper-slide">
                    <div className="flex flex-col justify-center relative">
                      <div className="font-custom-formular font-font-w-500 text-[15px] leading-[25px] text-center text-spam-color mb-[25px] max-w-[700px] w-[100%]">
                        You can see several categories of these events, from
                        retrodrops and early project to raffles and mint sales.
                      </div>

                      <img
                        src="https://www.nfd.gg/_next/image?url=%2FalphaBlock%2FHotEventsMobileOPT.webp&w=750&q=100"
                        alt="show-review"
                        className="w-[696px] h-[394px] text-transparent"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-[1220px] flex justify-center translate-z-0 backface-hidden swiper-slide">
                    <div className="flex flex-col justify-center relative group">
                      <div className="font-custom-formular font-font-w-500 text-[15px] leading-[25px] text-center text-spam-color mb-[25px] max-w-[700px] w-[100%]">
                        All of these events have an overview page and a
                        step-by-step guide.
                      </div>

                      <div className={`absolute bottom-[-17px] left-[-85px] group-hover:z-[2] ${isHovered ? 'z-2' : 'z-1' } `} 
                      onMouseEnter={() =>{ console.log('entered'); setHovered(true)}}onMouseLeave={() => {console.log('leaved');setHovered(false)}}
                      >
                        <img
                          src="https://www.nfd.gg/_next/image?url=%2FalphaBlock%2FShowReviewBtmMobileOPT.webp&w=750&q=100"
                          alt="img-review "
                          className="w-[696px] h-[394px] transition-element"
                          loading="lazy"
                        />
                        
                      </div>

                      <div className={`relative bottom-[-107px] right-[-88px]  ${isHovered ? 'z-0' : 'z-1' }`}>
                        <img
                          src="https://www.nfd.gg/_next/image?url=%2FalphaBlock%2FShoReviewTopMobileOPT.webp&w=750&q=100"
                          alt="image-review"
                          className="w-[696px] h-[394px] "
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-[1220px] flex justify-center transform translate-z-0 backface-hidden swiper-slide ">
                    <div className="flex flex-col justify-center relative">
                      <div className="font-custom-formular font-font-w-500 text-[15px] leading-[25px] text-center text-spam-color mb-[25px] max-w-[700px] w-[100%]">
                        And a major plus is that they all have an “Auto-update
                        feed”, and all updates/changes to these activities are
                        analyzed and researched by our team and published in
                        this feed.
                      </div>
                      <img
                        src="https://www.nfd.gg/_next/image?url=%2FalphaBlock%2FFeedImageMobileOPT.webp&w=750&q=100"
                        alt="image-review"
                        className="w-[696px] h-[394px] "
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[20px] justify-center h-[40px] mt-[80px] ">
                  <span
                    className={`block relative w-[12px] min-w-[12px] min-h-[12px] bg-transparent h-[12px] slider-icon-border ${
                      currentSlide === 0 ? "active" : "inactive"
                    }`}
                    onClick={() => handleSlideClick(0)}
                  ></span>
                  <span
                    className={`block  relative w-[12px] min-w-[12px] min-h-[12px] bg-transparent h-[12px] slider-icon-border ${
                      currentSlide === 1 ? "active" : "inactive"
                    }`}
                    onClick={() => handleSlideClick(1)}
                  ></span>
                  <span
                    className={`block  relative w-[12px] min-w-[12px] min-h-[12px] bg-transparent h-[12px] slider-icon-border ${
                      currentSlide === 2 ? "active" : "inactive"
                    }`}
                    onClick={() => handleSlideClick(2)}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div></div>

          <div></div>
        </div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
}

export default Aggregator;
