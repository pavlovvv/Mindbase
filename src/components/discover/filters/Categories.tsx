import { InputLabel, FormControl, OutlinedInput, Select } from "@mui/material";
import arrow from "@public/arrow-blue.png";
import SelectInner from "./Select-inner";

interface CategoriesProps {
  category: string[];
  categories?: string[];
  heading?: string;
  inputLabel?: string;
  handleCategoryChange: (newCategory: string) => void;
}

const categoriesTest = [
  "All - Accounting & Consulting",
  "Personal & Professional Consulting",
  "Accounting 1",
  "Consulting 1",
  "Accounting 2",
  "Consulting 2",
  "Accounting 3",
  "Consulting 3",
];

export default function Categories({
  category,
  heading = "All categories",
  inputLabel = "Accounting & Consulting",
  categories = categoriesTest,
  handleCategoryChange,
}: CategoriesProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-checkbox-label" sx={{ lineHeight: 1 }}>
        {heading}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={category}
        onChange={() => {}}
        input={<OutlinedInput label={heading} />}
        renderValue={(selected) => selected.join(", ")}
        IconComponent={(props) => (
          <img
            {...props}
            src={arrow}
            style={{ top: "unset", right: "21px", transition: "all 0.2s ease" }}
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
          heading={inputLabel}
          elements={category}
          totalArr={categories}
          handleElChange={handleCategoryChange}
        />
      </Select>
    </FormControl>
  );
}
