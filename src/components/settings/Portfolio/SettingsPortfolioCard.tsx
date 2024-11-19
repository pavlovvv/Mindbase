import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import changeIcon from "@public/change.png";
import Popover from "@mui/material/Popover";
import popoverStyles from "@components/popovers/popover.module.scss";
import Dialog from "@mui/material/Dialog";
import popupStyles from "@components/sections/popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";
import { PopupTransition } from "@components/sections/Needs";
import portfoilioImage from "@public/portfolio-image.png";

interface PortfolioProps {
  img: string;
}

export default function SettingsPortfolioCard({ img }: PortfolioProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openEl, setElOpen] = useState(false);

  const handleClickElOpen = () => {
    setElOpen(true);
  };

  const handleElClose = () => {
    setElOpen(false);
  };

  const open = Boolean(anchorEl);
  return (
    <a className={styles["settings-portfolio__inner"]}>
      <div className={styles["porfolio-project_settings"]} style={{ zIndex: 1 }} onClick={handleClickElOpen}>
        <img src={img} alt="frame 1" />
        <div className={styles["porfolio-project__name_settings"]}>
          Web design for aroma shop Clarice
        </div>
        <div className={styles["porfolio-project__instruments_settings"]}>
          Adobe Photoshop, Adobe I...
        </div>
      </div>

      <div
        className={styles["card__edit-button_portfolio"]}
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

      <Dialog
        open={openEl}
        TransitionComponent={PopupTransition}
        keepMounted
        disableScrollLock
        onClose={handleElClose}
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
        <div
          className={popupStyles.popup}
          style={{ background: "#F8F7F6", maxWidth: "882px" }}
        >
          <div className={popupStyles["portfolio-popup__heading"]}>
            Website design for aroma shop Clarice
          </div>
          <div className={popupStyles["portfolio-popup__clarification"]}>
            Web & Mobile Design
          </div>
          <div className={popupStyles["portfolio-popup__skills"]}>
            Adobe Photoshop, Adobe Illustrator, Prototyping, Figma, Design &
            Usability Research, Layout Design, Page Layout Design, Website
            Prototyping, Mockup
          </div>
          <div className={popupStyles["portfolio-popup__text"]}>
            This is the website for our client. Visitors perceive the vertical
            menu faster. Due to the small spacing between elements, users scan
            two or three buttons in one visual stop. The vertical menu takes up
            the left column of the page, so you have less space for your
            content. The upper vertical navigation elements are clearly visible
            to the users, but the lower ones remain subtle. And as for the
            horizontal menu, the buttons are located from left to right, so a
            person is more accustomed to reading them, rather than scanning
            patterns. The user perceives one button at one visual stop. All
            elements of the horizontal menu are clearly visible. Vertical
            navigation leaves more space on the page. This means you can offer
            the users more content without having to scroll.
          </div>
          <div>
            <img
              src={portfoilioImage}
              alt="portolio-image"
              style={{ width: "100%" }}
            />
          </div>
          <div className={popupStyles.popup__back} onClick={handleElClose}>
            <img src={arrowLeft} alt="arrow-left" /> Back
          </div>
          <img src={popupTop} className={popupStyles["popup__bg-left"]} />
          <img src={popupTop} className={popupStyles["popup__bg-right"]} />
        </div>
      </Dialog>
    </a>
  );
}
