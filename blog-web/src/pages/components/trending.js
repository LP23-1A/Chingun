import React from "react";
import Badge from "./a-badge";

const Trending = ({ children }) => {
    return (
        <div className='flex w-[293px] h-[320px] flex-col items-start rounded-xl'>
            <img className="w-[289px] h-[320px] shrink-0 rounded-xl background: linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%)" src="./mountain.png"></img>
            <div className="flex w-[230px] h-[120px] flex-col items-start gap-4 absolute pl-[28.5px] pt-[172px]">
                <Badge>Technology</Badge>
                <text className="w-[230px] h-[76px] shrink-0 text-white text-lg not-italic font-semibold leading-7; font-family: Work Sans;">The Impact of Technology on the Workplace: How Technology is Changing</text>
            </div>
        </div>

    )
}

export default Trending