import React from "react";
import Navbar from './navbar'
import Footer from './components/footer'
import Button from './components/button'
import Card from './components/card'

const Blog = () => {
    return (
        <main className="inline-flex flex-col justify-end items-center bg-white mx-auto">
            <div className="flex flex-col items-center gap-[48px]">
                <Navbar></Navbar>
                <header className="w-[1216px] h-7 text-[color:var(--Secondary-800,#181A2A)] text-2xl not-italic font-bold leading-7; font-family: Work Sans;">All Blog Post</header>
                <div className="flex flex-col items-center gap-[80px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        <div className="flex flex-col items-start gap-[20px]">
                            <div className='flex items-start gap-[20px]'>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                            </div>
                            <div className='flex items-start gap-[20px]'>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                            </div>
                            <div className='flex items-start gap-[20px]'>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                            </div>
                            <div className='flex items-start gap-[20px]'>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                                <Card short={"August 20, 2022"} badge={"Technology"}>The Impact of Technology on the Workplace: How Technology is Changing</Card>
                            </div>
                        </div>
                        <Button>Load More</Button>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </main>
    )
}

export default Blog