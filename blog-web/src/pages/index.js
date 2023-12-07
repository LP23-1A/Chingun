import Image from 'next/image'
import { Inter } from 'next/font/google'
import Posts from './posts/page'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1>hello</h1>
      <Posts></Posts>
    </main>
  )
}
