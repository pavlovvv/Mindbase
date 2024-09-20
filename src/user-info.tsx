import orgLogoSample from '../public/org-logo-sample.png'
import shibauraLogo from '../public/shibaura.png'
import phone from '../public/phone-line.png'
import mail from '../public/mail-line.png'
import inst from '../public/instagram-mono.png'
import twitter from '../public/twitter new.png'
import linkedin from '../public/linkedin-mono.png'
import mainStyles from './main.module.scss'
import UserSections from './user-sections'
import { useMediaQuery } from 'react-responsive'


export default function UserInfo() {


    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


    const interests: string[] = !isMobile ? ["Software delelopment", "IT", "Software delelopment", "Interest 3", "Name Of Interest", "Software delelopment", "IT",
        "Interest 3", "Interest 3", "Software delelopment", "Interest 3", "Name Of Interest", "Name Of Interest", "Interest 3"] :
        ["Software delelopment", "IT", "Software delelopment", "Interest 3", "IT", "Interest 3", "Name Of Interest"]

    return (
        <section className={mainStyles.main__info}>

            <div className={mainStyles['main__info-left-wrapper']}>

                <div className={mainStyles.info__item}>
                    <h2 className={mainStyles.info__heading}>
                        Associated with
                    </h2>

                    <div className={mainStyles['info__main-object']}>
                        <img src={orgLogoSample} alt="organization-logo" className={mainStyles.info__logo} />
                        <div>
                            <div className={mainStyles['info__regular-text']}>Innovation Hills</div>
                            <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_grey']}>Senior Developer</div>
                        </div>
                    </div>

                    <div className={mainStyles['info__main-object']}>
                        <img src={shibauraLogo} alt="organization-logo" className={mainStyles.info__logo} />
                        <div>
                            <div className={mainStyles['info__regular-text']}>Shibaura Institute of Technology</div>
                            <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_grey']}>Professor</div>
                        </div>
                    </div>
                </div>

                <div className={mainStyles.info__item}>
                    <h2 className={mainStyles.info__heading}>
                        Education
                    </h2>

                    <div className={mainStyles['info__main-object']}>
                        <div className={mainStyles['info__left-text']}>
                            <h3 className={mainStyles['info__left-text_heading']}>Shibaura Institute of Technology</h3>
                            <div>Computer Science</div>
                            <div>Masters Degree</div>
                            <div>2012-2014</div>
                        </div>
                    </div>

                    <div className={mainStyles['info__main-object']}>
                        <div className={mainStyles['info__left-text']}>
                            <h3 className={mainStyles['info__left-text_heading']}>Shibaura Institute of Technology</h3>
                            <div>Computer Science</div>
                            <div>Bachelors Degree</div>
                            <div>2008-2012</div>
                        </div>
                    </div>
                </div>

                <div className={mainStyles.info__item}>
                    <h2 className={mainStyles.info__heading}>
                        Work experience
                    </h2>

                    <div className={mainStyles['info__main-object']}>
                        <div className={mainStyles['info__left-text']}>
                            <div>YAMAHA</div>
                            <h3 className={mainStyles['info__left-text_heading']}>CEO</h3>
                            <div>2012-2014</div>
                        </div>
                    </div>

                    <div className={mainStyles['info__main-object']}>
                        <div className={mainStyles['info__left-text']}>
                            <div>YAMAHA</div>
                            <h3 className={mainStyles['info__left-text_heading']}>CTO</h3>
                            <div>2012-2014</div>
                        </div>
                    </div>
                </div>

                <div className={mainStyles.info__item}>
                    <h2 className={mainStyles.info__heading}>
                        Languages
                    </h2>

                    <div className={mainStyles['info__main-object']}>
                        <div className={mainStyles['info__left-text']}>
                            <div>Japanese: <span className={mainStyles['info__regular-text_grey']}>native</span></div>
                            <div>English: <span className={mainStyles['info__regular-text_grey']}>fluent</span></div>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ flex: 1 }} className={mainStyles['main__info-right-wrapper']}>
                <div className={mainStyles.info__item + ' ' + mainStyles.info__item_right} style={!isMobile ? { minWidth: '400px' } : {}}>
                    <h2 className={mainStyles.info__heading}>
                        Contacts
                        <div className={mainStyles['main-button']}>Request all contacts</div>
                    </h2>

                    <div style={{ display: 'flex', columnGap: '220px', flexWrap: 'wrap' }}>
                        <div className={mainStyles['info__main-object']}>
                            <img src={phone} className={mainStyles['info__contacts-img']} />
                            <div>
                                <div className={mainStyles['info__main-object-inner']}>
                                    <div className={mainStyles['info__small-text']}>personal</div>
                                    <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>+81 XXX XXX XX 21</div>
                                </div>

                                <div className={mainStyles['info__main-object-inner']}>
                                    <div className={mainStyles['info__small-text']}>Innovation Hills</div>
                                    <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>+81 XXX XXX XX 35</div>
                                </div>
                            </div>
                        </div>

                        <div className={mainStyles['info__main-object'] + ' ' + mainStyles['info__main-object_social-media']}>
                            <div className={mainStyles['info__main-object-inner'] + ' ' + mainStyles['info__main-object-inner_socail-media']}>
                                <img src={inst} className={mainStyles['info__contacts-img']} />
                                <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>@john_doe</div>
                            </div>
                            <div className={mainStyles['info__main-object-inner'] + ' ' + mainStyles['info__main-object-inner_socail-media']}>
                                <img src={twitter} className={mainStyles['info__contacts-img']} />
                                <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>@john_doe</div>
                            </div>
                            <div className={mainStyles['info__main-object-inner'] + ' ' + mainStyles['info__main-object-inner_socail-media']}>
                                <img src={linkedin} className={mainStyles['info__contacts-img']} />
                                <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>John Doe</div>
                            </div>
                        </div>

                        <div className={mainStyles['info__main-object']}>
                            <img src={mail} className={mainStyles['info__contacts-img']} />
                            <div>
                                <div className={mainStyles['info__main-object-inner']}>
                                    <div className={mainStyles['info__small-text']}>personal</div>
                                    <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>john.doe@gmail.com</div>
                                </div>

                                <div className={mainStyles['info__main-object-inner']}>
                                    <div className={mainStyles['info__small-text']}>Innovation Hills</div>
                                    <div className={mainStyles['info__regular-text'] + ' ' + mainStyles['info__regular-text_underline']}>john.doe@innovationhills.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={mainStyles.info__item + ' ' + mainStyles.info__item_right}>
                    <h2 className={mainStyles.info__heading}>
                        Interests
                    </h2>

                    <div className={mainStyles['info__main-object-inner']}>
                        <div className={mainStyles['info__interests-buttons']}>
                            {interests.map((interest: string) => {
                                return <div className={mainStyles['main-button']}>{interest}</div>
                            })}
                        </div>
                    </div>
                </div>

                <UserSections />

            </div>


        </section>
    );
}
