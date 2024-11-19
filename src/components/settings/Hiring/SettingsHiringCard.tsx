import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import changeIcon from "@public/change.png";
import Popover from "@mui/material/Popover";
import popoverStyles from "@components/popovers/popover.module.scss";
import location from "@public/map-pin-line.png"

export default function SettingsHiringCard() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <a style={{ position: 'relative' }}>
      <div className={styles.card_projects}>
        <div className={styles.card__top}>
          <div className={styles.card__date}>2024.08.14</div>
          {isMobile && (
            <Link
              to="/organizations/innovation-hills"
              className={
                styles["info__projects-name"] +
                " " +
                styles["info__main-object_hover"]
              }
            >
              & Innovation Hills
              <div className={styles.card__heart} />
            </Link>
          )}
        </div>
        <div className={styles.card__top}>
          <div className={styles["card__name-left"]}>
            <div className={styles.card__heading}>UX/UI design</div>
          </div>
          {!isMobile && (
            <Link
              to="/organizations/innovation-hills"
              className={
                styles["info__projects-name"] +
                " " +
                styles["info__main-object_hover"]
              }
            >
              & Innovation Hills
              <div className={styles.card__heart} />
            </Link>
          )}
        </div>

        <div className={styles.card__heading} style={{ marginTop: 4, fontSize: 16, lineHeight: "30px" }}>$1000-2000</div>

        <div className={styles.card__info}>
          <span className={styles["card__info-location"]}>
            <img src={location} />
            <span>Tokyo, Japan</span>
          </span>

          <span>Full time</span>
        </div>

        <div className={styles["info__regular-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
        </div>
        <div className={styles["main-buttons"]}>
          <div className={styles["main-second-button"]}>View more</div>
        </div>
      </div>

      <div
        className={styles["card__edit-button"]}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClick(event);
        }}
      >
        <img src={changeIcon} alt="add" />
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={(event: any) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose();
        }}
        anchorOrigin={
          !isMobile
            ? {
              vertical: "center",
              horizontal: "right",
            }
            : {
              vertical: "top",
              horizontal: "center",
            }
        }
        transformOrigin={
          !isMobile
            ? {
              vertical: "top",
              horizontal: "right",
            }
            : {
              vertical: "bottom",
              horizontal: "right",
            }
        }
        disableScrollLock
        className={popoverStyles.popover}
      >
        <div
          className={popoverStyles.popover_discover__wrapper}
          style={{ width: 160 }}
        >
          <div>Edit</div>
          <div>Move to drafts</div>
          <div>Delete</div>
        </div>
      </Popover>
    </a>
  );
}
