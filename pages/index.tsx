import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutHome, { sitleTitle } from '../components/layout/home'
// import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
    return (
        <LayoutHome>
            <Head>
                <title>{sitleTitle}</title>
            </Head>
            <div className={styles.containerLight}>
                <div className={styles.description}>
                    <h2>Halo, nama gua mangkoran!</h2>
                    <p>Selamat datang di website gua!</p>
                    <p>
                        Website ini dibuat menggunakan{' '}
                        <code className={styles.code}> yarn create next-app --ts</code>
                    </p>
                </div>
            </div>
            <div className={styles.containerLight}>
                <div className={styles.description}>
                    <h2>Sekilas tentang mangkoran</h2>
                    <ul>
                        <li>
                            <p>
                                Seorang pelajar yang sekarang sedang menempuh pendidikan{' '}
                                <em>bachelor degree</em> di Universiti Teknologi Malaysia, Johor.
                            </p>
                        </li>
                        <li>
                            <p>
                                Beberapa bahasa yang telah dikuasai: C/C++, Python, Oracle DBMS, Java,{' '}
                                HTML, CSS, PHP, JavaScript, TypeScript
                            </p>
                        </li>
                        <li>
                            <p>
                                Beberapa <em>framework</em> yang telah dikuasai: Jekyll, React.js, Next.js,{' '}
                                Bootstrap, TailwindCSS
                            </p>
                        </li>
                        <li>
                            <p>
                                Beberapa <em>misc</em> yang telah dikuasai: Apache, Docker, Linux, Git,{' '}
                                GitHub
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </LayoutHome>
    )
}

export default Home
