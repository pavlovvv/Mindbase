import heartfill from '../public/heart-fill.png'
import styles from './main.module.scss'
import location from '../public/map-pin-line.png'
import heartUnfill from '../public/heart-unfill.png'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'

export default function Needs() {

    const [isExpanded, setExpanded] = useState<boolean>(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 725 })

    return (
        <div className={styles.info__needs} {...getCollapseProps()}>
        <h2 className={styles.info__heading}>
            Needs
        </h2>
        <div className={styles.card}>
            <div className={styles.card__date}>2024.08.14</div>
            <div className={styles.card__top}>
                <div className={styles['card__name-left']}>
                    <div className={styles.card__heading}>UX/UI design for ecommerce</div>
                    <div className={styles['main-button']}>
                        Serivce
                    </div>
                </div>

                <img src={heartfill} alt="heart" />
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

        <div className={styles.card}>
            <div className={styles.card__date}>2024.08.14</div>
            <div className={styles.card__top}>
                <div className={styles['card__name-left']}>
                    <div className={styles.card__heading}>UX/UI design for ecommerce</div>
                    <div className={styles['main-button']}>
                        Serivce
                    </div>
                </div>

                <img src={heartUnfill} alt="heart" />
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

        <div className={styles['more-button']} {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
            All needs
        </div>
    </div>
    );
}
