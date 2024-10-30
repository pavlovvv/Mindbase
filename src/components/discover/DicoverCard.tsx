import styles from "@/main.module.scss";

interface CardProps {
  count: string | null;
  location: string;
  minBudget?: number;
  maxBudget?: number;
  budgetType?: "per item";
}

export default function DiscoverCard({
  minBudget,
  maxBudget,
  count,
  location,
  budgetType,
}: CardProps) {
  return (
    <div className={styles.needspage__card}>
      <div className={styles["needspage__blue-text"]}>
        Posted:{" "}
        <span className={styles["needspage__blue-text_bold"]}>
          August 15, 2024
        </span>
      </div>
      {count && (
        <div className={styles["needspage__blue-text"]}>
          Count:{" "}
          <span className={styles["needspage__blue-text_bold"]}>{count}</span>
        </div>
      )}
      {minBudget && maxBudget && (
        <div className={styles["needspage__blue-text"]}>
          Budget:
          <span className={styles["needspage__blue-text_bold"]}>
            {" "}
            {budgetType === "per item" ? (
              <>
                {minBudget}-{maxBudget} USD per item
              </>
            ) : (
              <>
                ${minBudget}-{maxBudget}
              </>
            )}
          </span>
        </div>
      )}
      <div className={styles["needspage__blue-text"]}>
        Location:{" "}
        <span className={styles["needspage__blue-text_bold"]}>{location}</span>
      </div>
      <div className={styles["needspage__blue-text"]}>
        Terms:{" "}
        <span className={styles["needspage__blue-text_bold"]}>1-3 months</span>
      </div>
    </div>
  );
}
