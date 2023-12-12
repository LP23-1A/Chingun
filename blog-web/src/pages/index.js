import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './posts/page'
import Navbar from './navbar'
import Badge from './components/a-badge'
import Trending from './components/trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='inline-flex pb-[543px] flex-col justify-center items-center mx-[165px]'>
      <div className='flex flex-col items-start gap-[100px]'>
        <Navbar></Navbar>
        <div className='flex h-[3005px] flex-col items-center gap-[100px] px-[330px]'>
          <div className='w-[1226px] h-[651px] shrink-0 relative '>
            <img src='./Image.png' className='w-[1216px] h-[600px] shrink-0 rounded-xl absolute' ></img>
            <div className='ml-[11px] mt-[335px] bg-white absolute flex w-[598px] p-[40px] flex-col items-start gap-[24px] rounded-xl border border-[color:var(--secondary-100,#E8E8EA)] border-solid; shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)];'>
              <header className='flex flex-col items-start gap-[16px] self-stretch'>
                <Badge>Technology</Badge>
                <text className='self-stretch text-[color:var(--secondary-800,#181A2A)] text-4xl not-italic font-semibold leading-10; font-family: Work Sans;'>
                  Grid system for better Design User Interface
                </text>
              </header>
              <div className='flex items-center gap-[20px]'>
                <text className='text-[color:var(--secondary-400,#97989F)] text-base not-italic font-normal leading-6; font-family: Work Sans;'>August 20, 2022</text>
              </div>
            </div>
            <div className='inline-flex justify-center items-center rounded-md mt-[611px] ml-[1127px]'>
              <a className='px-[15px] py-[12px] items-center w-[40px] h-[40px] rounded-md border border-solid border-[#696A75];'>
                <img className=' w-[7.5px] h-[15px] left-4 top-3' src='./left.svg'></img>
              </a>
            </div>
            <div className='inline-flex justify-center items-center rounded-md mt-[611px] ml-[9px]'>
              <a className='px-[15px] py-[12px] items-center w-[40px] h-[40px] rounded-md border border-solid border-[#696A75];'>
                <img className='w-[7.5px] h-[15px]' src='./right.svg'></img>
              </a>
            </div>
          </div>

          <div className='flex h-[390px] flex-col items-center gap-[10px] shrink-0'>
            <div className='flex w-[1230px] h-[390px] flex-col items-center shrink-0'>
              <div className='flex w-[1231px] flex-col items-start gap-[30px]'>
                <div className='flex items-start gap-[32px]'>
                  <header className='w-[184px] text-[color:var(--secondary-800,#181A2A)] text-2xl not-italic font-bold leading-7; font-family: Work Sans;'>Trending</header>
                </div>
                <div className='flex items-start gap-[20px]'>
                  <Trending></Trending>
                  <Trending></Trending>
                  <Trending></Trending>
                  <Trending></Trending>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center gap-20 '>
              <div className='flex flex-col items-center gap-[32px]'>
                <header className='flex flex-col items-start gap-[32px] self-stretch'>
                  <text className='w-[184px] text-[color:var(--secondary-800,#181A2A)] text-2xl not-italic font-bold leading-7; font-family: Work Sans;'>All Blog Post</text>
                  <div className='flex w-[1216px] items-center gap-[30px]'>
                    <div className='flex items-center gap-[20px]'>
                      <a className='text-[#D4A373] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>All</a>
                      <a className='text-[#495057] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>Design</a>
                      <a className='text-[#495057] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>Travel</a>
                      <a className='text-[#495057] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>Fashion</a>
                      <a className='text-[#495057] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>Technology</a>
                      <a className='text-[#495057] text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>Branding</a>
                    </div>
                    <a className='flex-[1_0_0] text-[#495057] text-right text-xs not-italic font-bold leading-[25px]; font-family: Work Sans;'>View All</a>
                  </div>
                </header>
                <div className='flex flex-col items-start gap-[20px]'>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Posts></Posts>
      </div>
    </main>
  )
}
