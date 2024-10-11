import styles from '@/main.module.scss'
import location from '@public/map-pin-line.png'

interface CardProps {
    type: 'needs' | 'offers'
}

export default function CardMobile({ type }: CardProps) {

    return (
        <div className={type === 'needs' ? styles.card : styles.card_offers}>
            <div className={styles.card__top}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {type === 'needs' ?
                        <div className={styles['card__type_mobile-needs']}>We Need</div> :
                        <div className={styles['card__type_mobile-offers']}>We Offer</div>
                    }

                    <div className={styles.card__date}>2024.08.14</div>
                </div>
                <div className={styles.card__heart} />
            </div>

            <div className={styles.card__top}>
                <div className={styles['card__name-left']}>
                    <div className={styles.card__heading}>UX/UI design for ecommerce</div>
                    <div className={styles['main-button']}>
                        Serivce
                    </div>
                </div>


            </div>

            <div className={styles.card__info}>
                <span className={styles['card__info-location']}>
                    <img src={location} />
                    <span>Tokyo, Japan</span>
                </span>

                <span>
                    Budget: $1000-5000
                </span>

                <span>
                    Terms: 1-3 months
                </span>
            </div>

            <div className={styles['info__regular-text']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip...
            </div>

            <div className={styles.card__buttons}>
                <div className={styles['main-button']}>User Interface Design</div>
                <div className={styles['main-button']}>User Experience Design</div>
            </div>

            <div className={styles['main-button'] + ' ' + styles['card__view-more']}>
                View more
            </div>
        </div>
    );
}
