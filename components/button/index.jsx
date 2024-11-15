import Style from "./index.module.css";

// variant one of general, outline
const Button = ({
  children,
  className = "",
  variant = "solid",
  ...restProps
}) => {
  return (
    <button
      className={`${Style.btn} ${Style[`btn-${variant}`]} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
