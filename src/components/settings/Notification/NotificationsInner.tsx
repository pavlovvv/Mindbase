import styles from "@/main.module.scss";
import { useState } from "react";
import dot from "@public/dot.png"
import dotActive from "@public/dot-active.png"
import { MenuItem, Checkbox, ListItemText } from "@mui/material";

export default function NotificationsInner() {
  const [currentChoice, setCurrentChoice] = useState<string>("All activity");

  return (
    <>
      <MenuItem
        onClick={() => setCurrentChoice("All activity")}
        value="All activity"
        style={{ padding: 0, height: 48 }}
        className={styles["select__menu-item"]}
      >
        <CustomCheckbox currentChoice={currentChoice} boxChoice="All activity" />
        <ListItemText
          primary="All activity"
          sx={{"& .MuiTypography-root": {letterSpacing: "0.05em", fontSize: 16}}}
        />
      </MenuItem>

      <MenuItem
        onClick={() => setCurrentChoice("Important activity only")}
        value="Important activity only"
        style={{ padding: 0, height: 48 }}
        className={styles["select__menu-item"]}
      >
        <CustomCheckbox currentChoice={currentChoice} boxChoice="Important activity only" />
        <div>
        <ListItemText
          primary="Important activity only"
          sx={{"& .MuiTypography-root": {letterSpacing: "0.05em", fontSize: 16}}}
        />
        <div className={styles.settings__notification_grey}>1:1 messages, @mentions</div>
        </div>
      </MenuItem>

      <MenuItem
        onClick={() => setCurrentChoice("Nothing")}
        value="Nothing"
        style={{ padding: 0, height: 48 }}
        className={styles["select__menu-item"]}
      >
        <CustomCheckbox currentChoice={currentChoice} boxChoice="Nothing" />
        <ListItemText
          primary="Nothing"
          sx={{"& .MuiTypography-root": {letterSpacing: "0.05em", fontSize: 16}}}
        />
      </MenuItem>

    </>
  );
}

interface ChecboxProps {
  currentChoice: string
  boxChoice: string
}

const CustomCheckbox = ({ currentChoice, boxChoice }: ChecboxProps) => {
  return <Checkbox
    sx={{ padding: "0 12px 0 0" }}
    icon={
      <img
        src={dot}
        style={{ minWidth: 24, height: 24 }}
        alt="box"
      />
    }
    checkedIcon={
      <img
        style={{ minWidth: 24, height: 24 }}
        src={dotActive}
        alt="boxChecked"
      />
    }
    checked={currentChoice === boxChoice}
  />
}
