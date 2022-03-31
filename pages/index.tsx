import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Search from './search'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CURIOUS NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search/>
      
    </div>
  )
}

export default Home
