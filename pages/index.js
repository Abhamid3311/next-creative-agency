import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Home/Banner'
import Partner from '../components/Home/partner'
import Projects from '../components/Home/projects'
import Services from '../components/Home/Service/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Agency</title>
        <meta name="description" content="Creative Agency" />
        <meta name="keywords" content="Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner />
        <Partner />
        <Services />
        <Projects />

      </div>


    </>
  )
}
