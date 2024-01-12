import React from 'react'
import footerSvg from '../../assets/footer.svg'

function Footer() {
  return (
    <div className=' relative w-[100%] flex  items-center py-[110px]  bg-white'>
        <div className=' w-[100%] max-w-[1392px] mx-[24px] '>
            <div className=' flex items-center justify-between '>
                <div className='flex items-center justify-between w-[100%] '>
                    <div className='flex items-center justify-start '>
                        <img src={footerSvg} alt="footer-logo" />
                        <span className='text-custom-formular text-[14px] font-font-w-400 leading-[17px] ml-[60px] mr-[98px] text-custom-gray'>© 2023 NFD, INC. ALL RIGHTS RESERVED.</span>
                        <div className='flex items-center justify-start gap-[45px] '>
                            <a href="" className='text-custom-formular text-[16px] font-font-w-400 leading-[20px] text-home-font-color'>Privacy</a>
                            <a href="" className='text-custom-formular text-[16px] font-font-w-400 leading-[20px] text-home-font-color'>Terms of use</a>
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-auto gap-[60px] '>
                        <a href="" className='text-custom-formular font-font-w-400 text-[14px] leading-[17px] text-custom-light-blue bg-transparent'>contact@nfd.gg</a>
                        <a href="" className="bg-transparent w-[183px] ">
                            <button className="relative h-[49px] flex items-start justify-start flex-row max-w-[183px] w-full border-0 bg-transparent min-w-[120px] font-font-w-500 text-white transition-all duration-500 ease-in-out delay-0">
                                <div className="relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue left-[1px] transition-all duration-500 ease-in-out delay-0 custom-clip-path-left"></div>
                                    <span className="block w-full h-full bg-custom-blue transition-all duration-500 ease-in-out delay-0"></span>
                                    <div className="w-full h-full absolute flex flex-row items-center justify-center gap-[15px] text-[14px] font-font-w-400 z-1">
                                     Try App
                                    </div>
                    <div className="last-of-type:transform-last-of-type relative w-[24px] min-w-[24px] h-[49px] bg-custom-blue transition-all duration-500 ease-in-out delay-0 custom-clip-path-right "></div>
            </button>
          </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
