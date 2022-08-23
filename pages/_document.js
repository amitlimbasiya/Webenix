import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"></Script>
          <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument