import styles from "@/main.module.scss";
import { useState } from "react";
import TypesPopup from "../sections/popups/TypesPopup";
import johnDoe from "@public/photo-full.png";
import changeIcon from "@public/change.png";
import arrow from "@public/arrow-big.png";
import { useCollapse } from "react-collapsed";

export default function ProfileTopMobile() {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 0,
  });

  return (
    <>
      <div className={styles.settings__top_mobile}>
        <h2
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          style={{ marginBottom: isExpanded ? 28 : 0 }}
        >
          Settings
          <img
            src={arrow}
            alt="arrow"
            className={`${styles.settings__arrow} ${
              !isExpanded && styles.settings__arrow_rotate
            }`}
          />
        </h2>

        <nav
          className={styles["settings__top-nav_mobile"]}
          {...getCollapseProps()}
        >
          <li
            style={{
              color: "#25436D",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            Profile settings
          </li>
          <li>Contact info</li>
          <li>My organizations</li>
          <li>Needs/Offers</li>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Membership & connects</li>
          <li>Notification settings</li>
        </nav>
      </div>

      <div className={styles.settings__mobile}>
        <div className={styles.settings__avatar_mobile}>
          <img src={johnDoe} alt="photo-sample" />{" "}
          <div
            className={`${styles["settings-icon_change"]} ${styles["settings__avatar-button"]}`}
          >
            <img src={changeIcon} alt="add" />
          </div>
        </div>
        <div>
          <h4 className={styles.settings__heading}>Visability</h4>

          <div>
            <TypesPopup
              width={"fullWidth"}
              label="Public"
              items={["Public", "Only coworkers", "Private"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
