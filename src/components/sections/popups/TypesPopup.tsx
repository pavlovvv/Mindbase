import { useState } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import popupStyles from "./popup.module.scss";
import popoverStyles from "@components/popovers/popover.module.scss";
import Typography from "@mui/material/Typography";
import Scrollbars from "react-custom-scrollbars";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import searchIcon from "@public/search-line.png";
import styles from "@/index.module.scss";
import { OutlinedInput } from "@mui/material";

interface TypesPopupProps {
  items: string[] | number[];
  width: number | "fullWidth";
  label?: string;
  placeholder?: string;
  isSearch?: boolean;
}

export default function TypesPopup({
  items,
  width,
  label,
  placeholder,
  isSearch,
}: TypesPopupProps) {
  const [service, setService] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setService(event.target.value as string);
  };

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [searchState, setSearchState] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  return (
    <FormControl
      size="medium"
      sx={{
        width: width !== "fullWidth" ? `${width}px` : "100%",
      }}
    >
      {label && (
        <InputLabel
          id="service-select"
          sx={{ top: "-5px" }}
          className={popupStyles.popup__label}
        >
          {label}
        </InputLabel>
      )}
      <Select
        labelId="service-select"
        id="service-select"
        value={service}
        input={<OutlinedInput label={label} />}
        placeholder={placeholder}
        onChange={handleChange}
        displayEmpty={!!placeholder}
        open={open}
        onOpen={toggleOpen}
        onClose={() => {
          if (!focus) setOpen(false);
        }}
        renderValue={() => {
          if (placeholder) {
            return <Typography color="#8B8A8A">{placeholder}</Typography>;
          }
        }}
        sx={{
          height: "44px",
          width: width !== "fullWidth" ? `${width}px` : "100%",
          "& .MuiOutlinedInput-notchedOutline": {
            background: "transparent",
            color: "#25436D",
            border: "1px solid #8AADD8",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            textAlign: "left",
            paddingRight: "16px",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "14px 0 14px 14px",
              boxShadow: "0px 0px 4px 0px #25436D4D",
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          disableScrollLock: true,
        }}
      >
        <Scrollbars
          style={{ width: "100%", height: !isSearch ? 123 : 142 }}
          renderTrackVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                background: "transparent",
                borderRadius: "14px",
                width: items.length > 3 ? "8px" : 0,
                top: "4px",
                bottom: "4px",
                right: "4px",
                border: items.length > 3 ? "1px solid #8AADD8" : 0,
              }}
            />
          )}
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                backgroundColor: "#D2DADF",
                width: items.length > 3 ? "6px" : 0,
                borderRadius: "10px",
                border: "1px solid #8AADD8",
              }}
            />
          )}
        >
          <div
            className={`${popoverStyles.popover__settings_wrapper} ${
              label &&
              !isSearch &&
              popoverStyles["popover__settings_wrapper_first-el-decorated"]
            }`}
          >
            {isSearch && (
              <Paper
                component="div"
                className={styles.paper}
                sx={{
                  display: "flex",
                  borderRadius: "4px",
                  height: "34px",
                  alignItems: "center",
                  boxShadow: "none",
                  border: "1px solid #8AADD8",
                  outline: "none",
                  width,
                  flex: 1,
                  background: "transparent",
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderColor: "#5A95C1",
                  },
                  "&:focus-within": {
                    borderColor: "#4A7DA3",
                  },
                }}
              >
                <IconButton sx={{ p: "10px 0 10px 8px" }} aria-label="menu">
                  <img
                    src={searchIcon}
                    alt="search-icon"
                    style={{ width: "17px", height: "17px" }}
                  />
                </IconButton>
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                    "& .css-1jrstcx-MuiInputBase-input": {
                      padding: 0,
                    },
                  }}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  fullWidth
                  placeholder={"Search"}
                  inputProps={{ "aria-label": "Search" }}
                  value={searchState}
                  onChange={handleStateChange}
                />
              </Paper>
            )}

            {items.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </Scrollbars>
      </Select>
    </FormControl>
  );
}
