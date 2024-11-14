import { useState } from "react";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Styles from "./index.module.css";
import TextField from "../form/TextField";
import TextArea from "../form/TextArea";

const Page7 = () => {
  const [valName, setValName] = useState("");
  const [valNote, setValNote] = useState("");
  const [valComming, setValComming] = useState(true);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.contentInside}>
          <Title style={{ margin: "0 0 55px" }} size="large">
            Ucapan dan Doa
          </Title>
          <Text size="small">Berikan ucapan terbaik untuk kedua mempelai</Text>
          <form>
            <TextField />
            <TextArea />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page7;
