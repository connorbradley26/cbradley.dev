import '@/styles/globals.css'
import Layout from '@/ui/components/layout'
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </>
  )
}
