import Title from "../typography/Title";
import Text from "../typography/Text";
import Styles from "./index.module.css";

const Page3 = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.contentCatin}>
          <img src="/assets/images/page-3/ataa.png" alt="Catin Ataa" />
          <Title style={{ margin: "15px 0 10px" }} size="large">
            Ataa
          </Title>
          <Title style={{ fontSize: "35px", margin: "0 0 30px" }} size="medium">
            Aldia Ataa Rahmatika, S.Pi
          </Title>
          <Text size="small">
            Putri dari <br />
            Bapak Sugeng Mugiarta &<br /> Ibu Hj. Darmini S. Ag
          </Text>
          <div className={Styles.socmed}>
            <a
              href="https://instagram.com/aldia_ataa"
              title="Go To Aldia Ataa Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/page-3/instagram-logo.png"
                alt="Instagram logo"
              />
              <Text size="verysmall">@aldia_ataa</Text>
            </a>
          </div>
        </div>
        <div className={Styles.contentCatin}>
          <img src="/assets/images/page-3/yussan.png" alt="Catin Ataa" />
          <Title style={{ margin: "15px 0 10px" }} size="large">
            Yusuf
          </Title>
          <Title style={{ fontSize: "35px", margin: "0 0 30px" }} size="medium">
            Yusuf Akhsan Hidayat, S.Kom
          </Title>
          <Text size="small">
            Putra dari <br />
            Bapak H. Moh Djumhuri, S.H. &<br /> Ibu Hj. Sriani
          </Text>
          <div className={Styles.socmed}>
            <a
              href="https://instagram.com/yussan.id"
              title="Go To Yussan Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/page-3/instagram-logo.png"
                alt="Instagram logo"
              />
              <Text size="verysmall">@yussan.id</Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
