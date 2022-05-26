import type { NextPage } from 'next'
import clsx from 'clsx';
import Head from 'next/head'
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts'

const Home = ({ allPostsData }: {
  allPostsData: {
    date: string,
    title: string,
    id: string
  }[]
}) => {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={clsx("pb-10")}>Afiq Nazrie</h1>
      <p className={clsx("pb-10")}>
        Computer Network and Security undergradute student at Universiti Teknologi Malaysia.
        Interested in cloud computing, Kubernetes, and home server.
      </p>
      <ul>
        {allPostsData.map(({ id, date, title }: {
          id: string,
          date: string,
          title: string
        }) => (
          <li key={id} className={clsx("pb-4")}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export { getStaticProps };
export default Home;
