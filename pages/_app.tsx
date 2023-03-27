import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      
          <Component  {...pageProps} />
    </>
  )
}
