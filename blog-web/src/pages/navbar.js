import React from "react";
import Link from 'next/link'
import SearchBar from './components/searchBar'

const navbar = () => {
    return (
        <div className="flex w-[1917px] px-[350px] py-[32px] flex-col items-start gap-[10px]">
            <div className="flex items-start gap-[118px]">
                <a className="btn btn-ghost">
                    <img src="./Logo.svg"></img>
                </a>
                <div className="flex items-center gap-[21px]">
                    <ul className="flex w-[667px] justify-center items-center gap-10">
                        <li className="flex items-center gap-1"><Link href={'/'} className="text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;">Home</Link></li>
                        <li className="flex items-center gap-1"><Link href={'./blogListing'} className="text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;">Blog</Link></li>
                        <li className="flex items-center gap-1"><Link href={'./blog'} className="text-[color:var(--secondary-600,#3B3C4A)] text-base not-italic font-normal leading-6; font-family: Work Sans;">Contact</Link></li>
                    </ul>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default navbar