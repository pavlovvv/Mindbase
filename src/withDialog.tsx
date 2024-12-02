import { Dialog } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { PopupTransition } from "@/components/sections/Needs";

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const withDialog = ({
    open,
    handleClose,
    children
}: DialogProps) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    return (
        <Dialog
            open={open}
            TransitionComponent={PopupTransition}
            keepMounted
            disableScrollLock
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={
                !isMobile
                    ? {
                        backdropFilter: "blur(5px) sepia(5%)",
                        "& .MuiDialog-paper": {
                            borderRadius: "14px",
                            maxWidth: "none",
                            maxHeight: "none",
                            margin: 0,
                        },
                    }
                    : {
                        "& .MuiDialog-paper": {
                            maxWidth: "none",
                            maxHeight: "none",
                            margin: 0,
                        },
                        "& .MuiDialog-container": {
                            alignItems: "stretch",
                        },
                    }
            }
        >
            {children}
        </Dialog>
    );
};

export default withDialog;
