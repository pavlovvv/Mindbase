import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import popupStyles from "@components/sections/popups/popup.module.scss";
import deleteIcon from "@public/blue-cross.png"
import tent1 from "@public/tent1.png"
import emptyFrame from "@public/empty-square.png"
import plusIcon from "@public/plus.png"
import playButton from "@public/play-button.png"


export default function SettingsGallery() {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const galleryItems = !isMobile ? [emptyFrame, tent1, tent1, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame, emptyFrame] : [emptyFrame, tent1, emptyFrame, emptyFrame]

    return (
        <div>
            <h2 className={popupStyles["settings-popup-2__item-heading"]}>
                Gallery
            </h2>

            <div className={popupStyles["settings-popup-2__gallery"]}>
                {!isMobile && <section className={popupStyles["settings-popup-2__gallery-main"]}>
                    <img src={tent1} alt="tent 1" />

                    <div
                        className={
                            styles["main-button"] + " " + styles["card__view-more"]
                        }
                    >
                        Change main image
                    </div>
                </section>}

                <section className={popupStyles["settings-popup-2__gallery-items"]}>
                    {isMobile && <section className={popupStyles["settings-popup-2__gallery-main"]}>
                        <img src={tent1} alt="tent 1" />

                        <div
                            className={
                                styles["main-button"] + " " + styles["card__view-more"]
                            }
                        >
                            Change main image
                        </div>
                    </section>}
                    {galleryItems.map((item, i) => {
                        const galleryClass = `settings-popup-2__gallery-item-${i}`;
                        return <div key={i} className={popupStyles[galleryClass as keyof typeof popupStyles]}>
                            <img src={item} alt="gallery-item" />

                            <div className={styles["settings-icon_plus"]} style={{ display: 'none' }}>
                                <img src={plusIcon} alt="plus" />
                            </div>

                            <button style={{ display: 'none' }}>
                                <img src={playButton} alt="play-button" />
                            </button>

                            <div className={popupStyles["settings-popup-2__exit-button"]}>
                                <img src={deleteIcon} alt="delete" />
                            </div>
                        </div>
                    })}
                </section>
            </div>
        </div>
    );
}
