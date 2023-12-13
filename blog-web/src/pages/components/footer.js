import React from "react";

const Footer = () => {
    return (
        <div className='bg-[#f6f6f7] overflow-visible flex w-[100vw] h-[495px] mx-[-490px] px-[-352px] pb-0 pt-[64px] flex-col items-center gap-[25px] shrink-0 border-t-[color:var(--secondary-100,#E8E8EA)] border-t border-solid;'>
            <div className='flex w-[1215px] items-start gap-[20px]'>
                <div className='flex w-[289px] flex-col items-start gap-[24px] shrink-0'>
                    <div className='flex flex-col items-start gap-[12px]'>
                        <text className='text-[color:var(--secondary-800,#181A2A)] text-lg not-italic font-semibold leading-7; font-family: Work Sans;'>About</text>
                        <text className='w-[280px] text-[color:var(--secondary-500,#696A75)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</text>
                    </div>
                    <div className='flex flex-col items-start gap-[4px]'>
                        <text className='text-[color:var(--secondary-800,#181A2A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Email : <text className='text-[color:var(--secondary-600,#3B3C4A)]'>info@jstemplate.net</text></text>
                        <text className='text-[color:var(--secondary-800,#181A2A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Phone : <text className='text-[color:var(--secondary-600,#3B3C4A)]'>880 123 456 789</text></text>
                    </div>
                </div>
                <div className='flex w-[521px] justify-center items-start gap-[80px] shrink-0'>
                    <div className='flex flex-col items-start gap-[24px]'>
                        <div className='flex flex-col items-start gap-[8px]'>
                            <a className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Home</a>
                            <a className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Blog</a>
                            <a className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Contact</a>
                        </div>
                    </div>
                </div>
                <div className='w-[144px] h-[16px] shrink-0 gap-[20px] flex'>
                    <img src='./Facebook/Negative.svg'></img>
                    <img src='./Instagram/Negative.svg'></img>
                    <img src='./LinkedIn/Negative.svg'></img>
                    <img src='./Twitter/Negative.svg'></img>
                </div>
            </div>
            <div className='flex w-[1216px] h-[95px] px-0 py-[32px] items-center gap-[64px] shrink-0 border-t-[color:var(--secondary-200,#DCDDDF)] border-t border-solid;'>
                <div className='flex items-center gap-[10px]'>
                    <img src='./LogoCircle.svg'></img>
                    <div className='flex flex-col items-start gap-[2px]'>
                        <text className='text-[color:var(--secondary-900,#141624)] text-xl not-italic font-normal leading-7; font-family: Plus Jakarta Sans;'>Meta<b>Blog</b></text>
                        <text className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>© All Rights Reserved.</text>
                    </div>
                </div>
                <div className='flex justify-end items-center gap-[16px] flex-[1_0_0]'>
                    <text className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Terms of Use</text>
                    <div className='w-[1px] h-[24px] bg-slate-200'></div>
                    <text className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Privacy Policy</text>
                    <div className='w-[1px] h-[24px] bg-slate-200'></div>
                    <text className='text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>Cookie Policy</text>
                </div>
            </div>
        </div>
    )
}

export default Footer