import styles from './index.module.scss'
import logo from '../public/logo.png'
import CustomizedInputBase from './SearchInput';
import PopoverMenu from './PopoverMenu';
import { useMediaQuery } from 'react-responsive'
import HeaderMobile from './HeaderMobile';
import PopoverDiscover from './PopoverDiscover';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactComponent as HorizontalSvg } from '../public/horizontal-svg.svg';
import inst from '../public/instagram-mono.png'
import twitter from '../public/twitter new.png'
import linkedin from '../public/linkedin-mono.png'
import apple from '../public/apple.png'
import android from '../public/android.png'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {

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

  return (
    <>
      <div className={styles.wrapper}>

        {!isLaptop ? <>
          <header className={sticky.isSticky ? styles.header + ' ' + styles.header_sticky : styles.header}>
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
          </header>
          {sticky.isSticky && <div style={{ width: '100%', height: '100px' }} />} </> :
          <><HeaderMobile isSticky={sticky.isSticky} /> {sticky.isSticky && <div style={{ width: '100%', height: '50px' }} />}</>}


        <main>
          <Outlet />
        </main>

      </div>
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
              <div>Discover</div>
              <div>TECHSEARCH</div>
              <div>Projects</div>
              <div className={styles['footer__links-icons']}>
                <img src={inst} alt="instagram-icon" />
                <img src={twitter} alt="twitter-icon" />
                <img src={linkedin} alt="linkedin-icon" />
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
          <div><img src={apple} alt="apple-icon" /></div>
          <div><img src={android} alt="android-icon" /></div>
        </section>
      </footer>
    </>
  );
}