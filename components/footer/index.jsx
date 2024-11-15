import Styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={Styles.wrapper}>
      Online Wedding Invitation
      <br />
      Powered by{" "}
      <a
        targe="_blank"
        rel="noopener noreferer"
        href="https://byidmore.com"
        title="YMG Team"
      >
        YMG Team
      </a>
    </div>
  );
};

export default Footer;
