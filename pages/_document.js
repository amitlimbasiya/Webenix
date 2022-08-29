import Document, { Html, Head,  Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="author" content="Webenix Technologies"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
          <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
          <script defer src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
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