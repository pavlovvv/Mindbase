import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";

interface CardImgProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  img?: string;
}

export default function CardImgDesktop({
  heading,
  type,
  location,
  minBudget,
  maxBudget,
  terms = "1-3 months",
  img,
}: CardImgProps) {
  return (
    <div
      className={type === "needs" ? styles.card : styles.card_offers}
      style={{ padding: "36px 30px" }}
    >
      <div className={styles["card__project-wrapper"]}>
        <img
          src={img}
          className={styles["card__project-img"]}
          alt="project-img"
          style={{ width: "185px !important" }}
        />
        <div className={styles["card__project-right"]}>
          <div className={styles.card__top}>
            <div className={styles.card__date}>2024.08.14</div>
          </div>
          <div className={styles.card__top}>
            <div className={styles["card__name-left"]}>
              <div className={styles.card__heading}>{heading}</div>
              <div className={styles["main-button"]}>Serivce</div>
            </div>

            <div className={styles.card__heart} />
          </div>

          <div className={styles.card__info}>
            <span className={styles["card__info-location"]}>
              <img src={locationIcon} />
              <span>{location}</span>
            </span>

            <span>
              Budget: ${minBudget}-{maxBudget}
            </span>

            <span>Terms: {terms}</span>
          </div>

          <div className={styles["info__regular-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
          </div>

          <div className={styles.card__buttons}>
            <div className={styles["main-button"]}>User Interface Design</div>
            <div className={styles["main-button"]}>User Experience Design</div>
          </div>

          <div
            className={styles["main-button"] + " " + styles["card__view-more"]}
          >
            View more
          </div>
        </div>
      </div>
    </div>
  );
}
