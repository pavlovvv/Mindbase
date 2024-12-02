import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import TypesPopup from "../../sections/popups/TypesPopup";
import { useLocation } from "react-router-dom";
import DiscoverSearchInput from "@/components/discover/DiscoverSearchInput";
import popupStyles from "@components/sections/popups/popup.module.scss";
import popupTop from "@public/Graphic Element.png";
import arrowLeft from "@public/arrow-left.png";
import { TextField, Snackbar, Slide, SnackbarCloseReason } from "@mui/material";
import deleteIcon from "@public/blue-cross.png"
import Categories from "@/components/discover/filters/Categories";
import participantLogo from "@public/org-logo-mobile.png"
import errorIcon from "@public/error.png"
import successIcon from "@public/success.png"
import SettingsGallery from "./Gallery";
import SettingsDescription from "./Description";
import SettingsTags from "./Tags";
import withDialog from "@/withDialog";


interface SettingsPopupProps {
  open: boolean
  handleClose: () => void
  currentChoice?: string
  heading: string;
  setCurrentChoice?: (choice: string) => void
  titlePlaceholder?: string
  descriptionPlaceholder?: string
  isCategory?: boolean
  isType?: boolean
  isGallery?: boolean
  isLink?: boolean
  isBudget?: boolean
  isTerms?: boolean
  isLocation?: boolean
  isExperience?: boolean
  isProject?: boolean
  showTags?: boolean
  isEnglish?: boolean
  isVacancy?: boolean
  files: string[]
}

export default function SettingsPopup2({
  open,
  isBudget,
  isProject,
  showTags,
  isExperience,
  isGallery,
  isTerms,
  isEnglish,
  isLocation,
  handleClose,
  currentChoice,
  setCurrentChoice,
  titlePlaceholder,
  descriptionPlaceholder,
  isCategory,
  heading,
  isType,
  isVacancy,
  files,
  isLink }: SettingsPopupProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const type = pathParts[2];

  const choices = ["Service", "Partnership", "Product"];
  const reorderedChoices = [currentChoice, ...choices.filter(item => item !== currentChoice)];

  const [title, setTitle] = useState<string>("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };

  const [category, setCategory] = useState<string[]>([]);
  const handleCategoryChange = (newCategory: string) => {
    if (category.includes(newCategory)) {
      setCategory(category.filter((item) => item !== newCategory));
    } else {
      setCategory([...category, newCategory]);
    }
  };

  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const handleSnackbarClose = (
    _: any,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
    setSuccess(false);
  };

  const TITLE_PLACEHOLDER: string = (() => {
    if (currentChoice === "Service") return "Project title";
    else if (currentChoice === "Product") return "Product title";
    return "Title";
  })();

  return withDialog({
    open,
    handleClose,
    children: (
      <>
      <div className={`${popupStyles.popup} ${popupStyles["settings-popup-2"]} ${type !== "needs" && popupStyles["popup__bg-white"]}`}>
        {currentChoice && <div className={popupStyles["education-popup__item_heading-grey"]} style={{ fontSize: "14px", letterSpacing: 2 }}>2/2</div>}
        <h2 className={popupStyles["settings-popup__heading"]}>Add new {heading}
          {isType && <TypesPopup
            width={154}
            label={currentChoice}
            setNewEl={setCurrentChoice}
            items={reorderedChoices}
          />}</h2>

        {isVacancy && <div className={popupStyles["settings-popup-2__item"]}>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            Category{" "}
          </h2>

          <div style={{ maxWidth: !isMobile ? 590 : "none" }}>
            <Categories
              category={category}
              handleCategoryChange={handleCategoryChange}
              heading="Type"
            />
          </div>
        </div>}

        <div className={popupStyles["settings-popup-2__item"]} id="title">
          <h2>Title</h2>
          <div className={popupStyles["popup-fields"]}>
            <TextField
              id="outlined-basic"
              error={isError}
              value={title}
              onChange={handleTitleChange}
              fullWidth
              className={`${styles["mui-textfield"]}`}
              size="medium"
              placeholder={titlePlaceholder || TITLE_PLACEHOLDER}
              variant="outlined"
            />
          </div>
          <div className={popupStyles["settings-popup-2__characters"]}>{70 - title.length} characters left</div>
        </div>

        {isProject && <div className={popupStyles["settings-popup-2__item"]}>
          <h2>Type</h2>
          <div className={popupStyles["popup-fields"]}>
            <TypesPopup
              width={154}
              label={"Service"}
              items={["Servoce", "Product", "Event"]}
            />
          </div>
          <div className={popupStyles["settings-popup-2__characters"]}>{70 - title.length} characters left</div>
        </div>}

        {isCategory && <div style={{ marginTop: -20 }}>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            Category{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (optional)
            </span>
          </h2>

          <div style={{ maxWidth: !isMobile ? 590 : "none" }}>
            <Categories
              category={category}
              handleCategoryChange={handleCategoryChange}
              heading="Type to add relevant category to this case"
            />
          </div>
        </div>}

        <SettingsDescription isError={isError} descriptionPlaceholder={descriptionPlaceholder} isLink={isLink} files={files} />

        {(currentChoice === "Product" || isGallery) && <SettingsGallery />}

        <div className={`${popupStyles["education-popup__item"]} ${popupStyles["popup-fields"]}`}>

          {isBudget && <div>
            <h2 className={popupStyles["settings-popup-2__item-heading"]}>
              Budget{" "}
              <span className={popupStyles["education-popup__item_heading-grey"]}>
                (optional)
              </span>
            </h2>

            <TextField
              id="outlined-basic"
              fullWidth
              className={`${styles["mui-textfield"]}`}
              size="medium"
              placeholder={currentChoice === "Product" ? "$XXX per item" : "$XXX-XXX"}
              variant="outlined"
            />
          </div>}

          {isTerms && <div>
            <h2 className={popupStyles["settings-popup-2__item-heading"]}>
              Terms{" "}
              <span className={popupStyles["education-popup__item_heading-grey"]}>
                (optional)
              </span>
            </h2>

            <TypesPopup
              width={"fullWidth"}
              placeholder={"X months"}
              items={["1 month", "3 months", "6 months", "12 months"]}
            />
          </div>}

          {isExperience && <div>
            <h2 className={popupStyles["settings-popup-2__item-heading"]}>
              Work experience{" "}
              <span className={popupStyles["education-popup__item_heading-grey"]}>
                (optional)
              </span>
            </h2>

            <TypesPopup
              width={"fullWidth"}
              placeholder={"Type"}
              items={["1 year", "2 years and more", "5 years and more", "more than 5 years"]}
            />
          </div>}
        </div>

        {isEnglish && <div style={{ maxWidth: '49%' }}>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            English{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (optional)
            </span>
          </h2>

          <TypesPopup
            width={"fullWidth"}
            placeholder={"Type"}
            items={["Intermidiate", "Upper intermidiate", "Advanced/Fluent"]}
          />
        </div>}

        {currentChoice === "Product" && <div>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            Count
          </h2>

          <div style={{ maxWidth: 590 }}>
            <TextField
              id="outlined-basic"
              fullWidth
              className={`${styles["mui-textfield"]}`}
              size="medium"
              placeholder="XXX item"
              variant="outlined"
            />
          </div>
        </div>}

        {isLocation && <div>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            Location
          </h2>

          <div className={popupStyles["settings-popup-2__location"]}>
            <DiscoverSearchInput
              width={"fullwidth"}
            />
          </div>
        </div>}

        {showTags && <SettingsTags />}

        <div>
          <h2 className={popupStyles["settings-popup-2__item-heading"]}>
            Add participant{" "}
            <span className={popupStyles["education-popup__item_heading-grey"]}>
              (optional)
            </span>
          </h2>

          <div style={{ maxWidth: 590 }}>
            <TextField
              id="outlined-basic"
              fullWidth
              className={`${styles["mui-textfield"]}`}
              size="medium"
              placeholder="@profile"
              variant="outlined"
            />
          </div>

          <div className={popupStyles["settings-popup-2__participants"]}>
            <div><img src={participantLogo} className={popupStyles["settings-popup-2__participants-logo"]} alt="participant-logo" />
              <span>Innovation Hills</span>
              <div className={popupStyles["settings-popup-2-participants-button"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>

            <div><img src={participantLogo} className={popupStyles["settings-popup-2__participants-logo"]} alt="participant-logo" />
              <span>Innovation Hills</span>
              <div className={popupStyles["settings-popup-2-participants-button"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>
          </div>
        </div>

        <div className={popupStyles["settings-popup-2-buttons"]}>
          <div className={!isMobile ? " " : styles["main-second-button"]} onClick={handleClose}>Cancel</div>
          <div className={styles["main-second-button"]} onClick={() => setSuccess(true)}>Save as draft</div>

          <div>
            <a href="#title">
              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
                onClick={() => setError(true)}
              >
                Publish
              </div>
            </a>
          </div>


        </div>

        <div className={popupStyles.popup__back} onClick={handleClose}>
          <img src={arrowLeft} alt="arrow-left" /> Back
        </div>
        <img src={popupTop} className={popupStyles["popup__bg-left"]} />
        <img src={popupTop} className={popupStyles["popup__bg-right"]} />
      </div>

      <Snackbar
        open={isError || isSuccess}
        TransitionComponent={Slide}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleSnackbarClose}
        key={"bottom" + "right"}
        color="#fff"
      >
        <div className={`${popupStyles["snackbar-popup"]} ${isError && popupStyles["snackbar-popup_error"]} ${isSuccess && popupStyles["snackbar-popup_success"]}`}>
          {isError ? <>       <img src={errorIcon} alt="error" />
            <div>Some required fields are not filled. <br />
              Please check again.</div>
          </> :
            <> <img src={successIcon} alt="success" />
              <div>Saved as draft.</div>
            </>
          }
        </div>
      </Snackbar>
      </>
  ),
});
};