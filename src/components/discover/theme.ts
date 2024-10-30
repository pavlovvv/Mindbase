import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5A95C1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8AADD8",
          },
        },
        notchedOutline: {
          borderColor: "#8AADD8",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5A95C1",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#8AADD8",
            },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5A95C1",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8AADD8",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderColor: "#5A95C1",
          },
          "&.Mui-focused": {
            borderColor: "#8AADD8",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#8AADD8",
    },
  },
});

export default theme;
