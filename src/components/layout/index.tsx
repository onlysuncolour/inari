import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.less'
import Link from 'next/link'

export const siteTitle = 'HEYWAGGER'

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Inari"
          content="hey, welcome to Inari's world"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link className={styles.menu} href="/">Home</Link>
        <Link className={styles.menu} href="/chat">Chat</Link>
      </header>
      {children}
    </div>
  )
}
