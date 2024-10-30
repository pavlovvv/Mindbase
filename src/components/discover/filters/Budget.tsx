import TextField from "@mui/material/TextField";
import styles from "@/main.module.scss";

interface BudgetProps {
  minBudget: number | null;
  maxBudget: number | null;
  handleMinBudgetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMaxBudgetChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Budget({
  minBudget,
  maxBudget,
  handleMaxBudgetChange,
  handleMinBudgetChange,
}: BudgetProps) {
  return (
    <div className={styles["search__filters-item"]}>
      <h2 className={styles["search__filters-heading"]}>
        Budget
        <div className={styles["search__filters-heading-button"]}>Item</div>
        <div className={styles["search__filters-heading-button"]}>kg</div>
      </h2>

      <div className={styles.search__budet}>
        <TextField
          type="number"
          id="outlined-basic"
          label="Min"
          sx={{ width: 102 }}
          size="small"
          variant="outlined"
          value={minBudget !== null ? minBudget : ""}
          onChange={handleMinBudgetChange}
        />
        <span>-</span>
        <TextField
          type="number"
          id="outlined-basic-max"
          label="Max"
          sx={{ width: 102 }}
          size="small"
          variant="outlined"
          value={maxBudget !== null ? maxBudget : ""}
          onChange={handleMaxBudgetChange}
        />

        <TextField
          id="outlined-basic-money"
          defaultValue="$"
          sx={{
            width: 45,
            marginLeft: "16px",
            "& .MuiInputBase-input": {
              textAlign: "center",
            },
          }}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          size="small"
          variant="outlined"
        />
      </div>
    </div>
  );
}
