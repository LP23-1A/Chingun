import React from "react";
import Navbar from './navbar'
import Footer from './components/footer'

const page = () => {
    return (
        <main className="inline-flex justify-center items-center bg-white mx-auto">
            <div className="flex flex-col items-center gap-[100px]">
                <Navbar></Navbar>
                <div className="flex flex-col items-center gap-[100px]">
                    <div className="flex w-[895px] h-[895px] flex-col items-center">
                        <div className="flex w-[769px] h-[389px] px-[10px] pb-0 pt-[14px] flex-col items-center gap-[20px] shrink-0">
                            <div className="flex flex-col items-start gap-[20px]">
                                <header className="text-black text-4xl not-italic font-semibold leading-10; font-family: Work Sans;">Contact Us</header>
                                <text className="w-[624px] h-[103px] text-[color:var(--Secondary-500,#696A75)] text-base not-italic font-normal leading-6; font-family: Plus Jakarta Sans;">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </text>
                            </div>
                            <div className="flex py-[10px] py-0 items-center gap-[50px]">
                                <div className="flex w-[294px] h-[133px] p-[16px] flex-col items-start gap-[10px] border rounded-xl border-solid border-[#E8E8EA]">
                                    <text className="text-black text-2xl not-italic font-semibold leading-10; font-family: Work Sans;">Address</text>
                                    <text className="w-[260px] text-[#696A75] text-lg not-italic font-normal leading-[26px]; font-family: Work Sans;">1328 Oak Ridge Drive, Saint Louis, Missouri</text>
                                </div>
                                <div className="flex w-[294px] h-[133px] p-[16px] flex-col items-start gap-[10px] border rounded-xl border-solid border-[#E8E8EA]">
                                    <text className="text-black text-2xl not-italic font-semibold leading-10; font-family: Work Sans;">Contact</text>
                                    <text className="w-[260px] text-[#696A75] text-lg not-italic font-normal leading-[26px]; font-family: Work Sans;">313-332-8662 info@email.com</text>
                                </div>
                            </div>
                        </div>
                        <div className="flex pl-[35px] pr-[130px] pt-[29px] pb-[26px] items-center rounded-[10px] bg-gray-200">
                            <div className="flex flex-col items-start gap-[24px]">
                                <text className="text-black text-lg not-italic font-semibold leading-[26px] font-family: Work Sans;">Leave a Message</text>
                                <div className="flex w-[478px] pb-[18px] justify-center items-center">
                                    <form className="w-[478px] h-[317px] shrink-0 flex flex-col gap-[20px]">
                                        <div className="w-[589px] h-[39px] shrink-0 flex flex-row gap-[28px]">
                                            <input className="flex w-[225px] h-[38px] py-[14px] pl-[20px] pr-[14px] items-center gap-[12px] shrink-0 rounded border border-solid border-[#DCDDDF]" placeholder="Your Name"></input>
                                            <input className="flex w-[225px] h-[38px] py-[14px] pl-[20px] pr-[14px] items-center gap-[12px] shrink-0 rounded border border-solid border-[#DCDDDF]" placeholder="Your Email "></input>
                                        </div>
                                        <input className="flex w-[478px] h-[38px] py-[14px] pl-[20px] pr-[14px] items-center gap-[12px] shrink-0 rounded border border-solid border-[#DCDDDF]" placeholder="Subject"></input>
                                        <input className="flex w-[478px] h-[134px] py-[14px] pl-[20px] pr-[14px] items-center gap-[12px] shrink-0 rounded border border-solid border-[#DCDDDF]" placeholder="Write a Message"></input>
                                        <button type="submit" className="inline-flex py-[10px] px-[16px] flex-col justify-center items-center rounded-[6px] bg-[#4B6BFB] w-[130px] mt-[10px]">
                                            <text className="text-white text-center text-sm not-italic font-medium leading-5; font-family: Work Sans;">Send Message</text>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </main>
    )
}

export default page