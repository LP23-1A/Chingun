import React from "react";

const searchBar = () => {
    return (
        <div className="relative flex w-[166px] py-2 pr-2 pl-4 items-center justify-end ml-[90px] gap-3 rounded-[5px] bg-zinc-100 box-border;">
            <input type="text" placeholder="Search" className="block w-[100px] box-border bg-inherit text-[color:var(--secondary-400,#A1A1AA)] text-sm not-italic font-normal leading-5 flex-[1_0_0] flex inline-flex; font-family: Inter;"></input>
            <img className="w-4 h-4 shrink-0 absolute top-[10px] right-[10px]" src="./search-outline.svg" />
        </div>

    )
}

export default searchBar