import UserInfo from './user-info';
import { useMediaQuery } from 'react-responsive'
import DesktopProfile from './DesktopProfile';
import MobileProfile from './MobileProfile';
import styles from '@/index.module.scss'
import { Snackbar, Slide, SnackbarCloseReason } from '@mui/material';
import { useState, useEffect } from 'react';
import popupStyles from "../sections/popups/popup.module.scss"
import successIcon from "@public/success.png"
import { useLocation } from 'react-router-dom';

export default function ProfilePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const location = useLocation();
  const [isNotificationShown, setNotificationShown] = useState<boolean>(false);

  useEffect(() => {
    if (location.state?.showNotification) {
      setNotificationShown(true);
    }
  }, [location.state]);

  const handleSnackbarClose = (
    _: any,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationShown(false)
  };

  return (
    <div className={styles.wrapper}>
      {!isMobile ? <DesktopProfile /> : <MobileProfile />}

      <UserInfo />

      <Snackbar
        open={isNotificationShown}
        TransitionComponent={Slide}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleSnackbarClose}
        key={"bottom" + "right"}
        color="#fff"
      >
        <div className={`${popupStyles["snackbar-popup"]} ${popupStyles["snackbar-popup_success"]}`}>
          <img src={successIcon} alt="success" />
          <div>Your password has been successfully updated!</div>
        </div>
      </Snackbar>
    </div>
  );
}