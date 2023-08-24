import React from 'react'
import Head from 'next/head'

import '../style.css'

const AppWrapper = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Working Title</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default AppWrapper
