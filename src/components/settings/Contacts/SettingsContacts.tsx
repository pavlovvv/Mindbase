import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import TypesPopup from "../../sections/popups/TypesPopup";
import TextField from "@mui/material/TextField";
import plusIcon from "@public/plus.png";
import deleteIcon from "@public/blue-cross.png";
import ReactCountryFlag from "react-country-flag"
import instIcon from "@public/inst-blue.png"
import facebookIcon from "@public/facebook-blue.png"
import xIcon from "@public/x-blue.png"
import threadsIcon from "@public/threads-blue.png"
import behanceIcon from "@public/behance-blue.png"
import youtubeIcon from "@public/youtube-blue.png"
import linkIcon from "@public/link.png"

export default function SettingsContacts() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section className={styles["settings__contacts-info"]}>
      <div className={styles.settings__element}>
        <h4 className={styles.settings__heading}>Contacts</h4>

        <section className={styles.settings__contacts}>
          <div className={styles.settings__element}>
            <h4 className={styles.settings__heading}>
              Language
              <div className={styles["settings-icon_plus"]}>
                <img src={plusIcon} alt="add" />
              </div>
            </h4>

            <div className={styles.settings__phone}>
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />
              <TypesPopup
                width={84}
                label={<ReactCountryFlag countryCode="JP" svg style={{ fontSize: "2em", marginTop: -5 }} />}
                items={[<ReactCountryFlag countryCode="JP" svg className={styles.settings__flag} />,
                <ReactCountryFlag countryCode="US" className={styles.settings__flag} svg />,

                <ReactCountryFlag countryCode="UA" svg className={styles.settings__flag} />]}
              />

              <TextField
                id="outlined-basic"
                className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-small"]}`}
                size="medium"
                defaultValue={"+81 XXX XXX XX 21"}
                variant="outlined"
              />

              <TypesPopup
                width={136}
                label="Everybody"
                items={["Everybody", "My contacts", "By reqeuest"]}
              />
            </div>

            <div className={styles.settings__phone}>
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />
              <TypesPopup
                width={84}
                label={<ReactCountryFlag countryCode="JP" svg style={{ fontSize: "2em", marginTop: -5 }} />}
                items={[<ReactCountryFlag countryCode="JP" svg className={styles.settings__flag} />,
                <ReactCountryFlag countryCode="US" className={styles.settings__flag} svg />,

                <ReactCountryFlag countryCode="UA" svg className={styles.settings__flag} />]}
              />

              <TextField
                id="outlined-basic"
                className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-small"]}`}
                size="medium"
                defaultValue={"+81 XXX XXX XX 21"}
                variant="outlined"
              />

              <TypesPopup
                width={136}
                label="My contacts"
                items={["My contacts", "Everybody", "By reqeuest"]}
              />

              <div className={styles["settings-icon_plus"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>

            {!isMobile && <div className={styles.settings__phone}>
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />
              <TypesPopup
                width={84}
                label={<ReactCountryFlag countryCode="JP" svg style={{ fontSize: "2em", marginTop: -5 }} />}
                items={[<ReactCountryFlag countryCode="JP" svg className={styles.settings__flag} />,
                <ReactCountryFlag countryCode="US" className={styles.settings__flag} svg />,

                <ReactCountryFlag countryCode="UA" svg className={styles.settings__flag} />]}
              />

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
                defaultValue={"+81 XXX XXX XX 21"}
                variant="outlined"
              />

              <TypesPopup
                width={136}
                label="By reqeuest"
                items={["By reqeuest", "Everybody", "My contacts"]}
              />

              <div className={styles["settings-icon_plus"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>}
          </div>

          <div className={styles.settings__element}>
            <h4 className={styles.settings__heading}>
              Email
              <div className={styles["settings-icon_plus"]}>
                <img src={plusIcon} alt="add" />
              </div>
            </h4>

            <div className={styles.settings__email}>
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />

              <TextField
                id="outlined-basic"
                className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-medium"]}`}
                size="medium"
                defaultValue={"john_doe@gmail.com"}
                variant="outlined"
              />
            </div>

            <div className={styles.settings__email}>
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />

              <TextField
                id="outlined-basic"
                className={`${styles["mui-textfield"]} ${styles["mui-textfield_width-medium"]}`}
                size="medium"
                defaultValue={"john_doe@innovationhills.com"}
                variant="outlined"
              />
              <div className={styles["settings-icon_plus"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>
          </div>


          <div className={styles.settings__element}>
            <h4 className={styles.settings__heading}>
              Social networks
              <TypesPopup
                width={137}
                label="Personal"
                items={["Personal", "Innovation Hills", "Organization 2 "]}
              />
            </h4>

            <div className={styles.settings__social}>
              <a><img src={instIcon} alt="icon" />@john.doe</a>
              <a><img src={facebookIcon} alt="icon" style={{ width: 11 }} />facebook</a>
              <a><img src={xIcon} alt="icon" />twitter</a>
              <a><img src={threadsIcon} alt="icon" />threads</a>
              <a><img src={behanceIcon} alt="icon" />behance</a>
              <a><img src={youtubeIcon} alt="icon" />youtube</a>
            </div>

            <div className={styles.settings__link}>
              <img src={linkIcon} alt="link-icon" style={{ width: 20 }} />
              <span>www.innivationhills.com</span>
              <div className={styles["settings-icon_plus"]}>
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>

            <TextField
              id="outlined-basic"
              fullWidth
              className={`${styles["mui-textfield"]}`}
              size="medium"
              placeholder="Add link"
              variant="outlined"
            />
          </div>
        </section>
      </div>

      <div className={styles.settings__element}>
        <h4 className={styles.settings__heading}>My location</h4>

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
              <h4 className={styles.settings__heading}>Address</h4>
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
                  items={["Tokyo", "Yokohama", "Nagasaki", "Kyoto", "Osaka", "Kumamoto"]}
                />
              </div>
            </div>

            <div className={styles.settings__element} style={{ marginBottom: 0 }}>
              <h4 className={styles.settings__heading}>State/Province</h4>
              <div>
                <TypesPopup
                  width={!isMobile ? 285 : "fullWidth"}
                  label="Kanto"
                  items={["Kanto", "Chubu", "Tohoku", "Hokkaido", "Kyushu"]}
                />
              </div>
            </div>
          </div>
        </section>
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

  );
}
