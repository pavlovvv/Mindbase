import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";
import { Link } from "react-router-dom";
import CardTextDesktop from "./CardTextDesktop";

interface CardProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  matchType?: "Invite" | "Recommendation";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
}

export default function CardTextMatch(props: CardProps) {
  const {
    heading,
    type,
    matchType,
    location = "Tokyo, Japan",
    minBudget = 1000,
    maxBudget = 5000,
    terms = "1-3 months",
    count,
    budgetType,
  } = props;

  return (
    <div className={type === "needs" ? styles.card : styles.card_offers}>
      <div className={styles["card__match-type"]}>{matchType}</div>
      <div className={styles.card__date} style={{ margin: "16px 0 4px 0" }}>
        2024.08.14
      </div>
      <div className={styles.card__top} style={{ marginTop: 0 }}>
        <div className={styles["card__name-left"]}>
          <div className={styles.card__heading}>{heading}</div>
          <div className={styles["main-button"]}>Service</div>
        </div>

        <div className={styles.card__heart} />
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

      <div className={styles["main-buttons"]}>
        <div className={styles["main-second-button"]}>Message</div>

        <div
          className={styles["main-button"] + " " + styles["card__view-more"]}
        >
          View more
        </div>
      </div>

      <div className={styles["card__inner-card"]}>
        <h3 className={styles["card__inner-offer"]}>For this you offer</h3>
        <Link
          to={"/card/page"}
          state={{
            type: type === "offers" ? "needs" : "offers",
            option: "services",
            heading,
            count,
            location,
            minBudget,
            maxBudget,
            budgetType,
          }}
        >
          <CardTextDesktop
            {...props}
            type={type === "offers" ? "needs" : "offers"}
          />
        </Link>
      </div>

      {type === "needs" && (
        <div
          className={styles["card-matches-mini"]}
          style={{ backgroundColor: "#8AADD8" }}
        >
          We Offer
        </div>
      )}
      {type === "offers" && (
        <div
          className={styles["card-matches-mini"]}
          style={{ backgroundColor: "#EE7835" }}
        >
          We Need
        </div>
      )}
    </div>
  );
}
