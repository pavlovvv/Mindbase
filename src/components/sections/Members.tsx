import styles from '@/main.module.scss'
import { useState } from 'react'
import popupStyles from './popups/popup.module.scss'
import hajime from '@public/hajime.png'
import john from '@public/photo-sample.png'
import sarah from '@public/sarah.png'
import tony from '@public/tony.png'
import sam from '@public/sam.png'
import msg from '@public/msg.png'
import popupTop from '@public/Graphic Element.png'
import arrowLeft from '@public/arrow-left.png'
import withDialog from '@/withDialog';

export default function Members() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.info__item}>
            <h2 className={styles.info__heading} >
                Members
            </h2>

            <div className={styles.info__members}>
                <div className={styles.info__member}>
                    <img src={hajime} alt="hajime" />
                    <div>
                        <div className={styles.info__member_name}>Hajime Suzuki
                        </div>
                        CEO
                    </div>
                </div>

                <div className={styles.info__member}>
                    <img src={john} alt="john" />
                    <div>
                        <div className={styles.info__member_name}>John Doe
                        </div>
                        Senior Developer
                    </div>
                    <div className={styles.info__msg}>
                        <img src={msg} alt="msg" />
                    </div>
                </div>

                <div className={styles.info__member}>
                    <img src={sarah} alt="sarah" />
                    <div>
                        <div className={styles.info__member_name}>Sarah Smith
                        </div>
                        Account Manager
                    </div>

                    <div className={styles.info__msg}>
                        <img src={msg} alt="msg" />
                    </div>
                </div>

                <div className={styles.info__member}>
                    <img src={sam} alt="sam" />
                    <div>
                        <div className={styles.info__member_name}>Sam Jones
                        </div>
                        Project Manager
                    </div>
                </div>

                <div className={styles.info__member}>
                    <img src={tony} alt="tony" />
                    <div>
                        <div className={styles.info__member_name}>Tony Berger
                        </div>
                        IT Support Engineer
                    </div>
                </div>
            </div>

            <div className={styles['main-button']} onClick={handleClickOpen}>See all</div>
            {withDialog({
                open,
                handleClose,
                children: (
                    <div className={popupStyles.popup} style={{ background: "#F8F7F6" }}>
                        <h2 className={styles.info__heading} >
                            Members
                        </h2>

                        <div className={styles.info__member}>
                            <img src={sam} alt="sam" />
                            <div>
                                <div className={styles.info__member_name}>Sam Jones
                                </div>
                                Project Manager
                            </div>

                            <div className={styles.info__msg}>
                                <img src={msg} alt="msg" />
                            </div>
                        </div>

                        <div className={styles.info__members}>
                            <div className={styles.info__member}>
                                <img src={hajime} alt="hajime" />
                                <div>
                                    <div className={styles.info__member_name}>Hajime Suzuki
                                    </div>
                                    CEO
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={john} alt="john" />
                                <div>
                                    <div className={styles.info__member_name}>John Doe
                                    </div>
                                    Senior Developer
                                </div>
                                <div className={styles.info__msg}>
                                    <img src={msg} alt="msg" />
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={sam} alt="sam" />
                                <div>
                                    <div className={styles.info__member_name}>Sam Jones
                                    </div>
                                    Project Manager
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={sam} alt="sam" />
                                <div>
                                    <div className={styles.info__member_name}>Sam Jones
                                    </div>
                                    Project Manager
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={sarah} alt="sarah" />
                                <div>
                                    <div className={styles.info__member_name}>Sarah Smith
                                    </div>
                                    Account Manager
                                </div>

                                <div className={styles.info__msg}>
                                    <img src={msg} alt="msg" />
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={sam} alt="sam" />
                                <div>
                                    <div className={styles.info__member_name}>Sam Jones
                                    </div>
                                    Project Manager
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={tony} alt="tony" />
                                <div>
                                    <div className={styles.info__member_name}>Tony Berger
                                    </div>
                                    IT Support Engineer
                                </div>

                                <div className={styles.info__msg}>
                                    <img src={msg} alt="msg" />
                                </div>
                            </div>

                            <div className={styles.info__member}>
                                <img src={hajime} alt="hajime" />
                                <div>
                                    <div className={styles.info__member_name}>Hajime Suzuki
                                    </div>
                                    CEO
                                </div>

                            </div>

                            <div className={styles.info__member}>
                                <img src={sam} alt="sam" />
                                <div>
                                    <div className={styles.info__member_name}>Sam Jones
                                    </div>
                                    Project Manager
                                </div>
                            </div>
                        </div>
                        <div className={popupStyles.popup__back} onClick={handleClose}><img src={arrowLeft} alt="arrow-left" /> Back</div>
                        <img src={popupTop} className={popupStyles['popup__bg-left']} />
                        <img src={popupTop} className={popupStyles['popup__bg-right']} />
                    </div>
                )
            })}
        </div>
    );
}