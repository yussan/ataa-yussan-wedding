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
      </Head>
      <Component {...pageProps} />
      <Script src="https://www.google.com/recaptcha/api.js" />
    </>
  );
}
