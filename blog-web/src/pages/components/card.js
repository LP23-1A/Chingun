import React from "react";
import Badge from "./a-badge";

const Card = ({ children, badge, short }) => {

    return (
        <div className="flex w-[392px] p-[16px] flex-col justify-center items-center gap-[16px] rounded-xl border border-[color:var(--secondary-100,#E8E8EA)] border-solid; bg-white;">
            <img src="./Rectangle 38.png"></img>
            <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch">
                <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <Badge>{badge}</Badge>
                    <a href="" className="self-stretch text-[color:var(--secondary-800,#181A2A)] text-2xl not-italic font-semibold leading-7; font-family: Work Sans;">
                        {children}
                    </a>
                </div>
                <div className="flex items-center gap-[20px]">
                    <text className="text-[color:var(--secondary-400,#97989F)] text-base not-italic font-normal leading-6; font-family: Work Sans;">
                        {short}
                    </text>
                </div>
            </div>
        </div>

    )
}

export default Card