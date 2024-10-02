import UserInfo from './user-info';
import { useMediaQuery } from 'react-responsive'
import DesktopProfile from './DesktopProfile';
import MobileProfile from './MobileProfile';
import styles from './index.module.scss'

export default function ProfilePage() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className={styles.wrapper}>
      {!isMobile ? <DesktopProfile /> : <MobileProfile />}

      <UserInfo />
    </div>
  );
}