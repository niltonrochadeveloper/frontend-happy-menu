import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4250/')
    
    const datas = await response.json()

    return {
      props: {
        datas
      }
    }
}

export default function Home(datas: any) {

  const data = datas

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={data.canonical} />

      </Head>
      


      </>
  )
}
