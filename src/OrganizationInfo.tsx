import phone from '../public/phone-line.png'
import mail from '../public/mail-line.png'
import inst from '../public/instagram-mono.png'
import twitter from '../public/twitter new.png'
import linkedin from '../public/linkedin-mono.png'
import styles from './main.module.scss'
import hajime from '../public/hajime.png'
import john from '../public/photo-sample.png'
import sarah from '../public/sarah.png'
import tony from '../public/tony.png'
import sam from '../public/sam.png'
import msg from '../public/msg.png'
import { useMediaQuery } from 'react-responsive'
import OrganizationSections from './OrganizationSections'
import aboutImage from '../public/about image.png'
import ReactPlayer from 'react-player'
import video from '../public/1 MINUTE NATURE BREAK 4K.mp4'
import thumbnail from '../public/thumbnail.jpg'
import pdf from '../public/pdf.png'

export default function OrganizationInfo() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const interests: string[] = ["Software delelopment", "IT", "Software delelopment", "Interest 3", "Interest 3"];

    const handleEmailClick = () => {
        const email = "mail@innovationhills.com";
        window.location.href = `mailto:${email}`;
    };

    const handleNumberClick = () => {
        const phoneNumber = "+1234567890";
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <section className={styles.main__info}>

            <div className={styles['main__info-left-wrapper']}>

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

                    <div className={styles['main-button']}>See all</div>
                </div>

                <div className={styles.info__item}>
                    <h2 className={styles.info__heading}>
                        Tags
                    </h2>

                    <div className={styles['info__main-object']}>
                        <div className={styles['info__interests-buttons']} style={{ width: '285px' }}>
                            {interests.map((interest: string) => {
                                return <div className={styles['main-button']}>{interest}</div>
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.info__item}>
                    <h2 className={styles.info__heading}>
                        Sale Channels
                    </h2>

                    <div className={styles['info__main-object']}>
                        <div className={styles['info__left-text']}>
                            <div>Japan</div>
                            <div>Ukraine</div>
                            <div>China (Shanghai)</div>
                            <div>United States (California)</div>
                            <div>United States (Texas)</div>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ flex: 1 }} className={styles['main__info-right-wrapper']}>
                <div className={styles.info__item + ' ' + styles.info__item_right} style={!isMobile ? { minWidth: '400px' } : {}}>
                    <h2 className={styles.info__heading}>
                        Contacts
                        <div className={styles['main-button']}>Request all contacts</div>
                    </h2>

                    <div style={{ display: 'flex', columnGap: '220px', flexWrap: 'wrap' }}>
                        <div className={styles['info__main-object']}>
                            <img src={phone} className={styles['info__contacts-img']} />
                            <div>
                                <div className={styles['info__main-object-inner']}>
                                    <div className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']} onClick={handleNumberClick}>+81 XXX XXX XX 35</div>
                                </div>

                                <div className={styles['info__main-object-inner']}>
                                    <div className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']} onClick={handleNumberClick}>+81 XXX XXX XX 42</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles['info__main-object'] + ' ' + styles['info__main-object_social-media']}>
                            <div className={styles['info__main-object-inner'] + ' ' + styles['info__main-object-inner_socail-media']}>
                                <img src={inst} className={styles['info__contacts-img']} />
                                <a href='https://instagram.com/innovation_hills/' target='_blank' className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']} >@innovation_hills</a>
                            </div>
                            <div className={styles['info__main-object-inner'] + ' ' + styles['info__main-object-inner_socail-media']}>
                                <img src={twitter} className={styles['info__contacts-img']} />
                                <a href='https://x.com/innovation_hills/' target='_blank' className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']}>@innovation_hills</a>
                            </div>
                            <div className={styles['info__main-object-inner'] + ' ' + styles['info__main-object-inner_socail-media']}>
                                <img src={linkedin} className={styles['info__contacts-img']} />
                                <a href='https://linkedin.com/innovation_hills/' target='_blank' className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']}>Innovation Hills</a>
                            </div>
                        </div>

                        <div className={styles['info__main-object']}>
                            <img src={mail} className={styles['info__contacts-img']} />
                            <div>
                                <div className={styles['info__main-object-inner']}>
                                    <div className={styles['info__regular-text'] + ' ' + styles['info__regular-text_underline']} onClick={handleEmailClick}>mail@innovationhills.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.info__item + ' ' + styles.info__item_right}>
                    <h2 className={styles.info__heading}>
                        Offices
                    </h2>

                    <div className={styles['info__main-object']}>
                        <div>
                            2, Street address, Details
                            <div>
                                <span className={styles['info__left-text_heading']}>Tokyo, Japan, 88888</span> <span className={styles['info__regular-text_grey']}> - 8:01 pm local time
                                </span></div>
                        </div>
                    </div>

                    <div className={styles['info__main-object']}>
                        <div>
                            10, Street address, Details
                            <div>
                                <span className={styles['info__left-text_heading']}>Kyiv, Ukraine, 58888 </span> <span className={styles['info__regular-text_grey']}> - 1:01 pm local time
                                </span></div>
                        </div>
                    </div>
                </div>

                <OrganizationSections />

                <div className={styles.info__item + ' ' + styles.info__item_right + ' ' + styles.info__item_about}>
                    <h2 className={styles.info__heading}>
                        About
                    </h2>

                    <div className={styles['info__main-object']} style={{ justifyContent: 'center' }}>
                        <img src={aboutImage} alt="about-image" />
                    </div>

                    <div className={styles['info__main-object']} style={{ lineHeight: '24px' }}>
                        Innovation Hills is a place to create an exciting present and future. The Innovation Hills concept is a project that aims to create an ideal company model for the future where children can realize their dreams. To achieve this, we need a diverse environment where people can pursue and realize their individual dreams, and an environment where role models who are active at the forefront of each field can gather.
                        The first project to build an ecosystem that implements our ideal social model is "Innovation Hills," which will be built on a 60,000 m2 plateau left by a former urban plan.
                    </div>

                    <div className={styles['info__main-object'] + ' ' + styles['react-player']}>
                        <ReactPlayer
                            playIcon={<div className={styles['play-button']} />}
                            controls url={video}
                            width={760}
                            height={437}
                            light={<div className={styles.thumbnail} ><img src={thumbnail} /></div>}
                        />
                    </div>

                    <div className={styles['info__main-object']}>
                        <div className={styles['pdf-files']}>
                            <a target='_blank' href='https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png' className={styles.pdf}>
                                <img src={pdf} alt="pdf-img" />
                                <span>PDF file Name</span>
                            </a>

                            <a target='_blank' href='https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png' className={styles.pdf}>
                                <img src={pdf} alt="pdf-img" />
                                <span>PDF file Name</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
}