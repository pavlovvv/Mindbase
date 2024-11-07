import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import searchIcon from "@public/search-line.png";
import styles from "@/index.module.scss";
import { useState } from "react";

interface InputProps {
  width: number | "fullwidth";
  handleTagChange?: (tag: string) => void;
  searchTerm?: string;
  setSearchTerm?: (term: string) => void;
  isIcon?: boolean;
  placeholder?: string;
}

export default function DiscoverSearchInput({
  width,
  handleTagChange,
  searchTerm,
  setSearchTerm,
  isIcon = true,
  placeholder = "Search",
}: InputProps) {
  const [state, setState] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (setSearchTerm) setSearchTerm(newValue);
    else setState(newValue);
  };

  return (
    <Paper
      component="div"
      className={styles.paper}
      sx={{
        display: "flex",
        borderRadius: "4px",
        height: "44px",
        alignItems: "center",
        boxShadow: "none",
        border: "1px solid #25436D",
        outline: "none",
        width,
        flex: width === "fullwidth" ? 1 : "1 1 auto",
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
      {isIcon && (
        <IconButton sx={{ p: "10px 0 10px 8px" }} aria-label="menu">
          <img
            src={searchIcon}
            alt="search-icon"
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
      )}
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "& .css-1jrstcx-MuiInputBase-input": {
            padding: 0,
          },
        }}
        fullWidth
        placeholder={placeholder}
        inputProps={{ "aria-label": "Search" }}
        value={searchTerm || state}
        onChange={handleChange}
        onKeyDown={(ev) => {
          if (ev.key === "Enter" && handleTagChange) {
            handleTagChange((searchTerm as string) || state);
            ev.preventDefault();
          }
        }}
      />
    </Paper>
  );
}
