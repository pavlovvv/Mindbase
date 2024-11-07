import { useMediaQuery } from "react-responsive";
import discoverStyles from "./discover.module.scss";
import styles from "@/main.module.scss";
import { Link } from "react-router-dom";
import DiscoverSearchInput from "./DiscoverSearchInput";
import SortPopup from "../sections/popups/SortPopup";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CardDesktop from "../card/CardDesktop";
import CardMobile from "../card/CardMobile";
import servicesData from "@public/services.json";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import TypesPopup from "../sections/popups/TypesPopup";
import { IDisplayedEl } from "./DiscoverSearch";
import DiscoverPagination from "./DiscoverPagination";

export default function DiscoverMatches() {
  const link = useLocation();
  const pathParts = link.pathname.split("/");
  const type1 = pathParts[1];

  const ITEMS_PER_PAGE: number = 2;

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [filteredServices, setFilteredServices] = useState(servicesData.data);

  useEffect(() => {
    const filtered = servicesData.data.filter((service) => {
      const matchesHeading = service.heading
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesHeading;
    });
    setFilteredServices(filtered);
    setPage(1);
  }, [searchTerm]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const displayedItems = filteredServices.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const pagesCount = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  return (
    <ThemeProvider theme={theme}>
      <div
        className={
          type1 === "needs" ? styles["wrapper_bg-blue"] : styles.wrapper
        }
      >
        <div className={styles.search}>
          <section
            className={styles.search__top}
            style={{ background: "transparent", marginTop: 0 }}
          >
            <h1 className={discoverStyles.discover__heading}>My Matches</h1>
            <div className={styles["search__top-buttons"]}>
              <div
                style={
                  !isMobile ? { display: "flex", columnGap: 34 } : { flex: 1 }
                }
              >
                <DiscoverSearchInput
                  width={!isMobile ? 300 : "fullwidth"}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                {!isMobile && <TypesPopup />}
              </div>
              {!isMobile && (
                <SortPopup
                  items={[
                    "From invites to recomendation",
                    "Just invites",
                    "Just recomendation",
                  ]}
                />
              )}
            </div>
            <div className={styles.matches__switches}>
              <Link
                to={"/offers/matches"}
                className={classNames(styles["matches__switches-item"], {
                  [styles["matches__switches-item_active"]]: type1 === "offers",
                })}
              >
                For my offers
              </Link>
              <Link
                to={"/needs/matches"}
                className={classNames(styles["matches__switches-item"], {
                  [styles["matches__switches-item_active"]]: type1 === "needs",
                })}
              >
                For my needs
              </Link>
            </div>

            {isMobile && (
              <div
                style={{
                  display: "flex",
                  marginTop: 34,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <TypesPopup />
                <SortPopup
                  items={[
                    "From invites to recomendation",
                    "Just invites",
                    "Just recomendation",
                  ]}
                />
              </div>
            )}
          </section>

          <section className={styles.matches__cards}>
            {page === 1 && (
              <>
                <div className={styles["section-header"]}>
                  <div className={styles["section-header__line"]} />
                  <div className={styles["section-header__title"]}>Invites</div>
                  <div className={styles["section-header__line"]} />
                </div>

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
                >
                  {!isMobile ? (
                    <CardDesktop
                      type={type1 as "needs" | "offers"}
                      option="matches"
                      matchType="Invite"
                      heading={"UX/UI design for ecommerce"}
                    />
                  ) : (
                    <CardMobile
                      type={type1 as "needs" | "offers"}
                      option="matches"
                      matchType="Invite"
                      heading={"UX/UI design for ecommerce"}
                    />
                  )}
                </Link>
              </>
            )}

            <div className={styles["section-header"]}>
              <div className={styles["section-header__line"]} />
              <div className={styles["section-header__title"]}>
                Recommendations
              </div>
              <div className={styles["section-header__line"]} />
            </div>
            {displayedItems.map((service: IDisplayedEl, index) => (
              <Link
                key={index}
                to={"/card/page"}
                state={{
                  type: type1,
                  option: "services",
                  heading: service.heading,
                  count: null || service.count,
                  img: null || service.img,
                  location: service.location,
                  minBudget: service.minBudget,
                  maxBudget: service.maxBudget,
                  budgetType: null || service.budgetType,
                }}
              >
                {!isMobile ? (
                  <CardDesktop
                    type={type1 as "needs" | "offers"}
                    option="matches"
                    matchType="Recommendation"
                    {...service}
                  />
                ) : (
                  <CardMobile
                    type={type1 as "needs" | "offers"}
                    option="matches"
                    matchType="Recommendation"
                    {...service}
                  />
                )}
              </Link>
            ))}

            <div style={{ marginTop: "44px" }}>
              <DiscoverPagination
                page={page}
                handlePageChange={handlePageChange}
                pagesCount={pagesCount}
                isMobile={isMobile}
              />
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}
