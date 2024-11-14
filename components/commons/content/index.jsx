import Style from "./index.module.css";

const ContentBox = ({ children }) => {
  return <div className={Style.content}>{children}</div>;
};

export default ContentBox;
