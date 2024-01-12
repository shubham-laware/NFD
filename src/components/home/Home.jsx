import React from "react";
import IntroLeft from "../intro/IntroLeft";
import IntroRight from "../intro/IntroRight";

function Home() {
  return (
    <div className="bg-custom-white overflow-hidden w-[100%]  flex justify-center ">
      <div className="block max-w-[1392px]  mx-[24px] w-[100%] box-border">
        <div className="flex flex-col h-[100%] box-border">
          <div className="  flex items-center w-[100%] pt-[107px] pb-[16px] overflow-hidden">
            <IntroLeft />
            <IntroRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
