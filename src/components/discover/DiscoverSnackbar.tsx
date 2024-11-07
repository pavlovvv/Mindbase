import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

interface SnackbarProps {
  snackbarText: string;
  isSnackbarOpened: boolean
}

export default function DiscoverSnackbar({
  snackbarText,
  isSnackbarOpened
}: SnackbarProps) {

  return (
    <Snackbar
    open={isSnackbarOpened}
    TransitionComponent={Slide}
    autoHideDuration={3000}
    color="#fff"
  >
    <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
      {snackbarText}
    </Alert>
  </Snackbar>
  );
}
