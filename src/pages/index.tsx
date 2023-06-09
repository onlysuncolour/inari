import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './index.module.less'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inari</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div >
          <p>
            welcome to my world
          </p>
          <div>
            <a
              href="http://www.yyoga.top/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              Young
            </a>
          </div>
        </div>

        <div >
          Inari
        </div>

        <div >
          <Link href="/chat" >
            <h2 >
              Chat<span>-&gt;</span>
            </h2>
            <p >
              Actually you will talk to chat-gpt
            </p>
          </Link>
          <a >
            <h2 >
              Me <span>-&gt;</span>
            </h2>
            <p >
              You can find more about me
            </p>
          </a>

          <a >
            <h2 >
              Family <span>-&gt;</span>
            </h2>
            <p >
              You can find more about my family
            </p>
          </a>

          <a >
            <h2 >
              Protugal <span>-&gt;</span>
            </h2>
            <p >
              {"ola I'm here"}
            </p>
          </a>
        </div>
    </Layout>
  )
}
