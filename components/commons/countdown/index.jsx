import { useState, useEffect } from "react";
import Styles from "./index.module.css";
import Text from "../../typography/Text";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date("2024-12-14 19:00").getTime();

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();

      const distance = targetDate - now;

      const resultDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const resultHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var resultMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      var resultSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(resultDays);
      setHours(resultHours);
      setMinutes(resultMinutes);
      setSeconds(resultSeconds);
    }, 1000);
  }, []);

  const daysBetween = (date1, date2) => {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);
  };

  const secondsDifference = (date1, date2) => {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    var difference = difference_ms / one_day;
    var offset = difference - Math.floor(difference);
    return offset * (60 * 60 * 24);
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.box}>
        <Text style={{ margin: "10px 0" }}>
          <div style={{ fontSize: "45px" }} className={Styles.number}>
            {days <= 0 ? 0 : days}
          </div>
        </Text>
        <Text style={{ margin: "0 0 10px", fontWeight: 100 }}>
          <div className={Styles.type}>Hari</div>
        </Text>
      </div>

      <div className={Styles.box}>
        <Text style={{ margin: "10px 0" }}>
          <div style={{ fontSize: "45px" }} className={Styles.number}>
            {hours <= 0 ? 0 : hours}
          </div>
        </Text>
        <Text style={{ margin: "0 0 10px", fontWeight: 100 }}>
          <div className={Styles.type}>Jam</div>
        </Text>
      </div>

      <div className={Styles.box}>
        <Text style={{ margin: "10px 0" }}>
          <div style={{ fontSize: "45px" }} className={Styles.number}>
            {minutes <= 0 ? 0 : minutes}
          </div>
        </Text>
        <Text style={{ margin: "0 0 10px", fontWeight: 100 }}>
          <div className={Styles.type}>Menit</div>
        </Text>
      </div>

      <div className={Styles.box}>
        <Text style={{ margin: "10px 0" }}>
          <div style={{ fontSize: "45px" }} className={Styles.number}>
            {seconds <= 0 ? 0 : seconds}
          </div>
        </Text>
        <Text style={{ margin: "0 0 10px", fontWeight: 100 }}>
          <div className={Styles.type}>Detik</div>
        </Text>
      </div>
    </div>
  );
};

export default Countdown;
