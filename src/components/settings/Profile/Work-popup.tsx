import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import TypesPopup from "../../sections/popups/TypesPopup";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { PopupTransition } from "../../sections/Needs";
import popupStyles from "@components/sections/popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";

const dates: number[] = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2012, 2011,
  2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

interface WorkProps {
  open: boolean;
  handleClose: () => void;
  companyName?: string;
  dateFrom?: string;
  dateTo?: string;
  title?: string;
}

export default function WorkPopup({
  open,
  handleClose,
  companyName,
  dateFrom,
  dateTo,
  title,
}: WorkProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
      <div
        className={popupStyles.popup}
        style={{ background: "#F8F7F6", width: isMobile ? "100vw" : "inherit" }}
      >
        <h1 className={popupStyles["education-popup__heading"]}>
          Add work experience
        </h1>
        <div className={popupStyles["education-popup__item"]}>
          <h2>Company name</h2>
          <div className={popupStyles["popup-fields"]}>
            <TextField
              id="outlined-basic"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  height: 44,
                  color: "#25436D",
                },
              }}
              size="medium"
              placeholder="Ex: Mindbase"
              variant="outlined"
              defaultValue={companyName}
            />
          </div>
        </div>

        <div className={popupStyles["education-popup__item"]}>
          <h2>Title</h2>
          <div className={popupStyles["popup-fields"]}>
            <TextField
              id="outlined-basic"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  height: 44,
                  color: "#25436D",
                },
              }}
              size="medium"
              placeholder="Ex: Developer"
              variant="outlined"
              defaultValue={title}
            />
          </div>
        </div>

        <div className={popupStyles["education-popup__item"]}>
          <h2>
            Dates attended
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (Optional)
            </span>
          </h2>
          <div className={popupStyles["popup-fields"]}>
            <TypesPopup
              width={"fullWidth"}
              placeholder={!dateFrom ? "From" : undefined}
              items={dates}
              isSearch
              label={dateFrom}
            />

            <TypesPopup
              width={"fullWidth"}
              placeholder={!dateFrom ? "To" : undefined}
              items={dates}
              isSearch
              label={dateTo}
            />
          </div>
        </div>

        <div className={styles.settings__buttons_popup}>
          <div className={styles["main-second-button"]} onClick={handleClose}>
            Cancel
          </div>

          <div
            className={styles["main-button"] + " " + styles["card__view-more"]}
            onClick={handleClose}
          >
            Update
          </div>
        </div>
        <div className={popupStyles.popup__back} onClick={handleClose}>
          <img src={arrowLeft} alt="arrow-left" /> Back
        </div>
        <img src={popupTop} className={popupStyles["popup__bg-left"]} />
        <img src={popupTop} className={popupStyles["popup__bg-right"]} />
      </div>
    </Dialog>
  );
}
