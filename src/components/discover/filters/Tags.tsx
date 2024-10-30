import styles from "@/main.module.scss";
import DiscoverSearchInput from "../DiscoverSearchInput";
import cross from "@public/cross.png";

interface TagsProps {
  tags: string[];
  handleTagChange: (tag: string) => void;
  deleteTag: (tag: string) => void;
}

export default function Tags({ tags, handleTagChange, deleteTag }: TagsProps) {
  return (
    <div className={styles["search__filters-item"]}>
      <h2 className={styles["search__filters-heading"]}>Tags</h2>
      <div className={styles["tags-wrapper"]}>
        <DiscoverSearchInput
          handleTagChange={handleTagChange}
          width={"fullwidth"}
        />

        {tags.length > 0 && (
          <div className={styles["search__filters-buttons"]}>
            {tags.map((tag) => (
              <div
                onClick={() => deleteTag(tag)}
                key={tag}
                className={styles["search__filter-button"]}
              >
                {tag} <img src={cross} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
