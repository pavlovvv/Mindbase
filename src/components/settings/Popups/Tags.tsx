import { useMediaQuery } from "react-responsive";
import styles from "@/main.module.scss";
import popupStyles from "@components/sections/popups/popup.module.scss";
import { useState } from "react";
import Categories from "@/components/discover/filters/Categories";
import cross from "@public/blue-cross.png"


export default function SettingsTags() {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const [tags, setTags] = useState<string[]>([]);
    const handleTagChange = (newTag: string) => {
        if (tags.includes(newTag)) {
            setTags(tags.filter((item) => item !== newTag));
        } else {
            setTags([...tags, newTag]);
        }
    };

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

    return (
        <div>
            <h2 className={popupStyles["settings-popup-2__item-heading"]}>
                Tags{" "}
                <span className={popupStyles["education-popup__item_heading-grey"]}>
                    (optional)
                </span>
            </h2>

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
    );
}
