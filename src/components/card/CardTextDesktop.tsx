import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";
import { Link } from "react-router-dom";

interface CardProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
}

export default function CardTextDesktop({
  heading,
  type,
  location = "Tokyo, Japan",
  minBudget = 1000,
  maxBudget = 5000,
  terms = "1-3 months",
  count,
  budgetType,
}: CardProps) {
  return (
    <div className={type === "needs" ? styles.card : styles.card_offers}>
      <div className={styles.card__date}>2024.08.14</div>
      <div className={styles.card__top}>
        <div className={styles["card__name-left"]}>
          <div className={styles.card__heading}>{heading}</div>
        </div>

        <Link
          to="organizations/innovation-hills"
          className={
            styles["info__projects-name"] +
            " " +
            styles["info__main-object_hover"]
          }
        >
          & Innovation Hills
          <div className={styles.card__heart} />
        </Link>
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

        {count && <span>Count: {count} itmes</span>}

        <span>Terms: {terms}</span>
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
