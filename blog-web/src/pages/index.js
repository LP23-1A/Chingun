import Image from 'next/image'
import Header from './components/Header'
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`w-screen h-auto m-0 px-96 ,${inter.className}`}>
      <Header />
    </main>
  )
}
