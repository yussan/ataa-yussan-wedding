import Style from "./index.module.css";

const fontSize = {
  large: "75px",
  medium: "56px",
  small: "24px",
};

const Title = ({ style, children, size = "medium" }) => {
  return (
    <p
      style={{ ...{ fontSize: fontSize[size] }, ...style }}
      className={Style.title}
    >
      {children}
    </p>
  );
};

export default Title;
