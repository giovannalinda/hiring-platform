import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Services,
  Apresentation,
  Companies,
  Header,
  Layout,
  HiringProcess,
  Workflow,
  Customer,
  Banner,
} from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiring Platform</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Apresentation />
      <Companies />
      <Layout.Content>
        <Services />
        <HiringProcess />
        <Workflow />
        <Customer />
        <Banner />
      </Layout.Content>
    </>
  )
}

export default Home
