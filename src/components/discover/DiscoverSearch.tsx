import { useMediaQuery } from "react-responsive";
import discoverStyles from "./discover.module.scss";
import styles from "@/main.module.scss";
import arrowLeft from "@public/arrow-left.png";
import { Link } from "react-router-dom";
import DiscoverSearchInput from "./DiscoverSearchInput";
import SortPopup from "../sections/popups/SortPopup";
import cross from "@public/blue-cross.png";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CardDesktop from "../card/CardDesktop";
import CardMobile from "../card/CardMobile";
import servicesData from "@public/services.json";
import productsData from "@public/products.json";
import organizationsData from "@public/organizations.json";
import peopleData from "@public/people.json";
import offersProducts from "@public/offers-products.json";
import Dialog from "@mui/material/Dialog";
import searchPopup from "@public/search-popup.png";
import popupStyles from "@components/sections/popups/popup.module.scss";
import { PopupTransition } from "../sections/Needs";
import { useLocation } from "react-router-dom";
import Categories from "./filters/Categories";
import Budget from "./filters/Budget";
import Location from "./filters/Location";
import Terms from "./filters/Terms";
import Tags from "./filters/Tags";
import classNames from "classnames";
import DiscoverPagination from "./DiscoverPagination";
import DiscoverSnackbar from "./DiscoverSnackbar";

interface SearchProps {
  isCategory?: boolean;
  isBudget?: boolean;
  isTerms?: boolean;
  isSaleChannels?: boolean;
  isName?: boolean;
}

export interface IDisplayedEl {
  heading: string;
  minBudget: number;
  maxBudget: number;
  location: string;
  budgetType?: "per item";
  count?: number;
  img?: string;
}

export default function DiscoverSearch({
  isCategory = true,
  isBudget,
  isTerms,
  isSaleChannels,
  isName,
}: SearchProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1439px)" });
  const isPc = useMediaQuery({ query: "(min-width: 1900px)" });

  const link = useLocation();
  const pathParts = link.pathname.split("/");
  const type1 = pathParts[1];
  const type2 = pathParts[2];

  const isProducts: boolean = type1 === "offers" && type2 === "products";
  const isOrganizations = type1 !== "offers" && type1 !== "needs";

  const data = (() => {
    if (type1 === "offers" && type2 === "products") return offersProducts.data; // при /offers/products
    if (type1 === "needs" && type2 === "products") return productsData.data; // при /needs/products
    if (type1 === "organizations") return organizationsData.data; // при organization/search
    if (type1 === "people") return peopleData.data; // при people/search
    return servicesData.data; // у всіх інших випадках як needs/services, offers/partnership і тд
  })();

  const ITEMS_PER_PAGE: number = (() => {
    if (!isProducts || isMobile) return 4; //якщо не в offers/products 4 айтема
    if (isTablet) return 6; // на планшетах 6
    if (isLaptop) return 4; // на лаптопах 4
    if (isPc) return 12; // на пк 12
    return 9; // на ноутбуках 9
  })();

  const [category, setCategory] = useState<string[]>([]);
  const [saleChannels, setSaleChannels] = useState<string[]>([]);
  const [tags, setTag] = useState<string[]>([]);
  const [page, setPage] = useState(1); // Добавляем состояние для текущей страницы
  const [searchTerm, setSearchTerm] = useState(""); // Добавлено состояние для строки поиска
  const [filteredServices, setFilteredServices] = useState(data);

  const [minBudget, setMinBudget] = useState<number | null>(null); // Минимальный бюджет
  const [maxBudget, setMaxBudget] = useState<number | null>(null); // Максимальный бюджет
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [isSnackbarOpened, setSnackBarOpen] = useState(false);
  const [openEl, setElOpen] = useState(false);

  useEffect(() => {
    const filtered = data.filter((service) => {
      const matchesHeading = service.heading
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesBudget =
        (minBudget === null || service.minBudget >= minBudget) &&
        (maxBudget === null || service.maxBudget <= maxBudget);
      const matchesLocation = location === "" || service.location === location;

      return matchesHeading && matchesBudget && matchesLocation;
    });
    setFilteredServices(filtered);
    setPage(1); // Сбрасываем на первую страницу при новом поиске или изменении бюджета
  }, [searchTerm, minBudget, maxBudget, location]);

  const handleClickElOpen = () => {
    setElOpen(true);
  };

  const handleElClose = () => {
    setElOpen(false);
  };

  const handleTagChange = (tag: string) => {
    if (tags.includes(tag)) {
      setSnackBarOpen(true);
      setTimeout(() => {
        setSnackBarOpen(false);
      }, 3500);
    } else {
      setTag([...tags, tag]);
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    if (category.includes(newCategory)) {
      setCategory(category.filter((item) => item !== newCategory));
    } else {
      setCategory([...category, newCategory]);
    }
  };

  const handleSaleChannelsChange = (newChannel: string) => {
    if (saleChannels.includes(newChannel)) {
      setSaleChannels(saleChannels.filter((item) => item !== newChannel));
    } else {
      setSaleChannels([...saleChannels, newChannel]);
    }
  };

  const deleteTag = (tag: string) => {
    setTag(tags.filter((item) => item !== tag));
  };

  const handleMinBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinBudget(Number(e.target.value));
  };

  const handleMaxBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxBudget(Number(e.target.value));
  };

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setMinBudget(null);
    setMaxBudget(null);
    setLocation("");
    setTag([]);
    setCategory([]);
    setSaleChannels([]);
    setTerm("");
  };

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
          <section>
            <Link to={`/discover/${type1}`}>
              <div
                className={styles.discover__back}
                style={{ paddingLeft: 24 }}
              >
                <img src={arrowLeft} alt="arrow-left" /> Back
              </div>
            </Link>
          </section>
          <section
            className={`${styles.search__top} ${
              isOrganizations && styles["search_organizations-bg"]
            }`}
          >
            <h1 className={discoverStyles.discover__heading}>
              {!isOrganizations ? (
                <>
                  {type1.charAt(0).toUpperCase() + type1.slice(1)} -{" "}
                  {type2.charAt(0).toUpperCase() + type2.slice(1)}
                </>
              ) : (
                <>{type1.charAt(0).toUpperCase() + type1.slice(1)}</>
              )}
            </h1>
            <div className={styles["search__top-buttons"]}>
              <DiscoverSearchInput
                width={!isMobile ? 300 : "fullwidth"}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              {!isTablet ? (
                <SortPopup
                  items={[
                    "From newer to older",
                    "Relevance",
                    "Need spends",
                    "Rating",
                  ]}
                />
              ) : (
                <span onClick={handleClickElOpen}>
                  <img
                    src={searchPopup}
                    style={{ width: "28px", height: "28px" }}
                    alt="searchPopup"
                  />
                </span>
              )}
            </div>
          </section>

          <section className={styles["search__filters-wrapper"]}>
            {isTablet && (
              <div style={{ width: "fit-content", margin: "0 0 0 auto" }}>
                <SortPopup
                  items={[
                    "From newer to older",
                    "Relevance",
                    "Need spends",
                    "Rating",
                  ]}
                />
              </div>
            )}
            <h2 className={styles["search__filters-heading"]}>Filters</h2>
            {(searchTerm ||
              location ||
              category.length > 0 ||
              saleChannels.length > 0 ||
              minBudget ||
              maxBudget ||
              term ||
              tags.length > 0) && (
              <div className={styles["search__filters-buttons"]}>
                {searchTerm && (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => setSearchTerm("")}
                  >
                    {searchTerm}
                    <img src={cross} />
                  </div>
                )}
                {category.map((el) => (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => handleCategoryChange(el)}
                  >
                    {el}
                    <img src={cross} />
                  </div>
                ))}
                {saleChannels.map((el) => (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => handleSaleChannelsChange(el)}
                  >
                    {el}
                    <img src={cross} />
                  </div>
                ))}
                {minBudget && (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => setMinBudget(null)}
                  >
                    from {minBudget}$<img src={cross} />
                  </div>
                )}
                {maxBudget && (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => setMaxBudget(null)}
                  >
                    to {maxBudget}$<img src={cross} />
                  </div>
                )}
                {term && (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => setTerm("")}
                  >
                    {term}
                    <img src={cross} />
                  </div>
                )}
                {tags.map((tag) => (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => deleteTag(tag)}
                  >
                    {tag}
                    <img src={cross} />
                  </div>
                ))}
                {location && (
                  <div
                    className={styles["search__filter-button"]}
                    onClick={() => setLocation("")}
                  >
                    {location}
                    <img src={cross} />
                  </div>
                )}

                <div style={{ cursor: "pointer" }} onClick={clearFilters}>
                  Clear filters
                </div>
              </div>
            )}

            <div className={styles["search__filters-sections"]}>
              <section
                className={`${
                  type1 === "needs" && styles["search__filters-left"]
                } 
                    ${
                      (type1 === "offers" || isOrganizations) &&
                      styles["search__filters-left_offers"]
                    }
                    `}
              >
                {isCategory && (
                  <div className={styles["search__filters-item"]}>
                    <h2 className={styles["search__filters-heading"]}>
                      Category
                    </h2>

                    <Categories
                      category={category}
                      handleCategoryChange={handleCategoryChange}
                    />
                  </div>
                )}

                {isName && (
                  <div className={styles["search__filters-item"]}>
                    <h2 className={styles["search__filters-heading"]}>Name</h2>

                    <DiscoverSearchInput
                      width="fullwidth"
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                      isIcon={false}
                      placeholder="Type @name"
                    />
                  </div>
                )}

                {isBudget && (
                  <Budget
                    minBudget={minBudget}
                    maxBudget={maxBudget}
                    handleMaxBudgetChange={handleMaxBudgetChange}
                    handleMinBudgetChange={handleMinBudgetChange}
                  />
                )}

                {isTerms && <Terms term={term} setTerm={setTerm} />}

                <Location
                  location={location}
                  handleLocationChange={handleLocationChange}
                />

                {isSaleChannels && (
                  <div className={styles["search__filters-item"]}>
                    <h2 className={styles["search__filters-heading"]}>
                      Sale Channels
                    </h2>

                    <Categories
                      category={saleChannels}
                      handleCategoryChange={handleSaleChannelsChange}
                      categories={["Africa", "Americas", "Japan", "Ukraine"]}
                      heading="All region"
                      inputLabel="Regions"
                    />
                  </div>
                )}

                <Tags
                  tags={tags}
                  handleTagChange={handleTagChange}
                  deleteTag={deleteTag}
                />

                <div className={styles["search__filters-item"]}>
                  <div
                    className={
                      styles["main-button"] + " " + styles["card__view-more"]
                    }
                    style={{ marginTop: 0, width: "100%" }}
                  >
                    Show 56 results
                  </div>
                </div>
              </section>
              <section
                className={classNames(styles["search__filters-cards"], {
                  [styles["search__filters-cards_products"]]: isProducts,
                })}
              >
                {/* Отображение отфильтрованных элементов */}
                {displayedItems.map((service: IDisplayedEl, index) => (
                  <Link
                    key={index}
                    to={
                      !isOrganizations
                        ? "/card/page"
                        : type1 === "organizations"
                        ? "/organizations/innovation-hills"
                        : "/"
                    }
                    state={{
                      type: type1,
                      option: type2,
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
                        option={
                          type2 as "services" | "partnership" | "products"
                        }
                        {...service}
                      />
                    ) : (
                      <CardMobile
                        type={type1 as "needs" | "offers"}
                        option={
                          type2 as "services" | "partnership" | "products"
                        }
                        {...service}
                      />
                    )}
                  </Link>
                ))}

                <DiscoverPagination
                  page={page}
                  handlePageChange={handlePageChange}
                  pagesCount={pagesCount}
                  isMobile={isMobile}
                />
              </section>
            </div>
          </section>
        </div>
      </div>

      <Dialog
        open={openEl}
        TransitionComponent={PopupTransition}
        keepMounted
        disableScrollLock
        onClose={handleElClose}
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
        <div
          className={`${popupStyles["search-popup"]} ${
            type1 !== "needs" && popupStyles["search-popup_bg-blue"]
          }`}
        >
          <section
            className={`${styles["search__filters-left"]}                     ${
              type1 !== "needs" && styles["search__filters-left_offers"]
            }`}
            style={{ display: "block" }}
          >
            {isCategory && (
              <div className={styles["search__filters-item"]}>
                <h2 className={styles["search__filters-heading"]}>Category</h2>

                <Categories
                  category={category}
                  handleCategoryChange={handleCategoryChange}
                />
              </div>
            )}

            {isName && (
              <div className={styles["search__filters-item"]}>
                <h2 className={styles["search__filters-heading"]}>Name</h2>

                <DiscoverSearchInput
                  width="fullwidth"
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  isIcon={false}
                  placeholder="Type @name"
                />
              </div>
            )}

            {isBudget && (
              <Budget
                minBudget={minBudget}
                maxBudget={maxBudget}
                handleMaxBudgetChange={handleMaxBudgetChange}
                handleMinBudgetChange={handleMinBudgetChange}
              />
            )}

            {isTerms && <Terms term={term} setTerm={setTerm} />}

            <Location
              location={location}
              handleLocationChange={handleLocationChange}
            />

            {isSaleChannels && (
              <div className={styles["search__filters-item"]}>
                <h2 className={styles["search__filters-heading"]}>
                  Sale Channels
                </h2>

                <Categories
                  category={saleChannels}
                  handleCategoryChange={handleSaleChannelsChange}
                  categories={["Africa", "Americas", "Japan", "Ukraine"]}
                  heading="All region"
                  inputLabel="Regions"
                />
              </div>
            )}

            <Tags
              tags={tags}
              handleTagChange={handleTagChange}
              deleteTag={deleteTag}
            />

            <div className={styles["search__filters-item"]}>
              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
                style={{ marginTop: 0, width: "100%" }}
              >
                Show 56 results
              </div>
            </div>
          </section>
          <div className={popupStyles.popup__back} onClick={handleElClose}>
            <img src={arrowLeft} alt="arrow-left" /> Back
          </div>
        </div>
      </Dialog>

      <DiscoverSnackbar
        isSnackbarOpened={isSnackbarOpened}
        snackbarText="This tag has already been added before"
      />
    </ThemeProvider>
  );
}
