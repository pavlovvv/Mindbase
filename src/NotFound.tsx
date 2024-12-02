import styles from "./index.module.scss"
import mainStyles from "./main.module.scss"
import { Link } from "react-router-dom"
import graphEl from "@public/404-el.png"

export default function NotFound() {

    return (
        <div className={styles["not-found"]}>
            <h1 className={styles["not-found__heading"]}>
                404
            </h1>
            <div className={styles["not-found__text_blue"]}>Something seems to be missing...</div>
            <div className={styles["not-found__text"]}>Sorry, we couldn`t find this page</div>

            <Link to={"/"} className={styles["not-found__button"]}>
                <div
                    className={
                        mainStyles["main-button_mobile"]
                    }
                >
                    Go to main page
                </div>
            </Link>

            <img src={graphEl} className={styles["not-found__graph_top"]} />
            <img src={graphEl} className={styles["not-found__graph_bottom"]} />
        </div>
    )
}