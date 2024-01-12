import React from 'react'
import logo from '../../assets/logo.svg'
import '../../../src/App.css'
import blank1 from '../../assets/blank-1.svg'
import blank2 from '../../assets/blank-2.svg'

function About() {
  return (
    <div className='bg-white z-100 w-[100%] relative flex justify-center'>
        <div className='relative py-[170px] max-w-[1392px]  mx-[24px] '>

            <div className='sticky top-[170px] opcaity-1 transform-none w-[100%] flex justify-between items-center gap-[150px]'>

                <div className='max-w-[350px] min-w-[350px] w-[100%] flex flex-col'>
                    <h2 className='text-[46px] leading-[54px] font-syne font-font-w-700 text-home-font-color'>The first web3 crypto platform</h2>
                    <h3 className='text-[24px] leading-[29px] mt-[45px] font-custom-formular font-normal font-font-w-700 '>Problem</h3>
                    <p className='text-[15px] leading-[25px] mt-[20px] text-cusotm-formular font-font-w-400 text-custom-gray'>
                        Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.
                    </p>
                </div>

                <div className='w-[100%] max-w-[800px] relative z-100'>
                    <img src="https://www.nfd.gg/_next/image?url=%2FcubeMobile%2FcubeBrokenOPT.webp&w=640&q=100"  className='w-[150%] h-[150%] absolute left-[50%] top-[50%] z-1 transform -translate-x-1/2 -translate-y-1/2' ></img>
                    <img src="https://www.nfd.gg/_next/image?url=%2Fblock1OPT.webp&w=1920&q=75" alt="img" />
                        
                </div>
            </div>

            <div className='mt-[110px] relative z-5 w-[100%] flex justify-between items-center gap-[150px] '>
                <div className='max-w-[350px] min-w-[350px] w-[100%] pt-[110px] flex flex-col bg-white'>
                    <h2 className='text-[36px] leading-[44px] font-syne font-font-w-700  text-home-font-color'>We work to make your life easier</h2>
                    <h3 className='text-[24px] leading-[29px] mt-[45px] font-custom-formular font-font-w-700'>Solution</h3>
                    <p className='text-[15px] leading-[25px] mt-[20px] font-custom-formular font-font-w-400 text-custom-gray'>
                        NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.
                    </p>
                    <div className='flex flex-col '>
                        <hr className='w-[100%] my-[35px] h-[1px] bg-underline-bg' />

                        <div className='bg-white shadow-custom rounded-[15px] h-[67px] flex items-center p-[11px] gap-[15px] '>
                            <div className='bg-custom-bg-gray rounded-[7px] w-[45px] h-[45px] flex justify-center items-center'>
                                <img src={logo} alt="logo" />
                            </div>

                            <span className='text-[14px] font-font-w-500 leading-[21px] text-widget-font-color'>
                                NFD will save your time and help you earn money in crypto.
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] max-w-[800px] relative z-100' > </div>
            </div>

            <div>

            </div>

            <div className='w-[168px] h-[93px] absolute flex justify-center items-center bottom-[-92px] right-[270px] z-10   transform scale-y-[-1]'>
                <div className='bg-white w-[100vw] absolute h-[100%] custom-left '></div>
                <img src={blank1} alt="img"  className='absolute top-0 left-0'/>
                <img src={blank2} alt="img" className='hidden absolute top-0 left-0 ' />
            </div>
        </div>
    </div>
  )
}

export default About
