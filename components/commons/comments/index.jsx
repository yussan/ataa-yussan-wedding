import Text from "../../typography/Text";
import Styles from "./index.module.css";

const Comments = ({ name, note, dateTime, commentCount }) => {
  return (
    <div className={Styles.wrapper}>
      <Text>
        <strong>{name}</strong>
      </Text>
      <Text>{note}</Text>
      <Text>
        {dateTime} <strong>Balas</strong>
      </Text>
    </div>
  );
};

export default Comments;
