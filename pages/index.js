import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import Feedbacks from '../components/Home/Feedback/Feedbacks'
import Partner from '../components/Home/Partner'
import Projects from '../components/Home/Projects'
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
        <Feedbacks />
        <Contact />

      </div>


    </>
  )
}
