import Styles from "./index.module.css";
import Title from "../typography/Title";
import Text from "../typography/Text";

const Page4 = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <Title style={{ margin: 0 }} size="large">
          Akad Nikah
        </Title>
        <Text size="small">InsyaAllah akan dilaksanakan pada:</Text>
        <div style={{ textAlign: "center" }}>
          <Text size="medium">
            <strong>
              SABTU
              <br />
              14 . 12 . 2024
            </strong>
          </Text>
          <Text size="small">
            Pukul 19:00 WIB - Selesai
            <br />
            Di Jl. Tirtotejo No. 28,
            <br /> Kel. Cokromenggalan, Ponorogo, Jawa Timur
          </Text>
        </div>

        <img
          className={Styles.preview}
          src="/assets/images/page-4/cover.png"
          alt="acara nikah"
        />

        <Title style={{ margin: 0 }} size="large">
          Resepsi
        </Title>
        <Text size="small">InsyaAllah akan dilaksanakan pada:</Text>
        <div>
          <Text size="medium">
            <strong>
              MINGGU
              <br />
              15 . 12 . 2024
            </strong>
          </Text>
          <Text size="small">
            Pukul 11:00 WIB - Selesai
            <br />
            Di Gedung Expotorium UNMUH,
            <br /> Kab. Ponorogo, Jawa Timur
            <br />
            <br />
            <a
              href="https://maps.app.goo.gl/uFmAGNUscuKUHcX57"
              target="_blank"
              re="noopener norefer"
              style={{
                color: "#2A4234",
                display: "flex",
                gap: "12px",
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/images/page-4/gps_icon.png"
                alt="pin poin location"
              />
              Klik untuk lokasi gedung
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Page4;
