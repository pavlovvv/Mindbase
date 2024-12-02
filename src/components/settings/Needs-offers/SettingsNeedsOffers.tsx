import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import TypesPopup from "../../sections/popups/TypesPopup";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import DiscoverSearchInput from "@/components/discover/DiscoverSearchInput";
import SortPopup from "@/components/sections/popups/SortPopup";
import arrow from "@public/arrow-blue-big.png";
import SettingsCard from "./SettingsCard";
import { useCollapse } from "react-collapsed";
import SettingsPopup1 from "../Popups/SettingsPopup1";
import SettingsPopup2 from "../Popups/SettingsPopup2";
import pdfIcon from "@public/settings-pdf.png"

export default function SettingsNeedsOffers() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const pathParts = location.pathname.split("/");
  const type = pathParts[2];

  const my1 = type === "needs" ? "My Needs" : "My Offers"
  const my2 = type === "needs" ? "Innovation Hills Needs" : "Innovation Hills Offers"

  const [currentFilter, setCurrentFilter] = useState<string>("All")
  const filters = ["All", my1, my2];
  const reorderedFilters = [currentFilter, ...filters.filter(item => item !== currentFilter)];

  const [isExpanded, setExpanded] = useState<boolean>(true);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 0,
    hasDisabledAnimation: true,
  });

  const [is2Expanded, set2Expanded] = useState<boolean>(true);
  const exp2 = useCollapse({
    isExpanded: is2Expanded,
    collapsedHeight: 0,
    hasDisabledAnimation: true,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentChoice, setCurrentChoice] = useState<string>("Service");

  const [open2, set2Open] = useState(false);

  const handle2ClickOpen = () => {
    set2Open(true);
  };

  const handle2Close = () => {
    set2Open(false);
  };

  return (
    <section style={{ width: "100%" }}>
      <div className={styles.settings__element}>
        <div>
          <div className={styles.matches__switches} style={{ marginTop: 0 }}>
            <Link
              to={"/settings/needs"}
              className={classNames(styles["matches__switches-item"], {
                [styles["matches__switches-item_active"]]: type === "needs",
              })}
              style={{ padding: "8px 34px" }}
            >
              Needs
            </Link>
            <Link
              to={"/settings/offers"}
              className={classNames(styles["matches__switches-item"], {
                [styles["matches__switches-item_active"]]: type === "offers",
              })}
              style={{ padding: "8px 34px" }}
            >
              Offers
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.settings__element}>
        <div className={styles["settings__top-buttons"]}>
          <DiscoverSearchInput
            width={!isMobile ? 328 : "fullwidth"}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {!isMobile && (
            <SortPopup
              items={[
                "From newer to older",
                "My needs first",
                "Organization needs first",
                "Just my needs",
                "Just organization needs",
              ]}
            />
          )}
        </div>
      </div>

      <div className={styles.settings__element}>
        <div className={styles["settings__top-buttons"]}>
          <TypesPopup
            width={154}
            label={currentFilter}
            setNewEl={setCurrentFilter}
            items={reorderedFilters}
          />
          {isMobile && (
            <SortPopup
              items={[
                "From newer to older",
                "My needs first",
                "Organization needs first",
                "Just my needs",
                "Just organization needs",
              ]}
            />
          )}
        </div>
      </div>

      <div className={styles.settings__element}>
        <div className={styles["settings__top-change-type"]}>
          <span>Published</span>
          <span>Drafts</span>
        </div>
      </div>

      {(currentFilter === my1 || currentFilter === "All") && <div className={styles.settings__element}>
        <div>
          <section
            className={styles.matches__cards}
            style={{ gap: 36, padding: 0 }}
          >
            <div className={styles["section-header_edit"]}>
              <div className={styles["section-header__line"]} />
              <div
                className={styles["section-header__title_edit"]}
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
              >
                {my1}{" "}
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${!isExpanded && styles.settings__arrow_rotate}`}
                />
              </div>
              <div className={styles["section-header__line"]} />
            </div>

            <div {...getCollapseProps()}>
              <div
                className={styles["settings-card"]}
                style={{ marginBottom: !isMobile ? 36 : 0 }}
              >
                <SettingsCard />
              </div>
              <div className={styles["settings-card"]}>
                <SettingsCard />
              </div>
              <div
                className={styles.settings__buttons}
                style={{
                  marginTop: isMobile ? 64 : "inherit",
                  paddingBottom: isMobile ? 0 : "inherit",
                }}
              >
                <div
                  className={
                    styles["main-button"] + " " + styles["card__view-more"]
                  }
                  onClick={handleClickOpen}
                >
                  Add new
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>}

      {(currentFilter === my2 || currentFilter === "All") && <div className={styles.settings__element}>
        <div>
          <section
            className={styles.matches__cards}
            style={{ gap: 36, padding: 0 }}
          >
            <div className={styles["section-header_edit"]}>
              <div className={styles["section-header__line"]} />
              <div
                className={styles["section-header__title_edit"]}
                {...exp2.getToggleProps({
                  onClick: () => set2Expanded((prevExpanded) => !prevExpanded),
                })}
              >
                {my2}
                <img
                  src={arrow}
                  alt="arrow"
                  className={`${!is2Expanded && styles.settings__arrow_rotate}`}
                />
              </div>
              <div className={styles["section-header__line"]} />
            </div>

            <div {...exp2.getCollapseProps()}>
              <div
                className={styles["settings-card"]}
                style={{ marginBottom: !isMobile ? 36 : 0 }}
              >
                <SettingsCard />
              </div>
              <div className={styles["settings-card"]}>
                <SettingsCard />
              </div>
              <div
                className={styles.settings__buttons}
                style={{
                  marginTop: isMobile ? 64 : "inherit",
                  paddingBottom: isMobile ? 0 : "inherit",
                }}
              >
                <div
                  className={
                    styles["main-button"] + " " + styles["card__view-more"]
                  }
                  onClick={handleClickOpen}
                >
                  Add new
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>}

      <SettingsPopup1 open={open} handleClickOpen={handle2ClickOpen} handleClose={handleClose} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} />

      <SettingsPopup2
        isBudget
        isTerms
        isLocation
        files={[pdfIcon]}
        isType
        heading={type === "needs" ? "need" : "offer"}
        open={open2}
        handleClose={handle2Close}
        currentChoice={currentChoice}
        setCurrentChoice={setCurrentChoice} />
    </section>
  );
}
