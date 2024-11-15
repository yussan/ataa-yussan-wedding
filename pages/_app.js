// `pages/_app.js`
import Head from "next/head";
import "../styles/global.css";
import "../styles/splide.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ataa & Yussan Wedding Invitation</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
