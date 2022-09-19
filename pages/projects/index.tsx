import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '../../app/components/layouts/Default'
import ProjectsPage from '../../app/components/templates/projects/Projects'

const PageHead = () => {
  return (
    <Head>
      <title>Portfolio - PROJECTS</title>
    </Head>
  )
}

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <PageHead />
      <ProjectsPage />
    </DefaultLayout>
  )
}


export default Home