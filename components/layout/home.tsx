import Head from 'next/head'

const name = 'mangkoran'
export const sitleTitle = 'Welcome to ' + name + ' site!'

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <meta name="description" content="mangkoran personal site" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutHome
