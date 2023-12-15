import React from "react";

const page = ({ children }) => {
    return (
        <div className="bg-indigo-600 flex px-[10px] py-[4px] justify-center items-center gap-[4px] rounded-md ;">
            <div className="text-[color:var(--White,#FFF)] text-sm not-italic font-medium leading-5; font-family: Work Sans;">{children}</div>
        </div>

    )
}

export default page