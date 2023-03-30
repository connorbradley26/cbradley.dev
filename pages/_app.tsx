import '@/styles/globals.css'
import Layout from '@/ui/components/layout'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Connor Bradley | Software Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Connor Bradley is a Full Stack Software Developer skilled in React and Next.js. This page highlights his expertise and experience in developing web applications." />
      <meta name="keywords" content="Connor Bradley, Software Developer, Full Stack Developer, React, Next.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, Mongoose, HTML, CSS, SASS, Tailwind, Bootstrap, Material UI, Material Design, Materialize, Bulma, Semantic UI, UI, UX, User Interface, User Experience, Front End, Front-End, Back End, Back-End, Developer, Engineer, Freelance, Freelancer, Contract, Contracting, Contract Work, United Kingdom, UK, Macclesfield, Cheshire, Hire Software Developer, Tech Lead, Head of Software, Head of Front end, 3D developer." />
    </Head>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </>
  )
}
