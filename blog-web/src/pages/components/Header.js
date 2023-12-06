import React from "react";
import Link from 'next/link';

export default function Header() {
    return (
        <main>
            <div className='flex px-8 py-8 justify-between items-center flex-1 bg-gradient-to-r from-cyan-500 to-blue-500' >
                <div className='flex px-0 py-0 justify-between items-center flex-1'>
                    <div className='flex items-center float-left mr-[50px]' ><img src='/Logo.svg' alt='Logo'></img></div>
                    <div className='flex justify-center items-center float-right'>
                        <div className='flex justify-center items-center gap-10 w-[50vw]'>
                            <div>
                                <Link href="../api/Home.js">Home</Link>
                            </div>
                            <div>
                                <Link href="../api/AllBlogPosts">Blog</Link>
                            </div>
                            <div>
                                <Link href="../api/ContactUs">Contact</Link>
                            </div>
                        </div>
                        <div className='flex justify-center ml-2 w-[118px]'>
                            <div className='flex'>
                                search
                                <img src='/search-outline.svg' alt='search icon'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}