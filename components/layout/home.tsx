import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const name = 'mangkoran'
export const sitleTitle = 'Welcome to ' + name + ' site!'

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <meta name="description" content="mangkoran personal site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutHome
