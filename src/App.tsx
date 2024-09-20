import styles from './index.module.scss'
import logo from '../public/logo.png'
import CustomizedInputBase from './SearchInput';
import UserInfo from './user-info';
import PopoverMenu from './PopoverMenu';
import { useMediaQuery } from 'react-responsive'
import DesktopProfile from './DesktopProfile';
import MobileProfile from './MobileProfile';
import HeaderMobile from './HeaderMobile';
import PopoverDiscover from './PopoverDiscover';

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isLaptop = useMediaQuery({ query: '(max-width: 1279px)' })

  return (
    <div className={styles.wrapper}>

      {!isLaptop ? <header className={styles.header}>
        <nav className={styles.header__nav}>
          <PopoverDiscover />
          <span>TECHSEARCH</span>
          <span>Projects</span>
        </nav>
        <img src={logo} alt="logo" className={styles.header__logo} />
        <div className={styles.header__right}>
          <CustomizedInputBase />
          <PopoverMenu />
        </div>
      </header> : <HeaderMobile />}


      <main>
        {!isMobile ? <DesktopProfile /> : <MobileProfile />}
        <UserInfo />
      </main>

    </div>
  );
}

export default App;
