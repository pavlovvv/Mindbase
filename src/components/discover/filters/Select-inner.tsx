import styles from "@/main.module.scss";
import { MenuItem, Checkbox, ListItemText } from "@mui/material";
import Scrollbars from "react-custom-scrollbars";
import box from "@public/box.png";
import boxChecked from "@public/box-checked.png";

interface SelectProps {
  elements: string[] | string;
  heading: string;
  totalArr: string[];
  handleElChange: (newEl: string) => void;
}

export default function SelectInner({
  elements,
  heading,
  totalArr,
  handleElChange,
}: SelectProps) {
  return (
    <Scrollbars
      style={{ width: "100%", height: 123 }}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            background: "transparent",
            borderRadius: "14px",
            width: "14px",
            top: "4px",
            bottom: "4px",
            right: "6px",
            border: "1px solid #8AADD8",
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "#D2DADF",
            width: "12px",
            borderRadius: "10px",
            border: "1px solid #8AADD8",
          }}
        />
      )}
    >
      <div className={styles.select}>
        <div className={styles.select__text_grey}>{heading}</div>
        {totalArr.map((el) => (
          <MenuItem
            onClick={() => handleElChange(el)}
            key={el}
            value={el}
            className={styles["select__menu-item"]}
          >
            <Checkbox
              sx={{ padding: "0 12px 0 0" }}
              icon={
                <img
                  src={box}
                  className={styles["select__checkbox-icon"]}
                  alt="box"
                />
              }
              checkedIcon={
                <img
                  className={styles["select__checkbox-icon"]}
                  src={boxChecked}
                  alt="boxChecked"
                />
              }
              checked={
                typeof elements !== "string"
                  ? elements.includes(el)
                  : elements === el
              }
            />
            <ListItemText
              className={styles["select__list-item-text"]}
              primary={el}
            />
          </MenuItem>
        ))}
      </div>
    </Scrollbars>
  );
}
