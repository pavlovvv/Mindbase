import styles from "@/main.module.scss";
import { useState } from "react";
import NotificationsInner from "./NotificationsInner";
import { MenuItem, Checkbox, ListItemText } from "@mui/material";
import box from "@public/box.png"
import boxChecked from "@public/box-checked.png"

export default function SettingsNotification() {
  const [isClicked, setClick] = useState<boolean>(false)

  return (
    <section style={{ width: '100%' }}>
      <div className={styles.settings__notification}>
        <h2 className={styles.settings__notification_heading}>Desktop</h2>
        <h3 className={styles["settings__notification_inner-heading"]}>Show notifications for:</h3>
        <NotificationsInner />
      </div>

      <div className={styles.settings__notification}>
        <h2 className={styles.settings__notification_heading}>Mobile</h2>
        <h3 className={styles["settings__notification_inner-heading"]}>Show notifications for:</h3>
        <NotificationsInner />
      </div>

      <div className={styles.settings__notification} style={{ marginBottom: 16 }}>
        <h2 className={styles.settings__notification_heading}>Email</h2>
        <h3 className={styles["settings__notification_inner-heading"]}>Show notifications for:</h3>
        <NotificationsInner />
      </div>

      <MenuItem
        onClick={() => setClick(clicked => !clicked)}
        style={{ padding: 0, height: 48 }}
        className={styles["select__menu-item_settings"]}
      >
        <Checkbox
          sx={{ padding: "0 12px 0 0" }}
          icon={
            <img
              src={box}
              style={{ width: 24, height: 24 }}
              alt="box"
            />
          }
          checkedIcon={
            <img
              style={{ width: 24, height: 24 }}
              src={boxChecked}
              alt="boxChecked"
            />
          }
          checked={isClicked}
        />
        <ListItemText
          primary={"Send me News"}
          style={{ fontSize: 16, lineHeight: 24 }}
        />
      </MenuItem>
    </section>
  );
}
