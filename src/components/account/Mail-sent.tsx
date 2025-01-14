import theme from "../discover/theme"
import { ThemeProvider } from "@mui/material"
import styles from "./account.module.scss"
import arrow from "@public/arrow-left.png"
import { Link } from "react-router-dom";
import passwordMail from "@public/mail-password.png"
import passwordKey from "@public/password-key.png"
import mailSent from "@public/mail-send-fill.png"

export default function MailSent() {

    return <ThemeProvider theme={theme}>
        <div className={`${styles.wrapper} ${styles["wrapper_sign-in"]}`}>
            <section className={`${styles.sign} ${styles["account_forgot-password"]}`}>
                <img className={styles["mail-sent-icon"]} src={mailSent} alt="mail-sent-icon" />
                <h4 className={styles.account__heading_4}>We have sent you an email with a link to reset your password.</h4>
                <p className={styles.account__text}>
                    Please check your spam and ads folder if you did not find our letter in your main inbox.
                </p>

                <button
                    className={styles.account__button_3}>Send a new link</button>

                <Link to="/auth/log-in" className={styles.account__back}>
                    <img src={arrow} alt="arrow-left" />
                    <span>Back to log in</span>
                </Link>

                <img src={passwordKey} className={styles["account__password-icon_1"]} />
                <img src={passwordMail} className={styles["account__password-icon_2"]} />

                <div className={styles.account__background} />
            </section>
        </div>

        <div style={{ background: "rgba(248, 247, 246, 1)" }}>
            <footer className={`${styles.footer} ${styles["footer_sign-in"]}`}>
                <div>© 2020 - {new Date().getFullYear()} Mindbase® Global Inc. • Privacy Policy</div>
            </footer>
        </div>
    </ThemeProvider>
}