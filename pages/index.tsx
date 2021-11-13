import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import * as fa from 'react-icons/fa'
import type { NextPage } from 'next'
import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import styles from '../styles/Home.module.css'
import { motion,
         Variants,
         useViewportScroll,
         useSpring,
         useTransform
} from 'framer-motion'
import LocaleSwitcher from '../components/locale-switcher'
import LayoutHome, { sitleTitle } from '../components/layout/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
    const divVariants: Variants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

    const { t } = useTranslation('common')

    return (
        <LayoutHome>
            <Head>
                <title>{sitleTitle}</title>
            </Head>
            <div className={clsx(styles.containerDark, "justify-center", "items-center")}>
                <div>
                    <h1 className={styles.title}>{t('title')}</h1>
                </div>
                <LocaleSwitcher />
            </div>
            <div className={clsx(styles.containerDark, "justify-center", "items-start")}>
                <motion.div
                    variants={divVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h1>{t('about.heading')}</h1>
                    <ul>
                        <li>
                            {t('about.school')}
                        </li>
                        <li>
                            {t('about.hometown')}
                        </li>
                        <li>
                            {t('about.interest-in-computer')}
                        </li>
                        <li>
                            {t('about.learning-style')}
                        </li>
                        <li>
                            Gateron Brown {'>>>'}
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className={clsx(styles.containerDark, "justify-center", "items-start")}>
                <motion.div
                    variants={divVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.5 }}
                >
                <h1>{t('programming-skill.heading')}</h1>
                    <h2>{t('programming-skill.lang')}</h2>
                    <p>
                        C/C++, Python, Java, PHP, JavaScript, TypeScript, Elisp, MariaDB
                    </p>
                    <h2>Front end</h2>
                    <p>
                        React.js, Next.js, Jekyll, Bootstrap, TailwindCSS
                    </p>
                    <h2>Back end</h2>
                    <p>
                        Apache httpd, Nginx, Node.js, Express.js
                    </p>
                    <h2>{t('programming-skill.editor')}</h2>
                    <p>
                        GNU Emacs, Vi/Vim/Nvim, Visual Studio Code
                    </p>
                    <h2>{t('programming-skill.other')}</h2>
                    <p>
                        Windows, Linux, Docker, Git, GitHub Actions
                    </p>
                </motion.div>
            </div>
            <div className={clsx(styles.containerDark, "justify-center", "items-center")}>
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
                            <li><fa.FaDiscord className="inline mr-2" /><a href="https://discordapp.com/users/391547930550599680" target="_blank" rel="noreferrer">
                                mangkoran#4645
                            </a></li>
                            <li><fa.FaTwitter className="inline mr-2" /><a href="https://twitter.com/mangkoran" target="_blank" rel="noreferrer">
                                @mangkoran
                            </a></li>
                            <li><fa.FaGithub className="inline mr-2" /><a href="https://github.com/mangkoran" target="_blank" rel="noreferrer">
                                mangkoran
                            </a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <svg className={styles.progressIcon} viewBox="0 0 40 40">
            <motion.path
                    fill="none"
                    strokeWidth="2"
                    stroke="#f3f4f6"
                    strokeDasharray="0 1"
                    strokeLinecap="round"
                    d="M 0,10
                       a 10,10 0 1,0 20,0
                       a 10,10 0 1,0 -20,0"
                    style={{
                        pathLength,
                        rotate: 91,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                    />
            </svg>
        </LayoutHome>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations((locale as string ), ['common']), /* https://github.com/isaachinman/next-i18next/issues/1307 */
    },
})

export default Home
