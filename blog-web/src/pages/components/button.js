import React from "react";

const Button = ({ children }) => {

    return (
        <div className="flex justify-center items-center gap-3 border px-5 py-3 rounded-md border-solid border-[rgba(105,106,117,0.30)] hover:bg-violet-600 hover:text-white ">
            <button className="text-[color:var(--secondary-500,#696A75)]; text-base not-italic font-medium leading-6; font-family: Work Sans; ">{children}</button>
        </div>

    )
}

export default Button