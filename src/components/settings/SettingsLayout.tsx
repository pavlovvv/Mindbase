import styles from "@/main.module.scss";
import { useMediaQuery } from "react-responsive";
import { Outlet, useLocation, Link } from "react-router-dom";
import discoverStyles from "@components/discover/discover.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../discover/theme";
import ProfileTopMobile from "./Profile/ProfileTopMobile";

export default function SettingsLayout() {
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const type1 = pathParts[2];

  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <ThemeProvider theme={theme}>
      <div
        className={
          type1 === "needs" ? styles["wrapper_bg-blue"] : styles.wrapper
        }
      >
        {isTablet && <ProfileTopMobile />}

        <div className={styles.settings}>
          <nav style={{ display: isTablet ? "none" : "initial" }}>
            <h1 className={discoverStyles.discover__heading}>Settings</h1>

            <ol
              className={`${styles["settings__nav-item"]} ${
                type1 === "needs" && styles["settings__nav-item_needs"]
              }`}
              style={{ marginTop: 44 }}
            >
              <Link to="/settings/profile">
                <li
                  className={`${
                    isActive("/settings/profile") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Profile settings
                </li>
              </Link>
              <Link to="/settings/contact">
                <li
                  className={`${
                    isActive("/settings/contact") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Contact info
                </li>
              </Link>
              <Link to="/settings/organizations">
                <li
                  className={`${
                    isActive("/settings/organizations") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  My organizations
                </li>
              </Link>
            </ol>

            <ol
              className={`${styles["settings__nav-item"]} ${
                type1 === "needs" && styles["settings__nav-item_needs"]
              }`}
            >
              <Link to="/settings/needs">
                <li
                  className={`${
                    (isActive("/settings/needs") ||
                      isActive("/settings/offers")) &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Needs/Offers
                </li>
              </Link>
              <Link to="/settings/portfolio">
                <li
                  className={`${
                    isActive("/settings/portfolio") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Portfolio
                </li>
              </Link>
              <Link to="/settings/projects">
                <li
                  className={`${
                    isActive("/settings/projects") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Projects
                </li>
              </Link>
              <Link to="/settings/hiring">
                <li
                  className={`${
                    isActive("/settings/hiring") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Hiring
                </li>
              </Link>
            </ol>

            <ol
              className={`${styles["settings__nav-item"]} ${
                type1 === "needs" && styles["settings__nav-item_needs"]
              }`}
            >
              <Link to="/settings/membership-connects">
                <li
                  className={`${
                    isActive("/settings/membership-connects") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Membership & Connects
                </li>
              </Link>
              <Link to="/settings/notification">
                <li
                  className={`${
                    isActive("/settings/notification") &&
                    styles["settings__nav-item_active"]
                  }`}
                >
                  Notification settings
                </li>
              </Link>
            </ol>
          </nav>

          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
