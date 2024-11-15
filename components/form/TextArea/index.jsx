import Text from "../../typography/Text";
import Styles from "./index.module.css";

const TextAreaField = ({ label, ...restProps }) => {
  return (
    <div className={Styles.wrapper}>
      {label && (
        <label>
          <Text style={{ margin: "0 0 10px" }} size="verysmall">
            {label}
          </Text>
        </label>
      )}
      <textarea {...restProps} />
    </div>
  );
};

export default TextAreaField;
