import Popover from "@mui/material/Popover";
import { useState } from "react";
import popoverStyles from "./popover.module.scss";
import { Link } from "react-router-dom";

export default function PopoverDiscover() {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div onMouseEnter={handleClick}>Discover</div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          zIndex: 1500,
          "& .MuiPaper-root": { borderRadius: "0 14px 14px 14px" },
        }}
        className={popoverStyles.popover_discover}
      >
        <div className={popoverStyles.popover_discover__wrapper}>
          <div>
            <Link to={"/discover/needs"}>Needs</Link>
          </div>
          <div>
            <Link to={"/discover/offers"}>Offers</Link>
          </div>
          <div>
            <Link to={"/organizations/innovation-hills"}>Organizations</Link>
          </div>
        </div>
      </Popover>
    </>
  );
}
