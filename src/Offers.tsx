import styles from './main.module.scss'
import location from '../public/map-pin-line.png'
import heartUnfill from '../public/heart-unfill.png'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import emptyFrame from '../public/empty-frame.png'

export default function Offers() {

    const [isExpanded, setExpanded] = useState<boolean>(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 720 })

    return (
        <div className={styles.info__needs} {...getCollapseProps()}>
        <h2 className={styles.info__heading}>
            Offers
        </h2>
        <div className={styles.card_offers}>
            <div className={styles.card__date}>2024.08.14</div>
            <div className={styles.card__top}>
                <div className={styles['card__name-left']}>
                    <div className={styles.card__heading}>Startup localization and adaptation</div>
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

        <div className={styles['info__product-cards']}>


            <div className={styles['product-card']}>
                <div className={styles['product-card__top']}>
                    <span>New</span>
                    <img src={heartUnfill} />
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
                    <img src={heartUnfill} />
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
                    <img src={heartUnfill} />
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

        <div className={styles['more-button']} {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
            All offers
        </div>
    </div>
    );
}
