import Text from "../../typography/Text";
import Styles from "./index.module.css";

const Comments = ({ name, note, dateTime, commentCount }) => {
  const generateDate = (dateTime) => {
    const dt = new Date(dateTime);
    return `${dt.getDate()}-${
      dt.getMonth() + 1
    }-${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
  };

  return (
    <div className={Styles.wrapper}>
      <Text style={{ fontWeight: "bold" }} size="small">
        <strong>{name}</strong>
      </Text>
      <Text size="small">{note}</Text>
      <Text size="verysmall">{generateDate(dateTime)}</Text>
    </div>
  );
};

export default Comments;
