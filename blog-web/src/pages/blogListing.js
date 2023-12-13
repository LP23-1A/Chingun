import React from "react";
import Navbar from './navbar'

const Blog = () => {
    return (
        <main className="inline-flex flex-col justify-end items-center bg-white mx-[165px]">
            <div className="flex flex-col items-center gap-[48px]">
                <Navbar></Navbar>
                <header></header>
            </div>
        </main>
    )
}

export default Blog