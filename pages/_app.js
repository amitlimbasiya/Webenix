import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import FooterScript from '../components/FooterScript';
import BounceLoader from 'react-spinners/BounceLoader';
import Script from 'next/script';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) { 
  useEffect(() => {
    setTimeout(() => {
      setLoadingStyle("display:none");
    }, 500);
  });
  let [color, setColor] = useState("#1ba78c");
  let [loadingStyle, setLoadingStyle] = useState("z-index: 999;  align-items: center;  justify-content: center;  width: 100%;  height: 100%;  background: #fff;  position: absolute; display:flex;");

  return(
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script 
        strategy="lazyOnload" 
        src={`https://www.googletagmanager.com/gtag/js?id=UA-150436646-1`} />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-150436646-1');
          `}
      </Script>
      <SSRProvider>
        <div className="loader-wrapper" Style={loadingStyle}>
          <BounceLoader color={color} loading="true" size={75} className="loader" />
        </div>
        <Header/>
          <Component {...pageProps} />
          <FooterScript/>
          <Footer/> 
      </SSRProvider>

  </>

  ) 
}


export default MyApp; 
