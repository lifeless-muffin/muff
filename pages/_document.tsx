import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          
          <link 
            as="style"
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&display=swap" 
          />

          <link 
            media="print"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&display=swap" 
          />
          

          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Lato:wght@300;400;700;900&display=swap"
            />
          </noscript>
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