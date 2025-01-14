import styles from './index.module.scss'
import logo from '../public/logo.png'
import CustomizedInputBase from './components/sections/popups/SearchInput';
import PopoverMenu from './components/popovers/PopoverMenu';
import { useMediaQuery } from 'react-responsive'
import HeaderMobile from './components/header/HeaderMobile';
import PopoverDiscover from './components/popovers/PopoverDiscover';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactComponent as HorizontalSvg } from '../public/horizontal-svg.svg';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isLaptop = useMediaQuery({ query: '(max-width: 1279px)' })

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

  const handleScroll = () => {
    const elHeight: number = isMobile ? 50 : 100;
    if (window.scrollY > elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isAuthPage = location.pathname.includes('/auth');

  return (
    <>
      <div className={styles.wrapper} style={{ minHeight: 'unset', paddingBottom: 0 }}>

        {!isLaptop ? <>
          <header className={sticky.isSticky ? styles.header + ' ' + styles.header_sticky : styles.header}>
            <nav className={styles.header__nav}>
              <PopoverDiscover />
              <span>TECHSEARCH</span>
              <span>Projects</span>
            </nav>
            <Link to={'/'}><img src={logo} alt="logo" className={styles.header__logo} /> </Link>
            <div className={styles.header__right}>
              <CustomizedInputBase />
              <PopoverMenu />
            </div>
          </header>
          {sticky.isSticky && <div style={{ width: '100%', height: '100px' }} />} </> :
          <><HeaderMobile isSticky={sticky.isSticky} /> {sticky.isSticky && <div style={{ width: '100%', height: '50px' }} />}</>}
      </div>

      <main>
        <Outlet />
      </main>


      {!isAuthPage && (
      <footer className={styles.footer}>
        <section className={styles.footer__left}>
          <div style={{ maxHeight: '46px' }}>
            <HorizontalSvg />
          </div>
          <div>
            <CustomizedInputBase />
          </div>
          <div className={styles.footer__links}>
            <div className={styles['footer__links-inner']}>
              <PopoverDiscover />
              <div>TECHSEARCH</div>
              <div>Projects</div>
              <div className={styles['footer__links-icons']}>
                <div className={styles.footer__instagram} />
                <div className={styles.footer__twitter} />
                <div className={styles.footer__linkedin} />
              </div>
            </div>

            <div className={styles['footer__links-inner']}>
              <div>Help & Support</div>
              <div>Terms of Service</div>
              <div>Privacy policy</div>
              <div>Cookie policy</div>
            </div>
          </div>
        </section>

        <section className={styles.footer__right}>
          <div>Mobile App</div>
          <div className={styles.footer__apple} />
          <div className={styles.footer__android} />
        </section>
      </footer>
      )}
    </>
  );
}