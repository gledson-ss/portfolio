import Head from 'next/head'
import React from 'react'

import Header from '../components/Header'
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>gledson.dev</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
