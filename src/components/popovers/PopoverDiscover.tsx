import popoverStyles from "./popover.module.scss";
import { Link } from "react-router-dom";
import PopupState, { bindPopover, bindHover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";

export default function PopoverDiscover() {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <div {...bindHover(popupState)}>Discover</div>
          <HoverPopover
            {...bindPopover(popupState)}
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
                <Link to={"/organizations/innovation-hills"}>
                  Organizations
                </Link>
              </div>
            </div>
          </HoverPopover>
        </div>
      )}
    </PopupState>
  );
}
