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
    <Layout home title="Home">
      <h1 className={clsx("pb-8")}>Afiq Nazrie</h1>
      <p className={clsx("pb-8")}>
        Computer Network and Security undergraduate student at Universiti Teknologi Malaysia.
        Interested in cloud computing, Kubernetes, and home server.
      </p>
      {/* <p className={clsx("pb-10")}>
        Qui aperiam deserunt tenetur sit provident quidem. Velit cum consequuntur animi labore neque animi. Tenetur harum facere natus necessitatibus aliquid voluptate dolor. Consectetur fugiat minus nam id debitis. Nam repellat nostrum quas quo. Sed non et rem.

        Hic debitis ut mollitia maiores vero ut ducimus. Doloribus ducimus omnis illum quis. Quis sed veritatis harum. Explicabo magni laborum commodi ab. Qui voluptas aut repellendus et quidem distinctio.

        Omnis ea earum quidem. Vel perspiciatis et labore dolor aut. Aperiam sequi delectus sunt dolor saepe. Eum at id cum dolor pariatur. Molestiae deleniti soluta sit nemo est.

        Dolorem placeat ex reiciendis labore. Omnis esse ut et. Harum pariatur excepturi voluptatibus. Tempore eos corrupti dolor. Quibusdam non alias aliquid ab sint. Minima amet facilis omnis et.

        Amet dolor quis iusto vel. Harum corrupti et sed voluptatem autem. Porro est mollitia earum autem provident. Et accusantium maxime ea laudantium dolores. Voluptas sunt et minus. Error ullam asperiores adipisci optio ducimus est soluta deleniti.

        Suscipit sapiente laborum autem ut eos ea aut. Minima ducimus totam temporibus tenetur cupiditate. Voluptatum quos temporibus sed et. Ipsum velit odio ut voluptatem optio. Possimus laboriosam rem laudantium quia eum enim qui.

        Ipsum non provident accusantium exercitationem ipsum cum. Sed est voluptatem distinctio sed. Animi provident quia delectus aspernatur esse. Praesentium qui molestiae saepe et.

        Et vel neque et excepturi nemo est. Aut qui laborum ex asperiores ut rerum. Dicta sed aut sapiente laboriosam. Similique sed fuga ab voluptatem maxime placeat. Ipsa ea magnam et officia fugit. Repudiandae sunt excepturi debitis repudiandae.

        Rerum qui quam rem optio. Et vel libero tenetur. Magni modi hic sequi.

        Dolorem tempora qui nesciunt atque magni numquam consequuntur vero. Amet ipsam asperiores atque et itaque. Officia pariatur aut ad. Porro expedita aliquid temporibus et ea.
      </p> */}
      <p>In my free time, I also like to: </p>
      <ul className={clsx("list-disc", "list-inside")}>
        <li>Build mechanical keyboards</li>
        <li>Collect chi-ems</li>
        <li>Read visual novels</li>
      </ul>
      {/* <ul>
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
      </ul> */}
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
