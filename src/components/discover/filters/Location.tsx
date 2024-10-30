import { InputLabel, FormControl, OutlinedInput, Select } from "@mui/material";
import arrow from "@public/arrow-blue.png";
import SelectInner from "./Select-inner";
import styles from "@/main.module.scss";

interface LocationProps {
  heading?: string;
  inputLabel?: string;
  location: string;
  handleLocationChange: (newLocantion: string) => void;
}

const locations = ["Tokyo, Japan", "Kyiv, Ukraine", "USA"];

export default function Location({
  heading = "Location",
  inputLabel = "Select location",
  location,
  handleLocationChange,
}: LocationProps) {
  return (
    <div className={styles["search__filters-item"]}>
      <h2 className={styles["search__filters-heading"]}>{heading}</h2>

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label" sx={{ lineHeight: 1 }}>
          {inputLabel}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={location}
          onChange={() => {}}
          input={<OutlinedInput label="Select location" />}
          renderValue={() => location}
          IconComponent={(props) => (
            <img
              {...props}
              src={arrow}
              style={{
                top: "unset",
                right: "21px",
                transition: "all 0.2s ease",
              }}
            />
          )}
          sx={{
            "& .MuiSelect-select ": {
              padding: "11px 16px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#8AADD8",
            },
          }}
          inputProps={{
            MenuProps: {
              disableScrollLock: true,
              PaperProps: {
                style: {
                  width: 285,
                  borderRadius: "14px 0 14px 14px",
                  overscrollBehavior: "none",
                  padding: 0,
                  overflow: "hidden",
                },
              },
            },
          }}
        >
          <SelectInner
            heading="Regions"
            elements={location}
            totalArr={locations}
            handleElChange={handleLocationChange}
          />
        </Select>
      </FormControl>
    </div>
  );
}
