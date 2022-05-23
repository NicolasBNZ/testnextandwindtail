import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
    <h1 className="text-3xl font-bold flex item-center group-hover:text-blue-200">
      Hello world!
    </h1>
    <p className='customtext'>
      Coucou
    </p>
 </div>
  )
}