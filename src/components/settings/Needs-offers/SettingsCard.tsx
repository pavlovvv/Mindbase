import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CardDesktop from "@/components/card/CardDesktop";
import CardMobile from "@/components/card/CardMobile";
import changeIcon from "@public/change.png";
import Popover from "@mui/material/Popover";
import popoverStyles from "@components/popovers/popover.module.scss";

export default function SettingsCard() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const type1 = pathParts[2];

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Link
      to={"/card/page"}
      state={{
        type: type1,
        option: "services",
        heading: "UX/UI design for ecommerce",
        location: "Tokyo, Japan",
        minBudget: 1000,
        maxBudget: 5000,
      }}
      style={{ position: "relative" }}
    >
      {!isMobile ? (
        <CardDesktop
          type={type1 as "needs" | "offers"}
          option="services"
          heading={"UX/UI design for ecommerce"}
        />
      ) : (
        <CardMobile
          type={type1 as "needs" | "offers"}
          option="services"
          heading={"UX/UI design for ecommerce"}
        />
      )}

      <div
        className={styles["card__edit-button"]}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleClick(event);
        }}
      >
        <img src={changeIcon} alt="add" />
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={(event: any) => {
          event.preventDefault();
          event.stopPropagation();
          handleClose();
        }}
        anchorOrigin={
          !isMobile
            ? {
                vertical: "center",
                horizontal: "right",
              }
            : {
                vertical: "top",
                horizontal: "center",
              }
        }
        transformOrigin={
          !isMobile
            ? {
                vertical: "top",
                horizontal: "right",
              }
            : {
                vertical: "bottom",
                horizontal: "right",
              }
        }
        disableScrollLock
        className={popoverStyles.popover}
      >
        <div
          className={popoverStyles.popover_discover__wrapper}
          style={{ width: 160 }}
        >
          <div>Edit</div>
          <div>Move to drafts</div>
          <div>Delete</div>
        </div>
      </Popover>
    </Link>
  );
}
