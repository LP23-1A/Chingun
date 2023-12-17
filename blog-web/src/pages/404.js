import Navbar from './navbar'
import Footer from './components/footer'
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()
    return (
        <main className="inline-flex justify-center items-center bg-white mx-auto">
            <div className="flex flex-col items-center gap-[100px]">
                <Navbar></Navbar>
                <div className="flex flex-col items-center gap-[100px]">
                    <div className="flex w-[642px] h-[208px] justify-center items-center gap-[40px]">
                        <header className='text-black text-7xl not-italic font-normal leading-[72px]'>404</header>
                        <div className='w-[1px] h-[156px] bg-slate-200'></div>
                        <div className='flex py-[8px] px-[0] flex-col justify-end items-start gap-[20px]'>
                            <header className='text-black text-2xl not-italic font-semibold leading-10; font-family: Work Sans;'>Page Not Found</header>
                            <text className='w-[392px] text-[color:var(--Secondary-500,#696A75)] text-lg not-italic font-normal leading-[26px]; font-family: Work Sans;'>
                                We&apos;re sorry, This page is unknown or does not exist the page you are looking for.
                            </text>
                            <button onClick={() => router.push('/')} className='flex px-[16px] py-[10px] justify-center items-center rounded-[6px] bg-[#4B6BFB]'>
                                <text className='text-white text-center text-sm not-italic font-medium leading-5; font-family: Work Sans;'>Back to Home</text>
                            </button>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </main>
    )
}