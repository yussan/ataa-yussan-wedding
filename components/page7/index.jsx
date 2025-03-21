import { useState } from "react";
import Script from "next/script";
import Title from "../typography/Title";
import Text from "../typography/Text";
import Styles from "./index.module.css";
import TextField from "../form/TextField";
import TextArea from "../form/TextArea";
import Radio from "../form/Radio";
import Button from "../button";
import Comment from "../commons/comments";
import CommentData from "../../data/comments.json";

const Page7 = ({ showAttend }) => {
  const [valName, setValName] = useState("");
  const [valNote, setValNote] = useState("");
  const [valComming, setValComming] = useState("yes");
  const [loading, setLoading] = useState(false);

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

  const saveComments = async () => {
    setLoading(true);

    const payload = {
      name: valName,
      message: valNote,
      attend: valComming,
    };

    const data = await fetch(`/api/form`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const dataJson = await data.json();

    if (dataJson?.status === 201) {
      fetchComments();

      // reset form value
      setValName("");
      setValNote("");
      setValComming("yes");

      setLoading(false);
    } else {
      setLoading(false);
    }

    alert(dataJson?.message || "Terjadi kesalahan");
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
              disabled={loading}
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
                <strong>{loading ? "Loading..." : "Submit"}</strong>
              </div>
            </Button>
          </form>

          <br />
          <br />

          <div>
            {CommentData.map((n) => {
              return (
                <Comment key={n.createdAt} showAttend={showAttend} {...n} />
              );
            })}
          </div>
        </div>
      </div>

      <Script src="https://www.google.com/recaptcha/api.js?render=6Le-Rn4qAAAAAHHhOEta7v6chIqg2QHwTmdewGII" />
    </div>
  );
};

export default Page7;
