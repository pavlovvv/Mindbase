import styles from "@/main.module.scss";
import { useState } from "react";
import plusIcon from "@public/plus.png";
import changeIcon from "@public/change.png";
import WorkPopup from "./Work-popup";

export default function SettingsWork() {
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
        Work experience
        <div onClick={handleClickOpen} className={styles["settings-icon_plus"]}>
          <img src={plusIcon} alt="add" />
        </div>
      </h4>

      <div className={styles["info__main-object"]}>
        <div className={styles["info__left-text"]}>
          <div>
            <h3 className={styles["info__left-text_heading"]}>YAMAHA</h3>
            <div>CEO 2012-2014</div>
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
            <h3 className={styles["info__left-text_heading"]}>YAMAHA</h3>
            <div>CTO 2012-2014</div>
          </div>
          <div
            onClick={handleClick3Open}
            className={styles["settings-icon_change"]}
          >
            <img src={changeIcon} alt="add" />
          </div>
        </div>
      </div>

      <WorkPopup open={open} handleClose={handleClose} />

      <WorkPopup
        companyName="YAMAHA"
        dateFrom={"2012"}
        dateTo={"2014"}
        title="CEO"
        open={open2}
        handleClose={handle2Close}
      />

      <WorkPopup
        companyName="YAMAHA"
        dateFrom={"2012"}
        dateTo={"2014"}
        title="CTO"
        open={open3}
        handleClose={handle3Close}
      />
    </div>
  );
}
