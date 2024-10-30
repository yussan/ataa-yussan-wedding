import Style from "./index.module.css";

// variant one of general, outline
const Button = ({ children, variant, onClick }) => {
  return (
    <button
      {...{ onClick }}
      className={`${Style.btn}  ${Style[`btn-${variant}`]}`}
    >
      {children}
    </button>
  );
};

export default Button;
