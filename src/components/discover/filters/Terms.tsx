import styles from "@/main.module.scss";
import { MenuItem, Checkbox, ListItemText } from "@mui/material";
import box from "@public/box.png";
import boxChecked from "@public/box-checked.png";

interface TermsProps {
  term: string;
  setTerm: (newTerm: string) => void;
}

const terms = [
  "Less tham 1 month",
  "1 to 3 moths",
  "3 to 6 months",
  "More than 6 months",
];

export default function Terms({ term, setTerm }: TermsProps) {
  return (
    <div className={styles["search__filters-item"]}>
      <h2 className={styles["search__filters-heading"]}>Terms</h2>
      <div>
        {terms.map((el) => (
          <MenuItem
            onClick={() => setTerm(el)}
            key={el}
            value={el}
            style={{ padding: 0 }}
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
              checked={term === el}
            />
            <ListItemText
              className={styles["select__list-item-text"]}
              primary={el}
            />
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
