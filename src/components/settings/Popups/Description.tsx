import styles from "@/main.module.scss";
import popupStyles from "@components/sections/popups/popup.module.scss";
import deleteIcon from "@public/blue-cross.png"
import linkIcon from "@public/link.png"
import { useState } from "react";
import { TextField } from "@mui/material";
import pdf from "@public/pdf.png"

interface DescriptionProps {
    descriptionPlaceholder?: string
    isLink?: boolean
    isError?: boolean
    files: string[]
}

export default function SettingsDescription({ descriptionPlaceholder, isError, isLink, files }: DescriptionProps) {
    const [description, setDescription] = useState<string>("");
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    };

    return (
        <div className={popupStyles["settings-popup-2__item"]}>
            <h2>Description</h2>
            <div className={popupStyles["popup-fields"]}>
                <TextField
                    id="outlined-basic"
                    value={description}
                    error={isError}
                    onChange={handleDescriptionChange}
                    multiline
                    rows={5}
                    fullWidth
                    size="medium"
                    placeholder={descriptionPlaceholder || "Briefly describe your need"}
                    variant="outlined"
                />
            </div>
            <div className={popupStyles["settings-popup-2__characters"]}>{600 - description.length} characters left</div>
            <div className={`${popupStyles["settings__file-field"]} ${isError && popupStyles["settings__file-field_error"]}`}>
                <div className={popupStyles["settings__field-files"]}>
                    {files.map(file => <div className={styles["settings-icon_plus"]}>
                        <img src={file} alt="file" style={{ width: 'fit-content' }} />
                    </div>)}
                </div>
                <div>{files.length > 1 ? "Add pdf file" : "Add content"}</div>
            </div>

            <div className={popupStyles.settings__files}>
                <a
                    target="_blank"
                    href="https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png"
                    className={styles.pdf}
                >
                    <img src={pdf} alt="pdf-img" />
                    <div>
                        <div>PDF file Name</div>
                        <p className={popupStyles["settings__file-size"]}>2 MB PDF</p>
                    </div>

                    <div className={popupStyles["settings__file-size-icon"]}>
                        <img src={deleteIcon} alt="delete" />
                    </div>
                </a>

                <a
                    target="_blank"
                    href="https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png"
                    className={styles.pdf}
                >
                    <img src={pdf} alt="pdf-img" />
                    <div>
                        <div>PDF file Name</div>
                        <p className={popupStyles["settings__file-size"]}>2 MB PDF</p>
                    </div>

                    <div className={popupStyles["settings__file-size-icon"]}>
                        <img src={deleteIcon} alt="delete" />
                    </div>
                </a>
            </div>

            {isLink && <div className={styles.settings__link}>
                <img src={linkIcon} alt="link-icon" style={{ width: 20 }} />
                <span>www.innivationhills.com</span>
                <div className={popupStyles["settings__file-size-icon"]} style={{ position: 'relative', top: 0, right: 0 }}>
                    <img src={deleteIcon} alt="delete" />
                </div>
            </div>}
        </div>
    );
}
