import React from "react";

const searchBar = () => {
    return (
        <div className="flex w-[166px] py-2 pr-2 pl-4 items-center gap-3 rounded-[5px] bg-zinc-100 box-border;">
            <input type="text" placeholder="Search" className="w-[100px] box-border bg-inherit text-[color:var(--secondary-400,#A1A1AA)] text-sm not-italic font-normal leading-5 flex-[1_0_0] flex inline-flex; font-family: Inter;"></input>
            <img className="w-4 h-4 shrink-0" src="./search-outline.svg" />
        </div>

    )
}

export default searchBar