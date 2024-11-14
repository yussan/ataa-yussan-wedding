import Splide from "@splidejs/splide";
import Styles from "./index.module.css";
import Title from "../typography/Title";
import Text from "../typography/Text";
import { useEffect } from "react";

const page5 = () => {
  const images = [
    "/assets/images/page-5/STY01859.jpeg",
    "/assets/images/page-5/STY01859.jpeg",
    "/assets/images/page-5/STY01859.jpeg",
    "/assets/images/page-5/STY01859.jpeg",
  ];

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      // padding: "5rem",
    });

    splide.mount();
  }, []);

  return (
    <div className={Styles.wrapper}>
      <Title size="large" style={{ margin: "0 0 15px" }}>
        Captured Moments
      </Title>
      <Text size="small">
        Every Love Story is Beautiful, But Ours Is My Favorite
      </Text>
      <hr />
      <section className="splide" aria-label="Splide Basic HTML Example">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((n, key) => (
              <li {...{ key }} className="splide__slide">
                <div
                  className={Styles.imageSlide}
                  style={{ backgroundImage: `url(${n})` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page5;
