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
                <h1 className={styles.title}>Halo, nama saya mangkoran!</h1>
                <p>
                    {/* Website ini dibuat menggunakan{' '}
                        <code className={styles.code}> yarn create next-app --ts</code> */}
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
                        Berasal dari Kota Pahlawan, namun sekarang (masih) tinggal bersama keluarga di Paris Van Java
                    </li>
                    <li>
                        Mulai tertarik pada dunia perkomputeran sejak duduk di bangku SMP.
                        Pada saat inilah mangkoran pertama kali berjumpa dengan Linux
                    </li>
                    <li>
                        Lebih menyukai belajar secara otodidak dan langsung diimplementasikan
                    </li>
                    <li>
                        Gateron Brown {'>>>'}
                    </li>
                </ul>
            </div>
            <div className={styles.containerDark}>
                <h1>Kemampuan teknikal pemrograman yang telah dikuasai</h1>
                <ul>
                    <li>
                        Bahasa: C/C++, Python, Oracle DBMS, Java, PHP, JavaScript, TypeScript, Elisp
                    </li>
                    <li>
                        Framework: Jekyll, Node.js, React.js, Next.js, Bootstrap, TailwindCSS
                    </li>
                    <li>
                        Lain-lain: Apache, Nginx, Docker, Windows, Linux, Git, GitHub Actions
                    </li>
                </ul>
            </div>
            <div className={styles.containerDark}>
                <h1>Mari berkolaborasi</h1>
                <ul className="list-none">
                    <li><fa.FaAt className="inline mr-2" /><a className={styles.link} href="mailto:afnazrie@gmail.com">
                        afnazrie@gmail.com
                    </a></li>
                    <li><fa.FaGithub className="inline mr-2" /><a className={styles.link} href="https://github.com/mangkoran" target="_blank">
                        mangkoran
                    </a></li>
                    <li><fa.FaTwitter className="inline mr-2" /><a className={styles.link} href="https://twitter.com/mangkoran" target="_blank">
                        @mangkoran
                    </a></li>
                    <li><fa.FaDiscord className="inline mr-2" /><a className={styles.link} href="https://discordapp.com/users/391547930550599680" target="_blank">
                        mangkoran#4645
                    </a></li>
                </ul>
            </div>
        </LayoutHome>
    )
}

export default Home
