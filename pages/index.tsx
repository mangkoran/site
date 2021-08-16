import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutHome, { sitleTitle } from '../components/layout/home'

const Home: NextPage = () => {
    return (
        <LayoutHome>
            <Head>
                <title>{sitleTitle}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h2>Halo, nama gua mangkoran!</h2>
                    <p>Selamat datang di website gua!</p>
                    <p>
                        Website ini dibuat menggunakan <code className={styles.code} > yarn create next-app --ts</code>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h2>Sekilas tentang mangkoran</h2>
                    <p>Gua adalah seorang pelajar yang sekarang sedang menempuh pendidikan{' '}
                        <em>bachelor degree</em> di Universiti Teknologi Malaysia, Johor.
                    </p>
                    <p>Beberapa bahasa yang telah gua kuasai: C/C++, Python, Oracle DBMS, Java,{' '}
                    HTML, CSS, PHP, JavaScript, TypeScript</p>

                    <p>Beberapa <em>framework</em> yang telah gua kuasai: Jekyll, React.js, Next.js</p>

                    <p>Beberapa <em>misc</em> yang telah gua kuasai: Apache, Docker, Linux, Git,{' '}
                    GitHub</p>
                </div>
            </div>
        </LayoutHome>
    )
}

export default Home
