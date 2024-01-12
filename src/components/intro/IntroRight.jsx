import React from 'react'
import handShake from '../../assets/handshake.svg'
import '../../../src/App.css'
import macsOS from '../../assets/macOS.svg'
import osUnderline from '../../assets/osUnderline.svg'
import windows from '../../assets/windows.svg'


function IntroRight() {

  const backgroundStyle = {
    backgroundImage: "url('https://www.nfd.gg/softwareEllipse.webp')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  const gradientStyle = {
    background: 'linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 162.5%) text',
  };

  const textFillStyle = {
    WebkitTextFillColor: 'transparent',
  };

  const combineGradientStyle={
    background:' linear-gradient(341.87deg, rgb(132, 138, 255) -1.64%, rgb(234, 140, 255) 106.1%) text'
  }

  const nfdStyles = {
    ...gradientStyle,
    ...textFillStyle,
  };

  const combineStyles={
    ...combineGradientStyle,
    ...textFillStyle,
  }


  return (
    <div className='w-[50%] h-[100%] bg-intro-right-bg intro-right-border relative intro-right-p flex flex-col items-center  overflow-hidden'>
      <img src={handShake} alt="Software by NFD" />

      <div className='flex flex-col items-center mt-[40px] '>
        <span className='font-syne text-[50px] font-font-w-700 text-intro-rg-nfd-color ' style={nfdStyles}>NFD software</span>
        <span className='font-syne text-[50px] font-font-w-700 text-intro-rg-nfd-color' style={combineStyles}>“Combine”</span>
      </div>

      <div className='max-w-[568px] w-[100%] mt-[16px] text-center leading-7 font-custom-formular text-[18px] font-font-w-400 text-right-intro-lg-gray-color '> 
        Handle your crypto-wallets ,farm activities and retrodrops on a single app.
      </div>

      <div className='flex items-center mt-[40px] '> 
        <button className='macOS-button-style'>
          <div className='flex items-center gap-[8px] w-[100%] justify-center'>
            <img src={macsOS} alt="macOS" />
            <span className='font-custom-formular text-[18px] font-font-w-400 text-right-intro-lg-gray-color transition-color duration-300 ease-in-out'>macOs</span>
          </div>

          <div className='absolute bottom-0 flex transition-color duration-300 ease-in-out opacity-0 left-[-28px] '>
            <img src={osUnderline} alt="img" />
          </div>
        </button>

        <button className='macOS-button-style'>
          <div className='flex items-center gap-[8px] w-[100%] justify-center'>
            <img src={windows} alt="windows" />
            <span className='font-custom-formular text-[18px] font-font-w-400 text-right-intro-lg-gray-color transition-color duration-300 ease-in-out'>Windows</span>
          </div>

          <div className='absolute bottom-0 flex transition-color duration-300 ease-in-out opacity-0 left-[-28px] '>
            <img src={osUnderline} alt="img" />
          </div>
        </button>
      </div>
      <div className='flex items-center gap-[32px] mt-[47px] w-[100%] justify-center'>
       <div className="max-w-[183px] w-full">
          <a href="" className="bg-transparent w-[183px] ">
            <button className="relative h-[49px] flex items-start justify-start flex-row max-w-[183px] w-full border-0 bg-transparent min-w-[120px] font-font-w-500 text-white transition-all duration-500 ease-in-out delay-0">
              <div className="relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue left-[1px] transition-all duration-500 ease-in-out delay-0 custom-clip-path-left"></div>
                <span className="block w-full h-full bg-custom-blue transition-all duration-500 ease-in-out delay-0"></span>
                <div className="w-full h-full absolute flex flex-row items-center justify-center gap-[15px] text-[14px] font-font-w-400 z-1">
                        Download
                </div>
              <div className="last-of-type:transform-last-of-type relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue transition-all duration-500 ease-in-out delay-0 custom-clip-path-right "></div>
            </button>
          </a>
        </div>

        <a href="" className='bg-transparent'>
          <button className='flex items-center- justify-center bg-transparent font-custom-formular border-0 text-[17px] font-font-w-400 text-custom-light-blue underline'>
            How it works?
          </button>
        </a>
      </div>
      <div className='w-[100%] h-[93px] absolute top-0' style={backgroundStyle}></div>

    </div>
  )
}

export default IntroRight
