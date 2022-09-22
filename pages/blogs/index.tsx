import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../../app/components/layouts/Default'
import BlogsPage from '../../app/components/templates/blogs/Blogs'
import ProjectsPage from '../../app/components/templates/projects/Projects'

const PageHead = () => {
  return (
    <Head>
      <title>Portfolio - BLOGS</title>
    </Head>
  )
}

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <PageHead />
      <BlogsPage />
    </DefaultLayout>
  )
}


export default Home