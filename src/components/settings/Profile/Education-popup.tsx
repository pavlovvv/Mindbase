import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import TypesPopup from "../../sections/popups/TypesPopup";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { PopupTransition } from "../../sections/Needs";
import popupStyles from "@components/sections/popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";

const dates1: number[] = [
  2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2016, 2015, 2014, 2013,
  2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

const dates2 = dates1.filter((year) => year <= 2024);

const degrees: string[] = [
  "Doctor of Engineering (DEng)",
  "Doctor of Musical Arts (DMA)",
  "Bachelor of Industrial Design",
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BS)",
  "Bachelor of Fine Arts (BFA)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Computer Science (BCompSc)",
  "Bachelor of Architecture (BArch)",
  "Bachelor of Commerce (BCom)",
  "Bachelor of Education (BEd)",
  "Bachelor of Engineering (BEng)",
  "Bachelor of Laws (LLB)",
  "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
  "Bachelor of Nursing (BN)",
  "Bachelor of Pharmacy (BPharm)",
  "Bachelor of Social Work (BSW)",
  "Bachelor of Theology (BTh)",
  "Bachelor of Public Health (BPH)",
  "Bachelor of Information Technology (BIT)",
  "Bachelor of Mathematics (BMath)",
  "Bachelor of Environmental Science (BES)",
  "Bachelor of Applied Science (BASc)",
  "Bachelor of Library Science (BLS)",
  "Master of Arts (MA)",
  "Master of Science (MS)",
  "Master of Business Administration (MBA)",
  "Master of Fine Arts (MFA)",
  "Master of Public Health (MPH)",
  "Master of Education (MEd)",
  "Master of Engineering (MEng)",
  "Master of Laws (LLM)",
  "Master of Social Work (MSW)",
  "Master of Architecture (MArch)",
  "Master of Public Administration (MPA)",
  "Master of Accounting (MAcc)",
  "Master of Computer Applications (MCA)",
  "Master of Library Science (MLS)",
  "Master of Information Technology (MIT)",
  "Master of Health Administration (MHA)",
  "Master of Urban Planning (MUP)",
  "Doctor of Philosophy (PhD)",
  "Doctor of Medicine (MD)",
  "Doctor of Dental Surgery (DDS)",
  "Doctor of Optometry (OD)",
  "Doctor of Veterinary Medicine (DVM)",
  "Doctor of Nursing Practice (DNP)",
  "Doctor of Public Health (DrPH)",
  "Doctor of Education (EdD)",
  "Doctor of Psychology (PsyD)",
  "Doctor of Social Work (DSW)",
  "Doctor of Pharmacy (PharmD)",
  "Doctor of Physical Therapy (DPT)",
  "Doctor of Theology (ThD)",
  "Associate of Arts (AA)",
  "Associate of Science (AS)",
  "Associate of Applied Science (AAS)",
  "Associate of Fine Arts (AFA)",
  "Associate of Business Administration (ABA)",
  "Associate of Nursing (AN)",
  "Associate of Computer Science (ACS)",
  "Associate of Engineering (AE)",
];

interface EducationProps {
  open: boolean;
  handleClose: () => void;
  school?: string;
  dateFrom?: string;
  dateTo?: string;
  degree?: string;
  area?: string;
}

export default function EducationPopup({
  open,
  handleClose,
  school,
  dateFrom,
  dateTo,
  degree,
  area,
}: EducationProps) {
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
          Add education
        </h1>
        <div className={popupStyles["education-popup__item"]}>
          <h2>School</h2>
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
              placeholder="Ex: University of Michigan"
              variant="outlined"
              defaultValue={school}
            />
          </div>
        </div>

        <div className={popupStyles["education-popup__item"]}>
          <h2>
            Dates attended{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (Optional)
            </span>
          </h2>
          <div className={popupStyles["popup-fields"]}>
            <TypesPopup
              width={"fullWidth"}
              placeholder={!dateFrom ? "From" : undefined}
              items={dates2}
              isSearch
              label={dateFrom}
            />

            <TypesPopup
              width={"fullWidth"}
              placeholder={!dateFrom ? "To" : undefined}
              items={dates1}
              isSearch
              label={dateTo}
            />
          </div>
        </div>

        <div className={popupStyles["education-popup__item"]}>
          <h2>
            Degree{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (Optional)
            </span>
          </h2>

          <div className={popupStyles["popup-fields"]}>
            <TypesPopup
              width={"fullWidth"}
              placeholder={!degree ? "Select your degree" : undefined}
              items={degrees}
              isSearch
              label={degree}
            />
          </div>
        </div>

        <div className={popupStyles["education-popup__item"]}>
          <h2>
            Area of study{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (Optional)
            </span>
          </h2>
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
              placeholder="Ex: Computer Science"
              variant="outlined"
              defaultValue={area}
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
