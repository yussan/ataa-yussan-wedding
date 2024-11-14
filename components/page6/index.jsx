import { useState } from "react";
import Button from "../button";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Styles from "./index.module.css";

const eWallet = [
  {
    icon: "/assets/images/page-6/logo-bca.png",
    title: "BCA",
    text: "44556677 a/n Yusuf Akhsan H.",
  },
  {
    icon: "/assets/images/page-6/logo-mandiri.png",
    title: "Bank Mandiri",
    text: "1370011737968 a/n Yusuf Akhsan H.",
  },
  {
    icon: "/assets/images/page-6/logo-ovo.png",
    title: "OVO",
    text: "6285645777298 a/n Yusuf Akhsan H.",
  },
  {
    icon: "/assets/images/page-6/logo-linkaja.png",
    title: "LinkAja",
    text: "6285645777298 a/n Yusuf Akhsan H.",
  },
];

const Page6 = () => {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.contentInside}>
          <Title style={{ margin: "0 0 55px" }} size="large">
            Wedding Gift
          </Title>
          <Text size="small">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless
          </Text>

          {!showWallet && (
            <Button
              style={{
                width: "190px",
                backgroundColor: "#2A4234",
                color: "#FFF",
              }}
              onClick={() => setShowWallet(true)}
            >
              <strong>Klik Disini</strong>
            </Button>
          )}

          {showWallet && (
            <>
              {eWallet.map((n) => {
                return (
                  <div className={Styles.socmed}>
                    <img src={n.icon} alt={n.title} />
                    <Text style={{ fontSize: "13px", marginTop: "12px" }}>
                      {n.title}
                      <br />
                      {n.text}
                    </Text>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page6;
