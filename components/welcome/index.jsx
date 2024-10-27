import Styles from "./index.module.css"

const WelcomePage = () => {
    return <div className={Styles.wrapper}>
        <div className={Styles.top}>
            <img src="assets/images/yna/AY Logo.svg" alt="Top Logo" />
            <p className="text-title">The Wedding of</p>
            <p className="text-bride">Ataa & Yusuf</p>
        </div>
        <div className={Styles.bottom}>
            <p className="text-yth">Kepada Yth<br/>Bapak/Ibu/Saudara/i</p>
            <p className="text-name">FULLNAME GUEST</p>
        </div>
    </div>
}

export default WelcomePage