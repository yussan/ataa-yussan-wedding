import { useEffect, useState } from "react";
import Styles from "./index.module.css";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Button from "../button";

const WelcomePage = ({ guestName = "FULL NAME" }) => {
  const [hide, useHide] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const nextAudio = new Audio(
      "/audio/Nyoman Paul, Andi Rianto – The Way You Look At Me (Official Music Video) - small.mp3"
    );
    setAudio(nextAudio);
  }, []);

  useEffect(() => {
    if (audio) {
      audio.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play();
        },
        false
      );
    }
  }, [audio]);

  const handleClickHide = () => {
    useHide(true);
    document.body.style.overflow = "auto";
    audio.play();
  };

  return (
    <div className={`${Styles.wrapper}  ${hide && Styles["wrapper-hide"]}`}>
      <div className={Styles.top}>
        <img
          style={{ width: "55px" }}
          src="assets/images/yna/AY Logo.svg"
          alt="Top Logo"
        />
        <Text style={{ marginBottom: "-2px" }} size="small">
          The Wedding of
        </Text>
        <Title style={{ fontWeight: "bold", marginLeft: "-20px" }} size="large">
          Ataa & Yusuf
        </Title>
      </div>
      <div className={Styles.bottom}>
        <Text style={{ marginBottom: "10px", lineHeight: "22px" }} size="small">
          Kepada Yth
          <br />
          Bapak/Ibu/Saudara/i
        </Text>
        <Text style={{ marginBottom: "12px" }} size="large">
          <strong>{guestName.toUpperCase()}</strong>
        </Text>
        <Button onClick={handleClickHide} variant="outline">
          <strong>Lihat Undangan</strong>
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
