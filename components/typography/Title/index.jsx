import Style from "./index.module.css";

const fontSize = {
  large: "75px",
  medium: "46px",
  small: "24px",
};

const Title = ({ style, children, size = "medium" }) => {
  return (
    <p
      className={Style.title}
      style={{ ...{ fontSize: fontSize[size] }, ...style }}
    >
      {children}
    </p>
  );
};

export default Title;
