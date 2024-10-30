import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Styles from "./index.module.css";

import WelcomePage from "../components/welcome";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);

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
      <div>haha</div>
    </div>
  );
}
