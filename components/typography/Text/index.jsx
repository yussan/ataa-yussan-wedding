import Style from "./index.module.css";

const fontSize = {
  large: "40px",
  medium: "25px",
  small: "18px",
};

const Text = ({ style, children, size = "medium" }) => {
  return (
    <p
      className={Style.title}
      style={{ ...{ fontSize: fontSize[size] }, ...style }}
    >
      {children}
    </p>
  );
};

export default Text;
