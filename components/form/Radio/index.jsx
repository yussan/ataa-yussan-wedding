import Styles from "./index.module.css";
import Text from "../../typography/Text";

const Radio = ({ label, value, onChange }) => {
  const handleClick = (val) => {
    onChange(val);
  };

  return (
    <div className={Styles.wrapper}>
      {label && (
        <label>
          <Text style={{ margin: "0 0 10px" }} size="verysmall">
            {label}
          </Text>
        </label>
      )}
      <div className={Styles.radio}>
        <div>
          <input
            onClick={() => handleClick("yes")}
            id="yes"
            type="radio"
            value="yes"
            checked={value === "yes"}
          />
          <label for="yes">Hadir</label>
        </div>
        <div>
          <input
            onClick={() => handleClick("no")}
            id="no"
            type="radio"
            value="no"
            checked={value === "no"}
          />
          <label for="no">Belum Bisa Hadir</label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
