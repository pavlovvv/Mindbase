import styles from "@/main.module.scss";
import emptyFrame from "@public/empty-frame.png";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  heading: string;
  type: "needs" | "offers" | "organizations" | "people";
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  terms?: string;
  count?: number;
  budgetType?: "per item";
  img?: string;
  isNew?: boolean;
}

export default function CardProductDesktop({
  heading,
  img,
  minBudget = 1000,
  maxBudget = 5000,
  isNew,
}: CardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div
      className={`${styles["product-card"]} ${styles["product-card_offers"]}`}
    >
      <div className={styles["product-card__inner"]}>
        {isMobile && (
          <img
            src={img || emptyFrame}
            alt="product-image"
            className={styles["product-card__picture_mobile"]}
          />
        )}
        <div>
          <div className={styles["product-card__top"]}>
            {isNew && <span>New</span>}
            <div
              className={styles.card__heart}
              style={{ marginRight: 0, marginLeft: "auto" }}
            />
          </div>

          <div
            className={styles.card__heading}
            style={{ maxWidth: 180, whiteSpace: "nowrap" }}
          >
            {heading}
          </div>

          <div>
            <span className={styles["info__regular-text"]}>
              {minBudget}-{maxBudget} USD
            </span>
            <span className={styles["product-card__grey-text"]}> per item</span>
          </div>

          {!isMobile && (
            <img
              src={img || emptyFrame}
              alt="product-image"
              style={{ width: 201, height: 172 }}
              className={styles["product-card__picture"]}
            />
          )}

          <div className={styles["info__regular-text"]}>
            Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip...
          </div>
        </div>
      </div>

      <div
        className={styles["main-button"] + " " + styles["card__view-more"]}
        style={{ marginLeft: 0, width: "auto", marginTop: 12 }}
      >
        View more
      </div>
    </div>
  );
}
