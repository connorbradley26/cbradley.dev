import '@/styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  return <Component {...pageProps} />
}
