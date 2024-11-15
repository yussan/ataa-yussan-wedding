import Style from "./index.module.css";

const fontSize = {
  large: "40px",
  medium: "25px",
  small: "18px",
};

const Text = ({ style, children, size = "medium" }) => {
  return (
    <div
      className={Style.title}
      style={{ ...{ fontSize: fontSize[size] }, ...style }}
    >
      {children}
    </div>
  );
};

export default Text;
