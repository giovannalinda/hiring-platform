import type { NextPage } from 'next'
import Head from 'next/head'

import { Apresentation, Header, Layout } from '~/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Apresentation />
      <Layout.Content></Layout.Content>
    </>
  )
}

export default Home
