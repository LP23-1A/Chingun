import React from "react";

export default function Header() {
    return (
        <main>
            <div className='flex px-8 py-8 justify-between items-center flex-1 bg-gradient-to-r from-cyan-500 to-blue-500' >
                <div className='flex px-0 py-0 justify-between items-center flex-1'>
                    <div className='flex items-center float-left mr-[118px]' ><img src='/Logo.svg' alt='Logo'></img></div>
                    <div className='flex justify-center items-center float-right'>
                        <div className='flex justify-center items-center gap-10 w-[50vw]'>
                            <div>
                                <a>Home</a>
                            </div>
                            <div>
                                <a>Blog</a>
                            </div>
                            <div>
                                <a>Contact</a>
                            </div>
                        </div>
                        <div className='flex justify-center ml-2'>
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