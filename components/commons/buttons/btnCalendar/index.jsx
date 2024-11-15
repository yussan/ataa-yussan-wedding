import { useState } from "react";
import Styles from "./index.module.css";

const btnCalendar = ({ children, ...restProps }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <button className={Styles.btnCalendar} {...restProps}>
        <img
          src="assets/images/page-2/add-to-calendar.svg"
          alt="icon add to calendar"
        />{" "}
        <span onClick={() => setShowCalendar(!showCalendar)}>
          Add to Calendar
        </span>
      </button>
      <br />
      <div
        style={{
          height: showCalendar ? "auto" : "0",
          overflow: showCalendar ? "auto" : "hidden",
          padding: showCalendar ? "15px" : "0",
        }}
        className={Styles.calendarWrapper}
      >
        <a
          className={Styles.calendarItem}
          target="_blank"
          rel="noopener noreferer"
          href="https://calendar.app.google/g5N2qDGr27m27QPk8"
        >
          <img
            src="/assets/images/icon-google-calendar.png"
            alt="google calendar icon"
          />
          Google Calendar
        </a>

        <a
          className={Styles.calendarItem}
          target="_blank"
          rel="noopener noreferer"
          href="/files/Ataa & Yusuf Wedding Data.ics"
          download
        >
          <img
            src="/assets/images/icon-outlook-calendar.png"
            alt="google calendar icon"
          />
          Outlook Calendar (.ics)
        </a>
      </div>
    </div>
  );
};

export default btnCalendar;
