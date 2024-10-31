import Title from "../typography/Title";
import Style from "./index.module.css";

const Page2 = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.head}>
        {/* <div className={Style.headImage}> */}
        <img
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

      <Title size="large">We Found Love</Title>
    </div>
  );
};

export default Page2;
