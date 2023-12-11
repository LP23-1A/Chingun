import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './posts/page'
import Navbar from './navbar'
import Badge from './components/a-badge'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='inline-flex pb-[543px] flex-col items-center mx-auto'>
      <div className='flex flex-col items-start gap-[100px]'>
        <Navbar></Navbar>
        <div className='flex h-[3005px] flex-col items-center gap-[100px]'>
          <div className='w-[1226px] h-[651px shrink-0] relative mr-[800px]'>
            <img src='./Image.png' className='w-[1216px] h-[600px] shrink-0 rounded-xl absolute' ></img>
            <div className='bg-white absolute flex w-[598px] p-[40px] flex-col items-start gap-[24px] rounded-xl border border-[color:var(--secondary-100,#E8E8EA)] border-solid; shadow-[0px_12px_24px_-6px_rgba(24,26,42,0.12)];'>
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
          </div>
        </div>
        <Posts></Posts>
      </div>
    </main>
  )
}
