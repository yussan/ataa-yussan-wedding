import Title from "../typography/Title";
import Text from "../typography/Text";
import Style from "./index.module.css";
import ContentBox from "../commons/content";
import Countdown from "../commons/countdown";
import BtnCalendar from "../commons/buttons/btnCalendar";

const Page2 = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.head}>
        <img
          className={Style.headImage}
          src="/assets/images/page-2/STY01998 1.png"
          alt="Ataa and Yussan intro"
        />
        {/* </div> */}

        <img
          className={`${Style.headFlower} ${Style.headFlowerLeft}`}
          src="/assets/images/page-2/pngegg 1.png"
        />
        <img
          className={`${Style.headFlower} ${Style.headFlowerRight}`}
          src="/assets/images/page-2/pngegg 2.png"
        />
      </div>
      <ContentBox>
        <Title
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "43px",
            marginTop: 0,
            fontSize: "80px",
          }}
          size="large"
        >
          We Found Love
        </Title>

        <Text style={{ color: "#fff" }} size="small">
          “When you realize you want to spend the rest of your life with
          somebody, you want the rest of your life to start as soon as
          possible.” — When Harry Met Sally
        </Text>

        <hr />

        <Countdown />

        <BtnCalendar />
      </ContentBox>
    </div>
  );
};

export default Page2;
