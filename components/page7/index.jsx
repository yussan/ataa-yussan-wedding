import { useEffect, useState } from "react";
import Script from "next/script";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Styles from "./index.module.css";
import TextField from "../form/TextField";
import TextArea from "../form/TextArea";
import Radio from "../form/Radio";
import Button from "../button";
import Comment from "../commons/comments";

const dummyComment = [
  {
    id: "1234",
    name: "Aldia Itii Rihmitiki",
    note: "Sayang semua kok",
    dateTime: "2024-11-15T03:49:12Z",
    attendance: "yes",
  },
];

const LOCAL_STORAGE_KEY = "yna_comments";

const Page7 = () => {
  const [valName, setValName] = useState("");
  const [valNote, setValNote] = useState("");
  const [valComming, setValComming] = useState("yes");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(valName, valNote, valComming);
    grecaptcha.ready(function () {
      grecaptcha
        .execute("6Le-Rn4qAAAAAHHhOEta7v6chIqg2QHwTmdewGII", {
          action: "submit",
        })
        .then(function (token) {
          // Add your logic to submit to your backend server here.
          if (!token) {
            alert("Mohon ulangi rechaptcha tidak valid!");
          } else {
            // submit to BE
            saveComments();
          }
        });
    });
  };

  const fetchComments = () => {
    const commentData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (commentData) {
      const commentDataArr = JSON.parse(commentData);
      setComments(commentDataArr);
    }
  };

  const saveComments = () => {
    const currComment = [...comments];
    currComment.unshift({
      name: valName,
      note: valNote,
      dateTime: new Date().toISOString(),
      attendance: valComming,
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currComment));

    fetchComments();
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.contentInside}>
          <Title style={{ margin: "0 0 55px" }} size="large">
            Ucapan dan Doa
          </Title>
          <Text size="small">Berikan ucapan terbaik untuk kedua mempelai</Text>
          <form method="post" onSubmit={handleSubmit}>
            <TextField
              label="Nama*"
              value={valName}
              onChange={(e) => {
                setValName(e.target.value);
              }}
              required
            />
            <TextArea
              label="Ucapan*"
              value={valNote}
              rows={5}
              onChange={(e) => {
                setValNote(e.target.value);
              }}
              required
            />
            <Radio
              value={valComming}
              label="Kehadiran*"
              onChange={(val) => {
                setValComming(val);
              }}
              required
            />

            <Button
              // className="g-recaptcha"
              // data-sitekey="6Le-Rn4qAAAAAHHhOEta7v6chIqg2QHwTmdewGII"
              // data-callback="onSubmit"
              // data-action="submit"
              type="submit"
              style={{
                width: "190px",
                backgroundColor: "#2A4234",
                color: "#FFF",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  marginRight: "20px",
                }}
              >
                <img
                  src="/assets/images/page-7/submit.png"
                  alt="Submit button"
                  style={{ marginRight: "20px" }}
                />
                <strong>Submit</strong>
              </div>
            </Button>
          </form>

          <br />
          <br />

          <div>
            {comments.length < 1 ? (
              <Text size="small">Belum ada pesan</Text>
            ) : (
              comments.map((n) => {
                return <Comment {...n} />;
              })
            )}
          </div>
        </div>
      </div>

      <Script src="https://www.google.com/recaptcha/api.js?render=6Le-Rn4qAAAAAHHhOEta7v6chIqg2QHwTmdewGII" />
    </div>
  );
};

export default Page7;
