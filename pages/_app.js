// `pages/_app.js`
import Head from "next/head";
import "../styles/global.css";
import "../styles/splide.min.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ataa & Yussan Wedding Invitation</title>
      </Head>
      <Component {...pageProps} />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HY2HHJ0H8C"
      />
      <Script>
        {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HY2HHJ0H8C');
    `}
      </Script>
    </>
  );
}
