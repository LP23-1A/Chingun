import Image from 'next/image'
import Header from '../pages/components/Header'
import Home from './api/Home'
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <main>
      <Home></Home>
      <Link href={"./api/test"}> pp</Link>
    </main>
  )
}
