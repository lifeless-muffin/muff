import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../app/styles/Home.module.css'

const PageHead: NextPage = () => {
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
    <div className={styles.container}>
      <PageHead />
    </div>
  )
}


export default Home