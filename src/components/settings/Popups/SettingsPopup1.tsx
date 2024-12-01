import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useLocation } from "react-router-dom";
import popupStyles from "@components/sections/popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";
import { PopupTransition } from "@/components/sections/Needs";
import { MenuItem, ListItemText, Checkbox, Dialog } from "@mui/material";
import dotActive from "@public/dot-active.png"
import dot from "@public/Dot.png"

interface SettingsPopupProps {
  open: boolean
  handleClose: () => void
  currentChoice: string
  setCurrentChoice: (choice: string) => void
  handleClickOpen: () => void
}

export default function SettingsPopup1({ open, handleClose, currentChoice, setCurrentChoice, handleClickOpen }: SettingsPopupProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const type = pathParts[2];

  const choices = ["Service", "Partnership", "Product"];

  return (
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
      <div className={`${popupStyles.popup} ${popupStyles["settings-popup"]} ${type === "offers" && popupStyles["popup__bg-white"]}`}>
        <div>
          <div className={popupStyles["education-popup__item_heading-grey"]} style={{ fontSize: "14px", letterSpacing: 2 }}>1/2</div>
          <h2 className={popupStyles["settings-popup__heading"]}>Add new {type === "needs" ? "Need" : "Offer"}</h2>
          <div className={popupStyles["settings-popup__choice"]}>
            {choices.map((choice) => (
              <MenuItem
                onClick={() => setCurrentChoice(choice)}
                key={choice}
                value={choice}
                style={{ padding: 0, height: 48 }}
                className={styles["select__menu-item"]}
              >
                <Checkbox
                  sx={{ padding: "0 12px 0 0" }}
                  icon={
                    <img
                      src={dot}
                      style={{ width: 24, height: 24 }}
                      alt="box"
                    />
                  }
                  checkedIcon={
                    <img
                      style={{ width: 24, height: 24 }}
                      src={dotActive}
                      alt="boxChecked"
                    />
                  }
                  checked={currentChoice === choice}
                />
                <ListItemText
                  primary={choice}
                  style={{ fontSize: 16, lineHeight: 24 }}
                />
              </MenuItem>
            ))}
          </div>

          <div className={popupStyles["settings-popup__buttons-1"]}>
            <span onClick={handleClose}>Cancel</span>
            <div
              className={
                styles["main-button"] + " " + styles["card__view-more"]
              }
              onClick={handleClickOpen}
            >
              Next
            </div>
          </div>
        </div>
        <div>
          <div className={popupStyles.popup__back} style={{ top: 32 }} onClick={handleClose}>
            <img src={arrowLeft} alt="arrow-left" /> Back
          </div>
          <img src={popupTop} className={popupStyles["popup__bg-left"]} />
          <img src={popupTop} className={popupStyles["popup__bg-right"]} style={{ position: 'absolute', right: 100 }} />
        </div>
      </div>
    </Dialog>
  );
}
