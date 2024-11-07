import styles from "@/main.module.scss";
import { useState } from "react";
import CardDesktop from "@components/card/CardDesktop";
import { useMediaQuery } from "react-responsive";
import CardMobile from "@components/card/CardMobile";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import popupStyles from "./popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import ServicePopup from "@/components/sections/popups/ServicesPopup";
import SortPopup from "@/components/sections/popups/SortPopup";
import arrowLeft from "@public/arrow-left.png";

export const PopupTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Needs() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.info__needs}>
      <h2 className={styles.info__heading}>Needs</h2>

      {!isMobile ? (
        <CardDesktop type="needs" heading="UX/UI design for ecommerce" />
      ) : (
        <CardMobile type="needs" heading="UX/UI design for ecommerce" />
      )}

      {!isMobile ? (
        <CardDesktop type="needs" heading="UX/UI design for ecommerce" />
      ) : (
        <CardMobile type="needs" heading="UX/UI design for ecommerce" />
      )}

      <div className={styles["more-button"]} onClick={handleClickOpen}>
        All needs
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
        <div className={popupStyles.popup}>
          <div className={popupStyles.popup__top}>
            <ServicePopup />
            <SortPopup items={[
                  "From newer to older",
                  "Relevance",
                  "Need spends",
                  "Rating",
                ]}/>
          </div>

          {!isMobile ? (
            <CardDesktop type="needs" heading="UX/UI design for ecommerce" />
          ) : (
            <CardMobile type="needs" heading="UX/UI design for ecommerce" />
          )}

          {!isMobile ? (
            <CardDesktop type="needs" heading="UX/UI design for ecommerce" />
          ) : (
            <CardMobile type="needs" heading="UX/UI design for ecommerce" />
          )}

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
