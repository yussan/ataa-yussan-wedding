import { useState } from "react";
import Styles from "./index.module.css";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Button from "../button";

const WelcomePage = ({ guestName = "FULL NAME" }) => {
  const [hide, useHide] = useState(false);

  const handleClickHide = () => {
    useHide(true);
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
        <Title style={{ fontWeight: "bold" }} size="large">
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
          Lihat Undangan
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
