import React from "react";
import Link from 'next/link'

const navbar = () => {
    return (
        <div className="flex justify-center items-end">
            <div className="flex-1 floa-left">
                <a className="btn btn-ghost">
                    <img src="./Logo.svg"></img>
                </a>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center px-92">
                    <ul className="gap-2 flex flex-row">
                        <li><Link href={'./blog'}>Home</Link></li>
                        <li><Link href={'./blog'}>Blog</Link></li>
                        <li><Link href={'./blog'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="gap-2">
                    <div className="border-black">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar