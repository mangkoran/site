import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutHome, { sitleTitle } from '../components/layout/home'
import * as fa from 'react-icons/fa'

const Home: NextPage = () => {
    return (
        <LayoutHome>
            <Head>
                <title>{sitleTitle}</title>
            </Head>
            <div className={styles.containerDark}>
                <h1>Halo, nama gua mangkoran!</h1>
                <p>Selamat datang di website gua!</p>
                <p>
                    Website ini dibuat menggunakan{' '}
                    <code className={styles.code}> yarn create next-app --ts</code>
                </p>
            </div>
            <div className={styles.containerDark}>
                <h1>Sekilas tentang mangkoran</h1>
                <ul>
                    <li>
                        Seorang pelajar yang sekarang sedang menempuh pendidikan{' '}
                        <em>bachelor degree</em> di Universiti Teknologi Malaysia, Johor
                    </li>
                    <li>
                        Beberapa bahasa yang telah dikuasai: C/C++, Python, Oracle DBMS, Java,{' '}
                        HTML, CSS, PHP, JavaScript, TypeScript
                    </li>
                    <li>
                        Beberapa <em>framework</em> yang telah dikuasai: Jekyll, React.js,{' '}
                        Next.js, Bootstrap, TailwindCSS
                    </li>
                    <li>
                        Beberapa <em>misc</em> yang telah dikuasai: Apache, Docker, Linux, Git,{' '}
                        GitHub
                    </li>
                </ul>
            </div>
            <div className={styles.containerDark}>
                <h1>Mari berkolaborasi</h1>
                <ul className="list-none">
                    <li><fa.FaAt className="inline mr-2" />afnazrie@gmail.com</li>
                    <li><fa.FaGithub className="inline mr-2" />github.com/mangkoran</li>
                    <li><fa.FaTwitter className="inline mr-2" />@mangkoran</li>
                    <li><fa.FaDiscord className="inline mr-2" />mangkoran#0002</li>
                </ul>
            </div>
        </LayoutHome>
    )
}

export default Home
