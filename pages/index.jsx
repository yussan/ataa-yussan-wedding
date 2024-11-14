import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Styles from "./index.module.css";

import WelcomePage from "../components/welcome";
import Page2 from "../components/page2";
import Page3 from "../components/page3";
import Page4 from "../components/page4";
import Page5 from "../components/page5";
import Page6 from "../components/page6";
import Page7 from "../components/page7";

export default function Home() {
  const [ready, setReady] = useState(false);
  // const [isWelcome, setIsWelcome] = useState(true);

  const router = useRouter();
  const { guest } = router?.query || {};

  // LIFECYCLES

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 800);
  }, []);

  if (!ready)
    return (
      <div className={Styles.wrapperLogin}>
        <img
          className={Styles.loading}
          src="/assets/images/flower front 1.png"
          alt="loading"
        />
      </div>
    );

  return (
    <div className={Styles.wrapper}>
      <WelcomePage guestName={guest} />

      <Page2 />

      <Page3 />

      <Page4 />

      <Page5 />

      <Page6 />

      <Page7 />
    </div>
  );
}
