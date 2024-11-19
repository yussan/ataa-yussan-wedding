import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Styles from "./index.module.css";

import WelcomePage from "../components/welcome";
import Page2 from "../components/page2";
import Page3 from "../components/page3";
import Page4 from "../components/page4";
import Page5 from "../components/page5";
import Page6 from "../components/page6";
import Page7 from "../components/page7";
import Footer from "../components/footer";

import Bird from "../components/commons/birds";

export default function Home() {
  const [ready, setReady] = useState(false);
  // const [isWelcome, setIsWelcome] = useState(true);

  const router = useRouter();
  const { guest, jam } = router?.query || {};

  // LIFECYCLES

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <>
      {!ready && (
        <div className={Styles.wrapperLogin}>
          <img
            className={Styles.loading}
            src="/assets/images/flower front 1.png"
            alt="loading"
          />
        </div>
      )}
      <div
        style={{ display: ready ? "inherit" : "none" }}
        className={Styles.wrapper}
      >
        <WelcomePage guestName={guest} />

        <Page2 />

        <Page3 />

        <img
          style={{ width: "100%", marginBottom: "-5px" }}
          src="/assets/images/common/gradient-green-yellow.jpeg"
        />

        <Page4 jam={jam} />

        <img
          style={{ width: "100%", marginBottom: "-5px" }}
          src="/assets/images/common/gradient-yellow-black.jpeg"
        />

        <Page5 />

        <Page6 />

        <Page7 />

        <Footer />

        {/* <Player /> */}

        {/* <Bird /> */}
      </div>
    </>
  );
}
