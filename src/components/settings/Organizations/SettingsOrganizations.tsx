import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import { useState } from "react";
import TypesPopup from "../../sections/popups/TypesPopup";
import logo from "@public/org-logo-desktop.jpg";
import TextField from "@mui/material/TextField";
import plusIcon from "@public/plus.png";
import whitePlusIcon from "@public/plus-icon-white.png"
import whiteDeleteIcon from "@public/cross-white.png";
import cross from "@public/cross.png"
import hajime from '@public/hajime.png'
import john from '@public/photo-sample.png'
import msg from '@public/msg.png'
import deleteIcon from "@public/blue-cross.png"
import Categories from "@/components/discover/filters/Categories";
import logoMobile from "@public/org-logo-mobile.png"
import changeIcon from "@public/change.png";

export default function SettingsOrganizations() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const interests: string[] = !isMobile
    ? [
      "Software delelopment",
      "Interest 3",
      "Interest 4 Interest",
      "IT",
      "Design",
      "Interest 4 Interest",
      "Interest 3",
      "Design",
      "Software delelopment",
    ]
    : [
      "Software delelopment",
      "Interest 3",
      "Interest 4 Interest"
    ];

  const [saleChannels, setSaleChannels] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleSaleChannelsChange = (newChannel: string) => {
    if (saleChannels.includes(newChannel)) {
      setSaleChannels(saleChannels.filter((item) => item !== newChannel));
    } else {
      setSaleChannels([...saleChannels, newChannel]);
    }
  };

  const handleTagChange = (newTag: string) => {
    if (tags.includes(newTag)) {
      setTags(tags.filter((item) => item !== newTag));
    } else {
      setTags([...tags, newTag]);
    }
  };

  return (
    <section>
      <div className={`${styles.settings__element} ${styles["settings__organizations-top"]}`}>

        <TypesPopup
          width={!isMobile ? 285 : "fullWidth"}
          label="Innovation Hills"
          items={["Innovation Hills", "Organization 2", "Organization 3"]}
        />

        <div className={styles["main-second-button"]}>Add organization</div>

        <div className={styles["settings-icon_plus"]}>
          <img src={plusIcon} alt="add" />
        </div>


      </div>


      {isMobile && <div className={styles.settings__element} style={{ padding: "0 16px" }}>
        <div className={styles["settings__orgainization-cover"]}>
          <div
            className={
              styles["main-button"] + " " + styles["card__view-more"]
            }
          >
            Change cover
          </div>
        </div>
      </div>}

      {isMobile && (<div className={`${styles.settings__element}`}>

        <div className={styles.settings__mobile} style={{ alignItems: 'center' }}>
          <div className={styles.settings__avatar_mobile}>
            <img src={logoMobile} alt="photo-sample" />{" "}
            <div
              className={`${styles["settings-icon_change"]} ${styles["settings__avatar-button"]}`}
            >
              <img src={changeIcon} alt="add" />
            </div>
          </div>
          <div>
            <h4 className={styles.settings__heading}>Visability</h4>

            <div>
              <TypesPopup
                width={"fullWidth"}
                label="Public"
                items={["Public", "Only coworkers", "Private"]}
              />
            </div>
          </div>
        </div>
      </div>)}

      <div className={styles.settings__element}>
        {!isMobile && (
          <>
            <h4 className={styles.settings__heading}>Visability</h4>

            <div>
              <TypesPopup
                width={285}
                label="Public"
                items={["Public", "Only coworkers", "Private"]}
              />
            </div>
          </>
        )}


        <section className={styles.settings__visability_org}>
          {!isMobile && <div className={styles["settings__orgainization-cover"]}>
            <div
              className={
                styles["main-button"] + " " + styles["card__view-more"]
              }
            >
              Change cover
            </div>
          </div>}

          <div>
            <div className={styles["settings__visability-image"]}>
              <div>
                <img src={logo} alt="photo-sample" />
              </div>

              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
              >
                Change image
              </div>
            </div>

            <div className={styles["settings__visability-items"]} style={{ width: "100%", height: 'fit-content', gap: 24 }}>
              <div style={{ width: '100%' }}>
                <h2>Company name</h2>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 44,
                      color: "#25436D",
                    },
                  }}
                  size="medium"
                  defaultValue={"John"}
                  variant="outlined"
                />
              </div>

              <div style={{ width: "100%" }}>
                <h2>Description</h2>
                <TextField
                  id="outlined-basic"
                  multiline
                  fullWidth
                  size="medium"
                  rows={5}
                  placeholder="This company is a place to create an exciting present and future. The Company concept is a project that aims to create an ideal company model for the future. "
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      padding: "8px 16px",
                    },
                  }}
                />
              </div>
            </div>
          </div>

        </section>
      </div>

      <div className={styles.settings__element}>
        <h4 className={styles.settings__heading}>Location
          <div className={styles["settings-icon_plus"]}>
            <img src={plusIcon} alt="add" />
          </div></h4>

        <section className={styles.settings__location}>
          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Time Zone</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 386 : "fullWidth"}
                  label="UTC+09:00 Tokyo, Osaka, Sapporo, Seoul"
                  items={["UTC+09:00 Tokyo, Osaka, Sapporo, Seoul", "UTC+00:00 London, Dublin, Lisbon, Reykjavik", "UTC−05:00 New York, Toronto, Miami, Havana, Bogotá", "UTC+02:00 Kyiv, Athens, Helsinki, Riga, Vilnius, Sofia"
                  ]}
                />
              </div>
            </div>

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Country</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Japan"
                  items={["Japan", "USA", "UA"]}
                />
              </div>
            </div>
          </div>

          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element} style={{ width: "100%" }}>
              <h4 className={styles.settings__heading}>Main address                 <div className={styles["settings-icon_plus"]}>
                <img src={whitePlusIcon} alt="add" />
              </div></h4>
              <div style={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-large"]}`}
                  size="medium"
                  placeholder="X-X-X Street"
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>City</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Tokyo"
                  items={["Tokyo", "Yokohama", "Nagasaki", "Okayama", "Osaka", "Kumamoto"]}
                />
              </div>
            </div>

            <div className={styles.settings__element} style={{ marginBottom: 0 }}>
              <h4 className={styles.settings__heading}>State/Province</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Kanto"
                  items={["Kanto", "Chubu", "Tohoku", "Chugoku", "Kyushu"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.settings__location} style={{ marginTop: 16 }}>
          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Time Zone</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 386 : "fullWidth"}
                  label="UTC+09:00 Tokyo, Osaka, Sapporo, Seoul"
                  items={["UTC+09:00 Tokyo, Osaka, Sapporo, Seoul", "UTC+00:00 London, Dublin, Lisbon, Reykjavik", "UTC−05:00 New York, Toronto, Miami, Havana, Bogotá", "UTC+02:00 Kyiv, Athens, Helsinki, Riga, Vilnius, Sofia"
                  ]}
                />
              </div>
            </div>

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Country</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Japan"
                  items={["Japan", "USA", "UA"]}
                />
              </div>
            </div>
          </div>

          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element} style={{ width: "100%" }}>
              <h4 className={styles.settings__heading}>Address 2                 <div className={styles["settings-icon_plus"]}>
                <img src={whitePlusIcon} alt="add" />
              </div></h4>
              <div style={{ width: "100%" }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-large"]}`}
                  size="medium"
                  defaultValue={"5-8-3 Street"}
                  variant="outlined"
                />
              </div>

              <div style={{ width: "100%", marginTop: 16, display: 'flex', gap: 16, alignItems: 'center' }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-large"]}`}
                  size="medium"
                  defaultValue={"2-4-9 Street"}
                  variant="outlined"
                />

                <div className={styles["settings-icon_plus"]}>
                  <img src={whiteDeleteIcon} alt="delete" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles["settings__location-inner"]}>
            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>City</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Tokyo"
                  items={["Tokyo", "Yokohama", "Nagasaki", "Okayama", "Osaka", "Kumamoto"]}
                />
              </div>
            </div>

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>State/Province</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Kanto"
                  items={["Kanto", "Chubu", "Tohoku", "Chugoku", "Kyushu"]}
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 0 }}>
            <div
              className={
                styles["main-button"] + " " + styles["card__view-more"]
              }

              style={{ marginRight: 'auto', marginLeft: 0 }}
            >
              Delete
            </div>
          </div>
        </section>
      </div>

      <div className={styles.settings__element}>
        <h4 className={styles.settings__heading}>Interests</h4>

        <div style={{ maxWidth: !isMobile ? 285 : "none" }}>
          <Categories
            category={tags}
            handleCategoryChange={handleTagChange}
            categories={["Software Development", "Interest 3", "IT", "Interest 4 Interest"]}
            heading="Select tags"
            inputLabel="Tags"
          />
        </div>

        <div
          className={styles["info__interests-buttons"]}
          style={{ marginTop: 16, alignItems: 'center' }}
        >
          {interests.map((interest: string) => {
            return (
              <div
                className={styles["search__filter-button"]}
              >
                {interest}
                <img src={cross} />
              </div>
            );
          })}

          <div>Clear tags</div>
        </div>
      </div>

      <div className={styles.settings__element}>
        <h4 className={styles.settings__heading}>Add members</h4>

        <TextField
          id="outlined-basic"
          fullWidth
          className={`${styles["mui-textfield"]} ${styles["mui-textfield_fullWidth"]}`}
          size="medium"
          placeholder="@profile"

          variant="outlined"
        />

        <div className={styles.info__members}>
          <div className={styles.settings__members}>
            <img src={hajime} alt="hajime" />
            <div>
              <div className={styles.info__member_name}>Hajime Suzuki
              </div>
              CEO
            </div>
            <div />
            <div className={styles["settings-icon_plus"]}>
              <img src={deleteIcon} alt="delete" />
            </div>
          </div>

          <div className={styles.settings__members}>
            <img src={john} alt="john" />
            <div>
              <div className={styles.info__member_name}>John Doe
              </div>
              Senior Developer
            </div>
            <div className={styles.info__msg}>
              <img src={msg} alt="msg" />
            </div>

            <div className={styles["settings-icon_plus"]}>
              <img src={deleteIcon} alt="delete" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.settings__element} ${styles["settings__sale-channels"]}`}>
        <h4 className={styles.settings__heading}>Sale channels</h4>

        <div style={{ maxWidth: !isMobile ? 386 : "none" }}>
          <Categories
            category={saleChannels}
            handleCategoryChange={handleSaleChannelsChange}
            categories={["Africa", "Americas", "Japan", "Ukraine"]}
            heading="Type"
            inputLabel="Regions"
          />
        </div>

        <div
          className={styles["info__interests-buttons"]}
          style={{ marginTop: 16, }}
        >
          <div
            className={styles["search__filter-button"]}
          >
            Japan
            <img src={cross} />
          </div>

          <div
            className={styles["search__filter-button"]}
          >
            China (Shanghai)
            <img src={cross} />
          </div>

          <div
            className={styles["search__filter-button"]}
          >
            Ukraine
            <img src={cross} />
          </div>

        </div>
      </div>

      <div className={styles.settings__buttons}>
        <div className={styles["main-second-button"]}>Cancel</div>

        <div
          className={
            styles["main-button"] + " " + styles["card__view-more"]
          }
        >
          Update
        </div>
      </div>
    </section>

  );
}
