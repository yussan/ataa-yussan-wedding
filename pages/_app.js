// `pages/_app.js`
import Head from "next/head";
import Script from "next/script";
import "../styles/global.css";
import "../styles/splide.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://www.google.com/recaptcha/api.js"></Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
