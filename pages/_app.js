import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import FooterScript from '../components/FooterScript';

import '../styles/globals.css';
NProgress.configure(
  {showSpinner:false}
)
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) { 
  return <SSRProvider>
    <Header/>
      <Component {...pageProps} />
      <FooterScript/>
      <Footer/> 
  </SSRProvider>
}


export default MyApp; 
