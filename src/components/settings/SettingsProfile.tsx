import { useMediaQuery } from "react-responsive";
import discoverStyles from "@components/discover/discover.module.scss";
import styles from "@/main.module.scss";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../discover/theme";
import TypesPopup from "../sections/popups/TypesPopup";
import johnDoe from "@public/photo-full.png";
import { MenuItem, Checkbox, ListItemText, TextField } from "@mui/material";
import box from "@public/box.png";
import boxChecked from "@public/box-checked.png";
import plusIcon from "@public/plus.png";
import deleteIcon from "@public/blue-cross.png";
import SettingsEducation from "./SettingsEducation";
import SettingsWork from "./SettingsWork";
import ProfileTopMobile from "./ProfileTopMobile";

export default function SettingsProfile() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  const interests: string[] = !isMobile
    ? [
        "Software delelopment",
        "IT",
        "Software delelopment",
        "Interest 3",
        "Name Of Interest",
        "Software delelopment",
        "IT",
        "Interest 3",
        "Interest 3",
        "Software delelopment",
        "Interest 3",
        "Name Of Interest",
        "Name Of Interest",
        "Interest 3",
      ]
    : [
        "Software delelopment",
        "IT",
        "Software delelopment",
        "Interest 3",
        "IT",
        "Interest 3",
        "Name Of Interest",
      ];

  const need_preferences = ["Service", "Product", "Partnership", "All"];

  const [preferences, setPreferences] = useState<string[]>(need_preferences);

  const handlePreferencesChange = (preference: string) => {
    if (preferences.includes(preference)) {
      setPreferences(preferences.filter((item) => item !== preference));
    } else {
      setPreferences([...preferences, preference]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.wrapper}>
        {isMobile && <ProfileTopMobile />}

        <div className={styles.settings}>
          <nav style={{ display: isTablet ? "none" : "initial" }}>
            <h1 className={discoverStyles.discover__heading}>Settings</h1>

            <ol
              className={styles["settings__nav-item"]}
              style={{ marginTop: 44 }}
            >
              <li
                style={{
                  color: "#25436D",
                  textDecoration: "underline",
                  fontWeight: 700,
                }}
              >
                Profile settings
              </li>
              <li>Contact info</li>
              <li>My organizations</li>
            </ol>

            <ol className={styles["settings__nav-item"]}>
              <li>Needs/Offers</li>
              <li>Portfolio</li>
              <li>Projects</li>
            </ol>

            <ol className={styles["settings__nav-item"]}>
              <li>Membership & Connects</li>
              <li>Notification settings</li>
            </ol>
          </nav>

          <section>
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

              <section className={styles.settings__visability}>
                <div className={styles["settings__visability-image"]}>
                  <div>
                    <img src={johnDoe} alt="photo-sample" />
                  </div>

                  <div
                    className={
                      styles["main-button"] + " " + styles["card__view-more"]
                    }
                  >
                    Change image
                  </div>
                </div>

                <div className={styles["settings__visability-items"]}>
                  <div>
                    <h2>Name</h2>
                    <TextField
                      id="outlined-basic"
                      sx={{
                        width: 236,
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

                  <div>
                    <h2>Last name</h2>
                    <TextField
                      id="outlined-basic"
                      sx={{
                        width: 236,
                        "& .MuiInputBase-root": {
                          height: 44,
                          color: "#25436D",
                        },
                      }}
                      size="medium"
                      defaultValue={"Doe"}
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
                      placeholder="Example: I`m a Full Stack Web Developer. I innovate with MERN (Javascript) or Python stacks and automation to elevate your online presence. More than 5 years of experience in top tech firms working as Full Stack Developer."
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-root": {
                          padding: "8px 16px",
                        },
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Interests</h4>

              <div>
                <TypesPopup
                  width={285}
                  placeholder="Type"
                  items={["Software development", "IT", "Interest 3"]}
                />
              </div>

              <div
                className={styles["info__interests-buttons"]}
                style={{ marginTop: 16 }}
              >
                {interests.map((interest: string) => {
                  return (
                    <div className={styles["main-button"]}>{interest}</div>
                  );
                })}
              </div>
            </div>

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>Need preferences</h4>

              <div>
                {need_preferences.map((need_preference) => (
                  <MenuItem
                    onClick={() => handlePreferencesChange(need_preference)}
                    key={need_preference}
                    value={need_preference}
                    style={{ padding: 0, height: 48 }}
                    className={styles["select__menu-item"]}
                  >
                    <Checkbox
                      sx={{ padding: "0 12px 0 0" }}
                      icon={
                        <img
                          src={box}
                          style={{ width: 24, height: 24 }}
                          alt="box"
                        />
                      }
                      checkedIcon={
                        <img
                          style={{ width: 24, height: 24 }}
                          src={boxChecked}
                          alt="boxChecked"
                        />
                      }
                      checked={preferences.includes(need_preference)}
                    />
                    <ListItemText
                      // className={styles["select__list-item-text"]}
                      primary={need_preference}
                      style={{ fontSize: 16, lineHeight: 24 }}
                    />
                  </MenuItem>
                ))}
              </div>
            </div>

            <SettingsEducation />
            <SettingsWork />

            <div className={styles.settings__element}>
              <h4 className={styles.settings__heading}>
                Language
                <div className={styles["settings-icon_plus"]}>
                  <img src={plusIcon} alt="add" />
                </div>
              </h4>

              <div>
                <div className={styles["settings__languages-item"]}>
                  <TypesPopup
                    width={285}
                    label="Japanese"
                    items={["Japanese"]}
                  />

                  <TypesPopup
                    width={285}
                    label="Native"
                    items={["Native", "Fluent", "Intermediate", "Elementary"]}
                  />
                </div>

                <div className={styles["settings__languages-item"]}>
                  <TypesPopup width={285} label="English" items={["English"]} />

                  <TypesPopup
                    width={285}
                    label="Fluent"
                    items={["Fluent", "Native", "Intermediate", "Elementary"]}
                  />

                  <div className={styles["settings-icon_plus"]}>
                    <img src={deleteIcon} alt="delete" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.settings__buttons}>
              <div className={styles["main-second-button"]}>Message</div>

              <div
                className={
                  styles["main-button"] + " " + styles["card__view-more"]
                }
              >
                Update
              </div>
            </div>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}
