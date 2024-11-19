import styles from "@/main.module.scss";
import { useState } from "react";
import TypesPopup from "../../sections/popups/TypesPopup";
import johnDoe from "@public/photo-full.png";
import changeIcon from "@public/change.png";
import arrow from "@public/arrow-big.png";
import { useCollapse } from "react-collapsed";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function ProfileTopMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [isExpanded, setExpanded] = useState<boolean>(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 0,
  });

  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const type1 = pathParts[2];

  const isActive = (path: string) => location.pathname.includes(path);

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
          <Link to="/settings/profile">
            <li
              className={`${
                isActive("/settings/profile") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Profile settings
            </li>
          </Link>
          <Link to="/settings/contact">
            <li
              className={`${
                isActive("/settings/contact") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Contact info
            </li>
          </Link>
          <Link to="/settings/organizations">
            <li
              className={`${
                isActive("/settings/organizations") &&
                styles["settings__nav-item_active"]
              }`}
            >
              My organizations
            </li>
          </Link>

          <Link to="/settings/needs">
            <li
              className={`${
                (isActive("/settings/needs") || isActive("/settings/offers")) &&
                styles["settings__nav-item_active"]
              }`}
            >
              Needs/Offers
            </li>
          </Link>
          <Link to="/settings/portfolio">
            <li
              className={`${
                isActive("/settings/portfolio") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Portfolio
            </li>
          </Link>
          <Link to="/settings/projects">
            <li
              className={`${
                isActive("/settings/projects") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Projects
            </li>
          </Link>
          <Link to="/settings/hiring">
            <li
              className={`${
                isActive("/settings/hiring") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Hiring
            </li>
          </Link>
          <Link to="/settings/membership-connects">
            <li
              className={`${
                isActive("/settings/membership-connects") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Membership & Connects
            </li>
          </Link>
          <Link to="/settings/notification">
            <li
              className={`${
                isActive("/settings/notification") &&
                styles["settings__nav-item_active"]
              }`}
            >
              Notification settings
            </li>
          </Link>
        </nav>
      </div>

      {isMobile && type1 === "profile" && (
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
      )}
    </>
  );
}
