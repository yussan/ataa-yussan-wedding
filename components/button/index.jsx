import Style from "./index.module.css";

// variant one of general, outline
const Button = ({ children, variant = "solid", onClick, ...restProps }) => {
  return (
    <button
      {...{ onClick }}
      className={`${Style.btn}  ${Style[`btn-${variant}`]}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
