import location from '@public/map-pin-line.png'
import styles from '@/main.module.scss'
import { Link } from 'react-router-dom';
import emptyFrame from '@public/empty-frame.png'

export interface EventProps {
    heading: string;
}

export default function EventDesktop({ heading }: EventProps) {
    return (
        <div className={styles.card_projects} style={{ padding: '36px 24px' }}>
            <div className={styles['card__project-wrapper']}>
                <img src={emptyFrame} className={styles['card__project-img']} alt="project-img" />
                <div className={styles['card__project-right']}>
                    <div className={styles.card__top}>
                        <div className={styles.card__date}>2024.08.14</div>
                    </div>
                    <div className={styles.card__top}>
                        <div className={styles['card__name-left']}>
                            <div className={styles.card__heading}>{heading}</div>
                        </div>

                        <Link to="organizations/innovation-hills" className={styles['info__projects-name'] + ' ' + styles['info__main-object_hover']}>
                            & Innovation Hills
                            <div className={styles.card__heart} />
                        </Link>
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
        </div>
    );
}
