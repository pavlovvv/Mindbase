import location from "@public/map-pin-line.png";
import styles from "@/main.module.scss";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Dialog from "@mui/material/Dialog";
import popupStyles from "./popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";
import SortPopup from "@/components/sections/popups/SortPopup";
import { PopupTransition } from "./Needs";
import { Link } from "react-router-dom";

export default function Hiring() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.info__projects}>
      <h2 className={styles.info__heading}>Hiring</h2>

      <div className={styles.card_projects}>
        <div className={styles.card__top}>
          <div className={styles.card__date}>2024.08.14</div>
          {isMobile && (
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
          )}
        </div>
        <div className={styles.card__top}>
          <div className={styles["card__name-left"]}>
            <div className={styles.card__heading}>UX/UI design</div>
          </div>
          {!isMobile && (
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
          )}
        </div>

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

          <div
            className={styles["main-button"] + " " + styles["card__view-more"]}
          >
            Apply now
          </div>
        </div>
      </div>

      <div className={styles.card_projects}>
        <div className={styles.card__top}>
          <div className={styles.card__date}>2024.08.14</div>
          {isMobile && (
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
          )}
        </div>
        <div className={styles.card__top}>
          <div className={styles["card__name-left"]}>
            <div className={styles.card__heading}>UX/UI design</div>
          </div>
          {!isMobile && (
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
          )}
        </div>

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

          <div
            className={styles["main-button"] + " " + styles["card__view-more"]}
          >
            Apply now
          </div>
        </div>
      </div>

      <div className={styles["more-button"]} onClick={handleClickOpen}>
        See more
      </div>

      <Dialog
        open={open}
        TransitionComponent={PopupTransition}
        keepMounted
        disableScrollLock
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={
          !isMobile
            ? {
                backdropFilter: "blur(5px) sepia(5%)",
                "& .MuiDialog-paper": {
                  borderRadius: "14px",
                  maxWidth: "none",
                  maxHeight: "none",
                  margin: 0,
                },
              }
            : {
                "& .MuiDialog-paper": {
                  maxWidth: "none",
                  maxHeight: "none",
                  margin: 0,
                },
                "& .MuiDialog-container": {
                  alignItems: "stretch",
                },
              }
        }
      >
        <div className={popupStyles.popup} style={{ background: "#BAD2F9" }}>
          <div
            className={popupStyles.popup__top}
            style={{ justifyContent: "flex-end" }}
          >
            <SortPopup items={[
                  "From newer to older",
                  "Relevance",
                  "Need spends",
                  "Rating",
                ]}/>
          </div>
          <div className={styles.card_projects}>
            <div className={styles.card__top}>
              <div className={styles.card__date}>2024.08.14</div>
              {isMobile && (
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
              )}
            </div>
            <div className={styles.card__top}>
              <div className={styles["card__name-left"]}>
                <div className={styles.card__heading}>UX/UI design</div>
              </div>
              {!isMobile && (
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
              )}
            </div>

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

              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
              >
                Apply now
              </div>
            </div>
          </div>

          <div className={styles.card_projects}>
            <div className={styles.card__top}>
              <div className={styles.card__date}>2024.08.14</div>
              {isMobile && (
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
              )}
            </div>
            <div className={styles.card__top}>
              <div className={styles["card__name-left"]}>
                <div className={styles.card__heading}>UX/UI design</div>
              </div>
              {!isMobile && (
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
              )}
            </div>

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

              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
              >
                Apply now
              </div>
            </div>
          </div>

          <div className={popupStyles.popup__back} onClick={handleClose}>
            <img src={arrowLeft} alt="arrow-left" /> Back
          </div>
          <img src={popupTop} className={popupStyles["popup__bg-left"]} />
          <img src={popupTop} className={popupStyles["popup__bg-right"]} />
        </div>
      </Dialog>
    </div>
  );
}
