import Layout from '../components/Layout'
import '../styles/globals.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
