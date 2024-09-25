import UserInfo from './user-info';
import { useMediaQuery } from 'react-responsive'
import DesktopProfile from './DesktopProfile';
import MobileProfile from './MobileProfile';

export default function ProfilePage() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <>
      {!isMobile ? <DesktopProfile /> : <MobileProfile />}

      <UserInfo />
    </>
  );
}