import Head from 'next/head'
import React from 'react'

import HomeMain from '../components/HomeMain'
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>gledson.dev</title>
        <link rel="shortcut icon" href="/Icon/gIcon.png" />
      </Head>
      <HomeMain />
    </div>
  )
}

export default Home
