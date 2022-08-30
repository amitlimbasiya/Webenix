import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import FooterScript from '../components/FooterScript';
import BounceLoader from 'react-spinners/BounceLoader';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) { 
  useEffect(() => {
    setTimeout(() => {
      setLoadingStyle("display:none");
    }, 500);
  });
  let [color, setColor] = useState("#1ba78c");
  let [loadingStyle, setLoadingStyle] = useState("z-index: 999;  align-items: center;  justify-content: center;  width: 100%;  height: 100%;  background: #fff;  position: absolute; display:flex;");

  return <SSRProvider>
    <div ClassName="loader-wrapper" Style={loadingStyle}>
      <BounceLoader color={color} loading="true" size={75} className="loader" />
    </div>
    <Header/>
      <Component {...pageProps} />
      <FooterScript/>
      <Footer/> 
  </SSRProvider>
}


export default MyApp; 
