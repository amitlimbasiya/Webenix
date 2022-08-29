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
      <FooterScript/>
      <Footer/> 
  </SSRProvider>
}


export default MyApp; 
