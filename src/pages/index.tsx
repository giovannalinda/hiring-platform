import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Services,
  Apresentation,
  Companies,
  Header,
  Layout,
} from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recruiter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Apresentation />
      <Companies />
      <Layout.Content>
        <Services />
      </Layout.Content>
    </>
  )
}

export default Home
