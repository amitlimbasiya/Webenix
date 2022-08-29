import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script defer src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
          {/* Start of HubSpot Embed Code */}
            <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/6378971.js"></script>
          {/* End of HubSpot Embed Code */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=UA-150436646-1" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-150436646-1');              
              `}
            </Script>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>        
      </Html>
    )
  }
}

export default MyDocument