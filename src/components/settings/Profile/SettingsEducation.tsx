import styles from "@/main.module.scss";
import { useState } from "react";
import plusIcon from "@public/plus.png";
import changeIcon from "@public/change.png";
import EducationPopup from "./Education-popup";

export default function SettingsEducation() {
  const [open, setOpen] = useState(false);
  const [open3, set3Open] = useState(false);
  const [open2, set2Open] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClick2Open = () => {
    set2Open(true);
  };
  const handleClick3Open = () => {
    set3Open(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handle2Close = () => {
    set2Open(false);
  };
  const handle3Close = () => {
    set3Open(false);
  };

  return (
    <div className={styles.settings__element}>
      <h4 className={styles.settings__heading}>
        Education
        <div className={styles["settings-icon_plus"]} onClick={handleClickOpen}>
          <img src={plusIcon} alt="add" />
        </div>
      </h4>

      <div className={styles["info__main-object"]}>
        <div className={styles["info__left-text"]}>
          <div>
            <h3 className={styles["info__left-text_heading"]}>
              Shibaura Institute of Technology{" "}
            </h3>
            <div>Bachelors Degree, Computer Science</div>
            <div>2008-2012</div>
          </div>
          <div
            onClick={handleClick2Open}
            className={styles["settings-icon_change"]}
          >
            <img src={changeIcon} alt="add" />
          </div>
        </div>
      </div>

      <div className={styles["info__main-object"]}>
        <div className={styles["info__left-text"]}>
          <div>
            <h3 className={styles["info__left-text_heading"]}>
              Shibaura Institute of Technology{" "}
            </h3>
            <div>Masters Degree, Computer Science</div>
            <div>2012-2014</div>
          </div>
          <div
            onClick={handleClick3Open}
            className={styles["settings-icon_change"]}
          >
            <img src={changeIcon} alt="add" />
          </div>
        </div>
      </div>

      <EducationPopup open={open} handleClose={handleClose} />

      <EducationPopup
        school="Shibaura Institute of Technology"
        area="Computer Science"
        dateFrom={"2008"}
        dateTo={"2012"}
        degree="Bachelors Degree"
        open={open2}
        handleClose={handle2Close}
      />

      <EducationPopup
        school="Shibaura Institute of Technology"
        area="Computer Science"
        dateFrom={"2012"}
        dateTo={"2014"}
        degree="Masters Degree"
        open={open3}
        handleClose={handle3Close}
      />
    </div>
  );
}
