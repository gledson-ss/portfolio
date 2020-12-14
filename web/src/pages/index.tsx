import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'
import HomeMain from '../components/HomeMain'
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>gledson.dev</title>
      </Head>
      <Header />

      <HomeMain />
    </div>
  )
}

export default Home
