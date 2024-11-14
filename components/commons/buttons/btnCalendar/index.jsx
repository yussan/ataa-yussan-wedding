import Styles from "./index.module.css";

const btnCalendar = ({ children, ...restProps }) => {
  return (
    <button className={Styles.btnCalendar} {...restProps}>
      <img
        src="assets/images/page-2/add-to-calendar.svg"
        alt="icon add to calendar"
      />{" "}
      <span>Add to Calendar</span>
    </button>
  );
};

export default btnCalendar;
