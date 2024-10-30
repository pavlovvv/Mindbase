import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";
import emptyLogo from "@public/emptyLogo.png";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  heading: string;
  location?: string;
  img?: string;
}

export default function CardOrganization({
  heading,
  location = "Tokyo, Japan",
  img,
}: CardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={styles.card_organization}>
      <div className={styles.card__top}>
        <div className={styles["card__name-left"]}>
          <img
            src={img || emptyLogo}
            style={{ width: 68, height: 68 }}
            alt="organizations-logo"
          />
          <div className={styles.card__heading}>{heading}</div>
        </div>

        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {!isMobile && <div className={styles["main-button"]}>Connect</div>}
          <div className={styles.card__heart} />
        </div>
      </div>

      <div className={styles.card__info} style={{ marginTop: "16px" }}>
        <span className={styles["card__info-location"]}>
          <img src={locationIcon} />
          <span>{location}</span>
        </span>

        {isMobile && (
          <span
            style={{
              color: "#3F58BC",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Link
          </span>
        )}
      </div>

      <div className={styles["info__regular-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor exercitation ullamco laboris nisi ut aliquip...
      </div>

      <div className={styles["main-buttons"]}>
        {isMobile && (
          <div className={styles["main-second-button"]}>Contact</div>
        )}

        <div
          className={styles["main-button"] + " " + styles["card__view-more"]}
        >
          View more
        </div>
      </div>
    </div>
  );
}
