import locationIcon from "@public/map-pin-line.png";
import styles from "@/main.module.scss";

interface CardImgProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  img?: string;
}

export default function CardImgMobile({
  heading,
  type,
  location,
  minBudget,
  maxBudget,
  terms = "1-3 months",
  img,
}: CardImgProps) {
  return (
    <div className={type === "needs" ? styles.card : styles.card_offers}>
      <div className={styles.card__top}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {type === "needs" ? (
            <div className={styles["card__type_mobile-needs"]}>We Need</div>
          ) : (
            <div className={styles["card__type_mobile-offers"]}>We Offer</div>
          )}

          <div className={styles.card__date}>2024.08.14</div>
        </div>
        <div className={styles.card__heart} />
      </div>
      <div className={styles.card__top}>
        <div className={styles["card__name-left"]}>
          <div className={styles.card__heading}>{heading}</div>
        </div>
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

      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={img} alt="img" style={{ width: "100%", maxWidth: "300px" }} />
      </div>
      <div className={styles["info__regular-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor exercitation ullamco laboris nisi ut aliquip...
      </div>

      <div className={styles["main-button"] + " " + styles["card__view-more"]}>
        Book now
      </div>
    </div>
  );
}
