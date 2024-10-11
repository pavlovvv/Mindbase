import Popover from "@mui/material/Popover";
import { useState } from "react";
import photoSample from '@public/photo-sample.png';
import arrow from '@public/arrow.png';
import styles from '@/index.module.scss';
import popoverStyles from './popover.module.scss'
import messagesIcon from '@public/notifications-line.png'
import connectIcon from '@public/world.png'
import settingsIcon from '@public/settings.png'
import logoutIcon from '@public/log-out.png'
import orgLogoSample from '@public/org-logo-sample.png'
import { Link } from "react-router-dom";

export default function PopoverMenu() {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (<>
        <div onClick={handleClick} className={styles["header__right-menu"]}>
            <img src={photoSample} alt="photo-sample" style={{ width: '54px', borderRadius: '50%' }} />
            <img src={arrow} alt="arrow" style={!anchorEl ? { width: '13px', height: '8px', transition: 'all 0.4s ease' } :
                { width: '13px', height: '8px', transform: 'rotate(180deg)', transition: 'all 0.4s ease' }} />
        </div>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}

            className={popoverStyles.popover}
        >
            <div className={popoverStyles.popover__wrapper}>
                <div className={popoverStyles.popover__top + ' ' + popoverStyles["popover__menu-section"]}>
                    <img src={photoSample} alt="Profile Picture" style={{ width: '44px', borderRadius: '50%' }} />
                    <span className="username">John Doe</span>
                </div>

                <div className={popoverStyles["popover__menu-section"]}>
                    <h3 className={popoverStyles["popover__menu-item"]}>My Organizations</h3>
                    <Link to={'/organizations/innovation-hills'} className={popoverStyles["popover__menu-item"] + ' ' + popoverStyles["popover__menu-item_org"]}>
                        <img src={orgLogoSample} />
                        <span>Innovation Hills</span>
                    </Link>

                    <div className={popoverStyles["popover__menu-item"]}> <img src={messagesIcon} /> <a href="#">Messages</a></div>
                    <div className={popoverStyles["popover__menu-item"]}> <img src={connectIcon} /> <a href="#">Connect</a></div>
                    <div className={popoverStyles["popover__menu-item"]}> <img src={settingsIcon} /> <a href="#">Settings</a></div>
                </div>

                <div className={popoverStyles["popover__menu-section"]}>
                    <h3 className={popoverStyles["popover__menu-item"] + ' ' + popoverStyles["popover__menu-item_heading"]}>My Business</h3>
                    <ul className="business-menu">
                        <li className={popoverStyles["popover__menu-item"]}><Link to="/discover/needs">My Needs</Link></li>
                        <li className={popoverStyles["popover__menu-item"]}><Link to="/discover/offers">My Offers</Link></li>
                        <li className={popoverStyles["popover__menu-item"]} style={{ color: 'black' }}><a href="#">My Matches</a></li>
                    </ul>
                </div>

                <div className={popoverStyles["popover__menu-section"]}>
                    <div className={popoverStyles["popover__menu-item"] + ' ' + popoverStyles["popover__menu-item_heading"]}>
                        <img src={logoutIcon} /> <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </Popover>
    </>
    );
}
