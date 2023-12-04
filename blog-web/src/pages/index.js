import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex justify-between  ,${inter.className}`}>
      <div >
        <div>
          <div>
            <img src=''></img>
            <div>
              <div>
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
              <div>
                <div>
                  search
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  )
}
