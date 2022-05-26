import type { NextPage } from 'next'
import clsx from 'clsx';
import Head from 'next/head'
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={clsx("pb-10")}>Afiq Nazrie</h1>
      <p>
        Computer Network and Security undergradute student at Universiti Teknologi Malaysia.
        Interested in cloud computing, Kubernetes, and home server.
      </p>
    </Layout>
  )
}

export default Home
