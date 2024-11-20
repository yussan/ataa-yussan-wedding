import Text from "../../typography/Text";
import Styles from "./index.module.css";

const Comments = ({ name, message, createdAt, attend, showAttend }) => {
  const generateDate = (dateTime) => {
    const dt = new Date(dateTime);
    return `${dt.getDate()}-${
      dt.getMonth() + 1
    }-${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} WIB`;
  };

  return (
    <div className={Styles.wrapper}>
      <Text style={{ fontWeight: "bold" }} size="small">
        <strong>{name}</strong>
      </Text>
      <Text style={{ wordBreak: "break-word" }} size="small">
        {message}
      </Text>
      {showAttend && (
        <Text size="small">Kehadiran: {attend ? "Ya" : "Tidak"}</Text>
      )}
      <Text size="verysmall">{generateDate(createdAt)}</Text>
    </div>
  );
};

export default Comments;
