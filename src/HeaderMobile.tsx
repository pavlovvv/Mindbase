import styles from './index.module.scss'
import popoverStyles from './popover.module.scss'
import burger from '../public/burger.png'
import logoHorizontal from '../public/logo horizontal.png'
import search from '../public/search-2-line.png'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import messagesIcon from '../public/notifications-line.png'
import connectIcon from '../public/world.png'
import settingsIcon from '../public/settings.png'
import logoutIcon from '../public/log-out.png'
import orgLogoSample from '../public/org-logo-sample.png'
import photoSample from '../public/photo-sample.png';
import cross from '../public/cross.png'

export default function HeaderMobile() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <header className={styles.header_mobile}>
            <img src={burger} alt="burger" className={styles.header__burger} onClick={toggleDrawer(true)} />
            <img src={logoHorizontal} alt="logo" className={styles['header__logo-horizontal']} />
            <img src={search} alt="search" className={styles.header__search} />

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className={styles.drawer}>
                    <div className={popoverStyles.popover__wrapper_mobile}>
                        <div className={popoverStyles.popover__top + ' ' + popoverStyles["popover__menu-section"]}>
                            <img src={photoSample} alt="Profile Picture" style={{ width: '44px', borderRadius: '50%' }} />
                            <span className="username">John Doe</span>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]} style={{ border: 0, paddingBottom: 0 }}>
                            <h3 className={popoverStyles['popover__menu-item_dot']}>Profile</h3>
                            <h3 className={popoverStyles["popover__menu-item"]}>My Organizations</h3>
                            <div className={popoverStyles["popover__menu-item"] + ' ' + popoverStyles["popover__menu-item_org"]}>
                                <img src={orgLogoSample} />
                                <span>Innovation Hills</span>
                            </div>

                            <div className={popoverStyles["popover__menu-item"]}> <img src={messagesIcon} /> <a href="#">Messages</a></div>
                            <div className={popoverStyles["popover__menu-item"]}> <img src={connectIcon} /> <a href="#">Connect</a></div>
                            <div className={popoverStyles["popover__menu-item"]}> <img src={settingsIcon} /> <a href="#">Settings</a></div>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]}>
                            <h3 className={popoverStyles['popover__menu-item_dot']}>My Business</h3>
                            <ul className="business-menu">
                                <li className={popoverStyles["popover__menu-item"]}><a href="#">My Needs</a></li>
                                <li className={popoverStyles["popover__menu-item"]}><a href="#">My Offers</a></li>
                                <li className={popoverStyles["popover__menu-item"]} style={{ color: 'black' }}><a href="#">My Matches</a></li>
                            </ul>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]}>
                            <h1 className={popoverStyles['popover__menu-top-item']}>Discover</h1>
                            <h3 className={popoverStyles['popover__menu-item_dot']}>Needs</h3>
                            <h3 className={popoverStyles['popover__menu-item_dot']}>Offers</h3>
                            <h3 className={popoverStyles['popover__menu-item_dot']}>Organizations</h3>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]}>
                            <h1 className={popoverStyles['popover__menu-top-item_grey']}>TECHSEARCH</h1>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]}>
                            <h1 className={popoverStyles['popover__menu-top-item_grey']}>Projects</h1>
                        </div>

                        <div className={popoverStyles["popover__menu-section"]}>
                            <div className={popoverStyles['popover__menu-top-item']}>
                                <img src={logoutIcon} /> <a href="#">Log Out</a>
                            </div>
                        </div>
                    </div>

                </div>
                <img src={cross} alt="exit" className={popoverStyles.popover__cross} onClick={toggleDrawer(false)} />
            </Drawer>

        </header>
    );
}