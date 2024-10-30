import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";

interface CardProps {
  heading?: string;
  type: "needs" | "offers" | "organizations" | "people";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
}

export default function CardTextMobile({
  heading = "UX/UI design for ecommerce",
  count,
  budgetType,
  type,
  location = "Tokyo, Japan",
  minBudget = 1000,
  maxBudget = 5000,
  terms = "1-3 months",
}: CardProps) {
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
          <div className={styles["main-button"]}>Serivce</div>
        </div>
      </div>

      <div className={styles.card__info}>
        <span className={styles["card__info-location"]}>
          <img src={locationIcon} />
          <span>{location}</span>
        </span>

        <span>
          {budgetType === "per item" ? (
            <>
              {minBudget}-{maxBudget} USD per item
            </>
          ) : (
            <>
              Budget: ${minBudget}-{maxBudget}
            </>
          )}
        </span>

        <span>Terms: {terms}</span>

        {count && <span>count: {count} itmes</span>}
      </div>

      <div className={styles["info__regular-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor exercitation ullamco laboris nisi ut aliquip...
      </div>

      <div className={styles.card__buttons}>
        <div className={styles["main-button"]}>User Interface Design</div>
        <div className={styles["main-button"]}>User Experience Design</div>
      </div>

      <div className={styles["main-button"] + " " + styles["card__view-more"]}>
        View more
      </div>
    </div>
  );
}
