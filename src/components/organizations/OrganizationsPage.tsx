import { useMediaQuery } from 'react-responsive'
import DesktopOrganizations from './DesktopOrganizations';
import OrganizationInfo from './OrganizationInfo';
import MobileOrganizations from './MobileOrganizations';
import styles from '@/index.module.scss'

export default function OrganizationsPage() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className={styles.wrapper}>
      {!isMobile ? <DesktopOrganizations /> : <MobileOrganizations />}

      <OrganizationInfo />
    </div>
  );
}