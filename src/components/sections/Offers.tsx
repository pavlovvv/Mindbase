import styles from '@/main.module.scss'
import { useState } from 'react'
import emptyFrame from '@public/empty-frame.png'
import CardMobile from '@components/card/CardMobile'
import { useMediaQuery } from 'react-responsive'
import CardDesktop from '@components/card/CardDesktop'
import Dialog from '@mui/material/Dialog';
import popupStyles from './popups/popup.module.scss'
import popupTop from '@public/Graphic Element.png'
import arrowLeft from '@public/arrow-left.png'
import ServicePopup from './popups/ServicesPopup'
import SortPopup from './popups/SortPopup'
import { PopupTransition } from './Needs'

export default function Offers() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.info__needs}>
            <h2 className={styles.info__heading}>
                Offers
            </h2>

            {!isMobile ? <CardDesktop type='offers' heading='Startup localization and adaptation' /> : <CardMobile type='offers' />}

            <div className={styles['info__product-cards']}>

                <div className={styles['product-card']}>
                    <div className={styles['product-card__top']}>
                        <span>New</span>
                        <div className={styles.card__heart} />
                    </div>

                    <div className={styles.card__heading}>
                        Product 1
                    </div>

                    <div>
                        <span className={styles['info__regular-text']}>30-70 USD</span>
                        <span className={styles['product-card__grey-text']}> per item</span>
                    </div>

                    <img src={emptyFrame} alt="product-image" className={styles['product-card__picture']} />

                    <div className={styles['info__regular-text']}>
                        Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip...
                    </div>

                    <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                        View more
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className={styles['product-card__top']} style={{ justifyContent: 'end' }}>
                        <div className={styles.card__heart} />
                    </div>

                    <div className={styles.card__heading}>
                        Product 2
                    </div>

                    <div>
                        <span className={styles['info__regular-text']}>30-70 USD</span>
                        <span className={styles['product-card__grey-text']}> per item</span>
                    </div>

                    <img src={emptyFrame} alt="product-image" className={styles['product-card__picture']} />

                    <div className={styles['info__regular-text']}>
                        Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip...
                    </div>

                    <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                        View more
                    </div>
                </div>

                <div className={styles['product-card']}>
                    <div className={styles['product-card__top']} style={{ justifyContent: 'end' }}>
                        <div className={styles.card__heart} />
                    </div>

                    <div className={styles.card__heading}>
                        Product 3
                    </div>

                    <div>
                        <span className={styles['info__regular-text']}>30-70 USD</span>
                        <span className={styles['product-card__grey-text']}> per item</span>
                    </div>

                    <img src={emptyFrame} alt="product-image" className={styles['product-card__picture']} />

                    <div className={styles['info__regular-text']}>
                        Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip...
                    </div>

                    <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                        View more
                    </div>
                </div>
            </div>

            <div className={styles['more-button']} onClick={handleClickOpen}>
                All offers
            </div>

            <Dialog
                open={open}
                TransitionComponent={PopupTransition}
                keepMounted
                disableScrollLock
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={!isMobile ? {
                    backdropFilter: "blur(5px) sepia(5%)",
                    "& .MuiDialog-paper": {
                        borderRadius: "14px",
                        maxWidth: 'none',
                        maxHeight: 'none',
                        margin: 0
                    },
                } : {
                    "& .MuiDialog-paper": {
                        maxWidth: 'none',
                        maxHeight: 'none',
                        margin: 0
                    },
                    "& .MuiDialog-container": {
                        alignItems: 'stretch'
                    }
                }}
            >
                <div className={popupStyles.popup}>
                    <div className={popupStyles.popup__top}>
                        <ServicePopup />
                        <SortPopup />
                    </div>


                    {!isMobile ? <CardDesktop type='offers' heading='UX/UI design for ecommerce' /> : <CardMobile type='offers' />}

                    <div className={styles['info__product-cards']}>

                        <div className={styles['product-card']}>
                            <div className={styles['product-card__top']}>
                                <span>New</span>
                                <div className={styles.card__heart} />
                            </div>

                            <div className={styles.card__heading}>
                                Product 1
                            </div>

                            <div>
                                <span className={styles['info__regular-text']}>30-70 USD</span>
                                <span className={styles['product-card__grey-text']}> per item</span>
                            </div>

                            <img src={emptyFrame} alt="product-image" className={styles['product-card__picture']} />

                            <div className={styles['info__regular-text']}>
                                Lorem ipsum dolor sit amet, consectetur laboris nisi ut aliquip...
                            </div>

                            <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                                View more
                            </div>
                        </div>
                    </div>

                    <div className={popupStyles.popup__back} onClick={handleClose}><img src={arrowLeft} alt="arrow-left" /> Back</div>
                    <img src={popupTop} className={popupStyles['popup__bg-left']} />
                    <img src={popupTop} className={popupStyles['popup__bg-right']} />
                </div>
            </Dialog>
        </div>
    );
}
