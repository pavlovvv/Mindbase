import { useMediaQuery } from 'react-responsive'
import discoverStyles from './discover.module.scss'
import styles from '@/main.module.scss'
import pdf from '@public/pdf.png'
import DiscoverCard from './DicoverCard'
import DiscoverProfile from './DiscoverProfile'
import DiscoverSwiper from './DiscoverSwiper'
import arrowLeft from '@public/arrow-left.png'
import { Link } from 'react-router-dom'

interface DiscoverProps {
    type: 'needs' | 'offers'
    option: 'Service' | 'Partnership' | 'Product'
    heading: string
    budget: string | null
    count: string | null
    location: string
}

export default function DiscoverPage({ type, option, heading, budget, count, location }: DiscoverProps) {

    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const interests: string[] = ["Software delelopment", "IT", "Software delelopment", "Tag 3", "Software delelopment"];


    return (
        <div className={type === 'needs' ? discoverStyles['wrapper_bg-blue'] : discoverStyles.wrapper}>
            <div className={styles.needspage}>
                <section><Link to={`/discover/${type}`}><div className={styles.discover__back}><img src={arrowLeft} alt="arrow-left" /> Back</div></Link></section>
                <section className={styles.needspage__top}>
                    <div className={styles['needspage__top-inner']}>
                        {type === 'needs' ? <div className={styles['card__type_mobile-needs']}>We Need</div> : <div className={styles['card__type_mobile-offers']}>We Offer</div>}
                        <div className={styles['needspage__blue-text_bold']}>{option}</div>
                    </div>
                    <div className={styles['needspage__top-inner']}>
                        <div className={styles.card__heart} />
                        <div className={styles['main__left-top-share']}>Share <div className={styles['main__left-top-share-icon']} /></div>
                        {!isTablet && <div className={styles['main-button'] + ' ' + styles['card__view-more']}>Contact</div>}
                    </div>
                </section>

                <section>

                    {option === 'Product'
                        ?
                        <div className={styles['needspage__product-top']}>
                            <DiscoverSwiper />
                            <div style={isTablet ? { width: '100%' } : {}}>
                                <div className={discoverStyles.discover__heading}>{heading}</div>
                                <DiscoverCard location={location} count={count} budget={budget} />
                            </div>
                        </div>
                        :
                        <>
                            <div className={discoverStyles.discover__heading}>{heading}</div>
                            <DiscoverCard location={location} count={count} budget={budget} />
                        </>
                    }

                    <DiscoverProfile />

                </section>

                <section className={styles['needspage__plain-text']}>
                    Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </section>

                <section className={styles['needspage__plain-text']}>
                    Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </section>

                <section>
                    <div className={styles['pdf-files']}>
                        <a target='_blank' href='https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png' className={styles.pdf}>
                            <img src={pdf} alt="pdf-img" />
                            <span>PDF file Name</span>
                        </a>

                        <a target='_blank' href='https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png' className={styles.pdf}>
                            <img src={pdf} alt="pdf-img" />
                            <span>PDF file Name</span>
                        </a>

                        <a target='_blank' href='https://cat-talk-chat-files.s3.eu-central-1.amazonaws.com/2024-09-25T19-32-54.410Zphoto-full.png' className={styles.pdf}>
                            <img src={pdf} alt="pdf-img" />
                            <span>PDF file Name</span>
                        </a>
                    </div>
                </section>

                <section className={styles['info__interests-buttons']} style={{ marginTop: '48px' }}>
                    {interests.map((interest: string) => {
                        return <div className={styles['main-button']}>{interest}</div>
                    })}
                </section>

                {isTablet && <div className={styles['needspage__contact-mobile']}>
                    <div className={styles['main-button'] + ' ' + styles['card__view-more']} style={{ width: '100%' }}>Contact</div></div>}
            </div>

            {!isTablet && <DiscoverProfile />}

        </div>
    );
}