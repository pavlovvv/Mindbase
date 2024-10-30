import styles from "@/main.module.scss";
import locationIcon from "@public/map-pin-line.png";
import emptyPerson from "@public/empty-person.png";

export interface associationObj {
  name: string;
  logo: string;
}

interface CardProps {
  heading: string;
  location?: string;
  img?: string;
  associations?: associationObj[];
}

export default function CardPeople({
  heading,
  location = "Tokyo, Japan",
  img,
  associations,
}: CardProps) {
  return (
    <div className={styles.card_organization}>
      <div className={styles.card__top}>
        <div className={styles["card__name-left"]}>
          <div style={{ position: "relative" }}>
            <img
              src={img || emptyPerson}
              style={{ width: 68, height: 68, borderRadius: "50%" }}
              alt="person-logo"
            />
            <div className={styles["search-activity"]} />
          </div>
          <div className={styles.card__heading}>{heading}</div>
        </div>

        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div className={styles["main-button"]}>Message</div>
          <div className={styles.card__heart} />
        </div>
      </div>

      <div className={styles.card__info} style={{ marginTop: "16px" }}>
        <span className={styles["card__info-location"]}>
          <img src={locationIcon} />
          <span>{location} - 8:01 pm local time</span>
        </span>
      </div>

      {associations && (
        <>
          {associations!.length > 0 && (
            <div className={styles.card__associations}>
              <b>Associated with:</b>

              {associations!.map((el) => (
                <div
                  key={el.name}
                  style={{ display: "flex", gap: 8, alignItems: "center" }}
                >
                  <img style={{ width: 28, height: 28 }} src={el.logo} />
                  <span style={{ fontSize: "14px" }}>{el.name}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className={styles["info__regular-text"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor exercitation ullamco laboris nisi ut aliquip...
      </div>

      <div className={styles.card__buttons}>
        <div className={styles["main-button"]}>User Interface Design</div>
        <div className={styles["main-button"]}>User Experience Design</div>
      </div>

      <div className={styles["main-buttons"]}>
        <div className={styles["main-second-button"]}>View more</div>

        <div
          className={styles["main-button"] + " " + styles["card__view-more"]}
        >
          Connect
        </div>
      </div>
    </div>
  );
}
