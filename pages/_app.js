import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import FooterScript from '../components/FooterScript';

import '../styles/globals.css';



function MyApp({ Component, pageProps }) { 
  return <SSRProvider>
    <Header/>
      <Component {...pageProps} />
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script defer src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
      <FooterScript/>
      <Footer/> 
  </SSRProvider>
}


export default MyApp; 
