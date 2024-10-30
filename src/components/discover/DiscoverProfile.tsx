import styles from "@/main.module.scss";
import sarah from "@public/sarah.png";
import orgLogo from "@public/org-logo-mobile.png";

export default function DiscoverProfile() {
  return (
    <div className={styles.needspage__profile}>
      <div className={styles.info__member}>
        <img src={sarah} alt="sarah" />
        <div>
          <div className={styles.info__member_name}>Sarah Smith</div>
          Tokyo, Japan - 8:01 pm local time
        </div>
      </div>

      <div className={styles.info__member}>
        <img src={orgLogo} alt="orgLogo" />
        <div>
          <div className={styles.info__member_name}>Innovation Hills</div>
          <b>Account Manager</b>
        </div>
      </div>
    </div>
  );
}
