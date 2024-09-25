import { useMediaQuery } from 'react-responsive'
import DesktopOrganizations from './DesktopOrganizations';
import OrganizationInfo from './OrganizationInfo';
import MobileOrganizations from './MobileOrganizations';

export default function OrganizationsPage() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      {!isMobile ? <DesktopOrganizations /> : <MobileOrganizations />}

      <OrganizationInfo />
    </>
  );
}