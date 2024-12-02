import styles from "@/main.module.scss";
import { useState } from "react";
import popupStyles from "./popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";
import emptyFrame from "@public/empty-frame.png";
import portfolioFrame1 from "@public/portfolio-frame-1.png";
import portfolioFrame2 from "@public/portfolio-frame-2.png";
import portfoilioImage from "@public/portfolio-image.png";
import withDialog from "@/withDialog";

export default function Portfolio() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEl, setElOpen] = useState(false);

  const handleClickElOpen = () => {
    setElOpen(true);
  };

  const handleElClose = () => {
    setElOpen(false);
  };

  return (
    <div className={styles.info__portfolio}>
      <h2 className={styles.info__heading}>Portfolio</h2>
      <div className={styles["info__portfolio-projects"]}>
        <div
          className={styles["porfolio-project"]}
          style={{ zIndex: 1 }}
          onClick={handleClickElOpen}
        >
          <img src={portfolioFrame1} alt="frame 1" />
          <div className={styles["porfolio-project__name"]}>
            Web design for aroma shop Clarice
          </div>
          <div className={styles["porfolio-project__instruments"]}>
            Adobe Photoshop, Adobe I...
          </div>
        </div>

        <div className={styles["porfolio-project"]}>
          <img src={portfolioFrame2} alt="frame 2" />
          <div className={styles["porfolio-project__name"]}>
            Web design for aroma shop Clarice
          </div>
          <div className={styles["porfolio-project__instruments"]}>
            Adobe Photoshop, Adobe I...
          </div>
        </div>

        <div className={styles["porfolio-project"]}>
          <img src={emptyFrame} alt="frame 3" />
          <div className={styles["porfolio-project__name"]}>
            Web design for aroma shop Clarice
          </div>
          <div className={styles["porfolio-project__instruments"]}>
            Adobe Photoshop, Adobe I...
          </div>
        </div>
      </div>

      <div className={styles["more-button"]} onClick={handleClickOpen}>
        See more
      </div>

      {withDialog({
        open,
        handleClose,
        children: (
          <div className={popupStyles.popup} style={{ background: "#F8F7F6" }}>
            <div className={styles["info__portfolio-projects"]}>
              <div
                className={styles["porfolio-project"]}
                onClick={handleClickElOpen}
              >
                <img src={portfolioFrame1} alt="frame 1" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>

              <div className={styles["porfolio-project"]}>
                <img src={portfolioFrame2} alt="frame 2" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>

              <div className={styles["porfolio-project"]}>
                <img src={emptyFrame} alt="frame 3" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>

              <div className={styles["porfolio-project"]}>
                <img src={emptyFrame} alt="frame 3" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>

              <div className={styles["porfolio-project"]}>
                <img src={emptyFrame} alt="frame 3" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>

              <div className={styles["porfolio-project"]}>
                <img src={emptyFrame} alt="frame 3" />
                <div className={styles["porfolio-project__name"]}>
                  Web design for aroma shop Clarice
                </div>
                <div className={styles["porfolio-project__instruments"]}>
                  Adobe Photoshop, Adobe I...
                </div>
              </div>
            </div>

            <div className={popupStyles.popup__back} onClick={handleClose}>
              <img src={arrowLeft} alt="arrow-left" /> Back
            </div>
            <img src={popupTop} className={popupStyles["popup__bg-left"]} />
            <img src={popupTop} className={popupStyles["popup__bg-right"]} />
          </div>
        )
      })}

      {withDialog({
        open: openEl,
        handleClose: handleElClose,
        children: (
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
        )
      })}
    </div>
  );
}
