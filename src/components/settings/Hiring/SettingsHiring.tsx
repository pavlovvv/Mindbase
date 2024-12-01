import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import DiscoverSearchInput from "@/components/discover/DiscoverSearchInput";
import SortPopup from "@/components/sections/popups/SortPopup";
import arrow from "@public/arrow-blue-big.png";
import SettingsCard from "./SettingsHiringCard";
import { useCollapse } from "react-collapsed";
import SettingsPopup2 from "../Popups/SettingsPopup2";
import pdfIcon from "@public/settings-pdf.png"
import linkIcon from "@public/settings-link.png"

export default function SettingsHiring() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <section style={{ width: "100%" }}>
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
                "My projects first",
                "Organization projects first",
                "Just my projects",
                "Just organization projects",
              ]}
            />
          )}
        </div>
      </div>

      {isMobile && (<div className={styles.settings__element}>
        <div className={styles["settings__top-buttons"]}>
          <SortPopup
            items={[
              "From newer to older",
              "My projects first",
              "Organization projects first",
              "Just my projects",
              "Just organization projects",
            ]}
          />
        </div>
      </div>)}

      <div className={styles.settings__element}>
        <div className={styles["settings__top-change-type"]}>
          <span>Published</span>
          <span>Drafts</span>
        </div>
      </div>

      <div className={styles.settings__element}>
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
                Hiring
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
      </div>

      <div className={styles.settings__element}>
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
                Innovation Hills Hiring
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
      </div>
      <SettingsPopup2
        files={[linkIcon, pdfIcon]}
        isLink
        heading={"vacancy card"}
        open={open}
        isBudget
        isVacancy
        isLocation
        isExperience
        isEnglish
        titlePlaceholder="Vacancy card title"
        handleClose={handleClose}
        descriptionPlaceholder="Briefly describe your case"
      />
    </section>
  );
}
