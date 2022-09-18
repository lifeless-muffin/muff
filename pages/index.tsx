import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../app/components/layouts/Default'
import HomePage from '../app/components/templates/home/Home'

const PageHead = () => {
  return (
    <Head>
      <title>Portfolio - HOME</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="I’m a web developer that likes to create web applications using the latest technology. I’m currently working as a freelance web developer." />
      <meta name="keywords" content="Mansoor Roeen, Mansoor, portfolio, blog, developer, freelancer, coder" />
      <meta name="author" content="Mansoor Roeen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:card" content="/assets/placeholder-image.jpg" />
      <meta name="twitter:creator" content="@Mansoor Roeen" />
      <meta name="twitter:title" content="Personal Portfolio" />
      <meta name="twitter:description" content="I’m a web developer that likes to create web applications using the latest technology. I’m currently working as a freelance web developer." />
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