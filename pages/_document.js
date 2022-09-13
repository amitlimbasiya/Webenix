import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="author" content="Webenix Technologies"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script defer src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
          {/* Start of HubSpot Embed Code */}
            <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/6378971.js"></script>
          {/* End of HubSpot Embed Code */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script src="https://www.googletagmanager.com/gtag/js?id=UA-150436646-1" strategy="lazyOnload" />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());              
                gtag('config', 'UA-150436646-1');
              `}
            </Script>
            <Script type="application/ld+json">
                {`
                  "@context": "https://schema.org/",
                  "@type": "WebSite",
                  "name": "Webenix",
                  "url": "https://webenix.net/",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://webenix.net/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
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