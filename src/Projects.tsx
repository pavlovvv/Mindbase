import location from '../public/map-pin-line.png'
import heartUnfill from '../public/heart-unfill.png'
import styles from './main.module.scss'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed'

export default function Projects() {

    const [isExpanded, setExpanded] = useState<boolean>(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 660 })

    return (
        <div className={styles.info__projects} {...getCollapseProps()}>
            <h2 className={styles.info__heading}>
                Projects
            </h2>
            <div className={styles.card}>
                <div className={styles.card__date}>2024.08.14</div>
                <div className={styles.card__top}>
                    <div className={styles['card__name-left']}>
                        <div className={styles.card__heading}>Mindbase platform</div>

                    </div>
                    <div className={styles['info__projects-name']}>
                        & Innovation Hills
                        <img src={heartUnfill} alt="heart" />
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

            <div className={styles.card}>
                <div className={styles.card__date}>2024.08.14</div>
                <div className={styles.card__top}>
                    <div className={styles['card__name-left']}>
                        <div className={styles.card__heading}>Mindbase platform</div>

                    </div>
                    <div className={styles['info__projects-name']}>
                        & Innovation Hills
                        <img src={heartUnfill} alt="heart" />
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

            <div className={styles['more-button']} {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
                All projects
            </div>
        </div>
    );
}
