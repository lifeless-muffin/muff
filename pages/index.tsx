import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../app/components/layouts/Default'
import HomePage from '../app/components/templates/home/Home'

const PageHead = () => {
  return (
    <Head>
      <title>Portfolio - HOME</title>
      <meta name="description" content="lkjdlasfj" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <PageHead />
      <HomePage />
    </DefaultLayout>
  )
}


export default Home