import clsx from 'clsx'
import Head from 'next/head'
import * as fa from 'react-icons/fa'
import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import styles from '../styles/Home.module.css'
import { motion, Variants } from 'framer-motion'
import LocaleSwitcher from '../components/locale-switcher'
import LayoutHome, { sitleTitle } from '../components/layout/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
    const divVariants: Variants = {
        offscreen: {
            opacity: 0.1
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }
    const { t } = useTranslation('common')

    return (
        <LayoutHome>
            <Head>
                <title>{sitleTitle}</title>
            </Head>
            <div className={styles.containerDark}>
                <h1 className={styles.title}>{t('title')}</h1>
                <LocaleSwitcher />
            </div>
            <div className={styles.containerDark}>
                <motion.div
                    variants={divVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h1>{t('about')}</h1>
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
                            Lebih menyukai belajar secara otodidak
                        </li>
                        <li>
                            Gateron Brown {'>>>'}
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className={styles.containerDark}>
                <motion.div
                    variants={divVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.5 }}
                >
                <h1>{t('programming-skill')}</h1>
                <ul>
                    <li>
                        Bahasa: C/C++, Python, Java, PHP, JavaScript, TypeScript, Elisp, MySQL/MariaDB
                    </li>
                    <li>
                        Front end: React.js, Next.js, Jekyll, Bootstrap, TailwindCSS
                    </li>
                    <li>
                        Back end: Apache httpd, Nginx, Node.js, Express.js
                    </li>
                    <li>Teks editor/IDE: GNU Emacs, Visual Studio Code</li>
                    <li>
                        Lain-lain: Windows, Linux, Docker, Git, GitHub Actions
                    </li>
                </ul>
                </motion.div>
            </div>
            <div className={styles.containerDark}>
                <motion.div
                    variants={divVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.5 }}
                >
                <h1>{t('contact')}</h1>
                <div className={clsx("flex", "justify-center")}>
                        <ul className={clsx("list-none", "w-[fit-content]", styles.link)}>
                            <li><fa.FaAt className="inline mr-2" /><a href="mailto:afnazrie@gmail.com">
                                afnazrie@gmail.com
                            </a></li>
                            <li><fa.FaGithub className="inline mr-2" /><a href="https://github.com/mangkoran" target="_blank" rel="noreferrer">
                                mangkoran
                            </a></li>
                            <li><fa.FaTwitter className="inline mr-2" /><a href="https://twitter.com/mangkoran" target="_blank" rel="noreferrer">
                                @mangkoran
                            </a></li>
                            <li><fa.FaDiscord className="inline mr-2" /><a href="https://discordapp.com/users/391547930550599680" target="_blank" rel="noreferrer">
                                mangkoran#4645
                            </a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </LayoutHome>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations((locale as string ), ['common']), /* https://github.com/isaachinman/next-i18next/issues/1307 */
    },
})

export default Home
