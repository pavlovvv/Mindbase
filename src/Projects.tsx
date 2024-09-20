import location from '../public/map-pin-line.png'
import styles from './main.module.scss'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Dialog from '@mui/material/Dialog';
import popupStyles from './popup.module.scss'
import popupTop from '../public/Graphic Element.png'
import cross from '../public/cross.png'
import SortPopup from './SortPopup'
import { PopupTransition } from './Needs'
import emptyFrame from '../public/empty-frame.png'

export default function Projects() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.info__projects}>
            <h2 className={styles.info__heading}>
                Projects
            </h2>
            <div className={styles.card_projects}>
                <div className={styles.card__top}>
                    <div className={styles.card__date}>2024.08.14</div>
                    {isMobile && <div className={styles['info__projects-name']}>
                        & Innovation Hills
                        <div className={styles.card__heart} />
                    </div>}
                </div>
                <div className={styles.card__top}>
                    <div className={styles['card__name-left']}>
                        <div className={styles.card__heading}>Mindbase platform</div>

                    </div>
                    {!isMobile && <div className={styles['info__projects-name']}>
                        & Innovation Hills
                        <div className={styles.card__heart} />
                    </div>}

                </div>

                <div className={styles.card__info}>
                    <span className={styles['card__info-location']}>
                        <img src={location} />
                        <span>Tokyo, Japan</span>
                    </span>

                    <span>
                        Add text
                    </span>
                </div>

                <div className={styles['info__regular-text']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
                </div>

                <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                    View more
                </div>
            </div>

            <div className={styles.card_projects}>
                <div className={styles.card__date}>2024.08.14</div>
                <div className={styles.card__top}>
                    <div className={styles['card__name-left']}>
                        <div className={styles.card__heading}>Mindbase platform</div>

                    </div>
                    <div className={styles['info__projects-name']}>
                        & Innovation Hills
                        <div className={styles.card__heart} />
                    </div>

                </div>

                <div className={styles.card__info}>
                    <span className={styles['card__info-location']}>
                        <img src={location} />
                        <span>Tokyo, Japan</span>
                    </span>

                    <span>
                        Add text
                    </span>
                </div>

                <div className={styles['info__regular-text']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
                </div>

                <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                    View more
                </div>
            </div>

            <div className={styles['more-button']} onClick={handleClickOpen}>
                All projects
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
                <div className={popupStyles.popup} style={{ background: "#BAD2F9" }}>
                    <div className={popupStyles.popup__top} style={{ justifyContent: 'flex-end' }}>
                        <SortPopup />
                    </div>

                    {!isMobile ? <div className={styles.card_projects} style={{ padding: '36px 24px' }}>
                        <div className={styles['card__project-wrapper']}>
                            <img src={emptyFrame} className={styles['card__project-img']} alt="project-img" />
                            <div className={styles['card__project-right']}>
                                <div className={styles.card__top}>
                                    <div className={styles.card__date}>2024.08.14</div>
                                </div>
                                <div className={styles.card__top}>
                                    <div className={styles['card__name-left']}>
                                        <div className={styles.card__heading}>Mindbase platform</div>
                                    </div>

                                    <div className={styles['info__projects-name']}>
                                        & Innovation Hills
                                        <div className={styles.card__heart} />
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <span className={styles['card__info-location']}>
                                        <img src={location} />
                                        <span>Tokyo, Japan</span>
                                    </span>

                                    <span>
                                        Add text
                                    </span>
                                </div>

                                <div className={styles['info__regular-text']}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
                                </div>

                                <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                                    Book now
                                </div>
                            </div>
                        </div>
                    </div> :

                        <div className={styles.card_projects}>
                            <div className={styles.card__top}>
                                <div className={styles.card__date}>2024.08.14</div>
                                <div className={styles['info__projects-name']}>
                                    & Innovation Hills
                                    <div className={styles.card__heart} />
                                </div>
                            </div>
                            <div className={styles.card__top}>
                                <div className={styles['card__name-left']}>
                                    <div className={styles.card__heading}>Event</div>
                                </div>
                            </div>

                            <div className={styles.card__info}>
                                <span className={styles['card__info-location']}>
                                    <img src={location} />
                                    <span>Tokyo, Japan</span>
                                </span>

                                <span>
                                    Add text
                                </span>
                            </div>

                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <img src={emptyFrame} alt="img" style={{ width: '100%', maxWidth: "300px" }} />
                            </div>
                            <div className={styles['info__regular-text']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
                            </div>

                            <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                                Book now
                            </div>
                        </div>


                    }

                    <div className={styles.card_projects}>
                        <div className={styles.card__top}>
                            <div className={styles.card__date}>2024.08.14</div>
                            {isMobile && <div className={styles['info__projects-name']}>
                                & Innovation Hills
                                <div className={styles.card__heart} />
                            </div>}
                        </div>
                        <div className={styles.card__top}>
                            <div className={styles['card__name-left']}>
                                <div className={styles.card__heading}>Mindbase platform</div>

                            </div>
                            {!isMobile && <div className={styles['info__projects-name']}>
                                & Innovation Hills
                                <div className={styles.card__heart} />
                            </div>}

                        </div>

                        <div className={styles.card__info}>
                            <span className={styles['card__info-location']}>
                                <img src={location} />
                                <span>Tokyo, Japan</span>
                            </span>

                            <span>
                                Add text
                            </span>
                        </div>

                        <div className={styles['info__regular-text']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
                        </div>

                        <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                            View more
                        </div>
                    </div>

                    <img src={cross} className={popupStyles.popup__cross} onClick={handleClose} />
                    <img src={popupTop} className={popupStyles['popup__bg-left']} />
                    <img src={popupTop} className={popupStyles['popup__bg-right']} />
                </div>
            </Dialog>
        </div>
    );
}
