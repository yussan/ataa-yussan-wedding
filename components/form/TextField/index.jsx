import Text from "../../typography/Text";
import Styles from "./index.module.css";

const TextField = ({ label, ...restProps }) => {
  return (
    <div className={Styles.wrapper}>
      {label && (
        <label>
          <Text style={{ margin: "0 0 10px" }} size="verysmall">
            {label}
          </Text>
        </label>
      )}
      <input type="text" {...restProps} />
    </div>
  );
};

export default TextField;
