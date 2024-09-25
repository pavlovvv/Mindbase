import location from '../public/map-pin-line.png'
import styles from './main.module.scss'
import { Link } from 'react-router-dom';
import emptyFrame from '../public/empty-frame.png'
import { EventProps } from './EventDekstop';

export default function EventMobile({ heading }: EventProps) {
    return (
        <div className={styles.card_projects}>
            <div className={styles.card__top}>
                <div className={styles.card__date}>2024.08.14</div>
                <Link to="organizations/innovation-hills" className={styles['info__projects-name'] + ' ' + styles['info__main-object_hover']}>
                    & Innovation Hills
                    <div className={styles.card__heart} />
                </Link>
            </div>
            <div className={styles.card__top}>
                <div className={styles['card__name-left']}>
                    <div className={styles.card__heading}>{heading}</div>
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

    );
}
