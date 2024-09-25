
import styles from './main.module.scss'
import locationIcon from '../public/map-pin-line.png'
import { useState } from 'react';
import { useCollapse } from 'react-collapsed'
import orgLogoMobile from '../public/org-logo-mobile.png'


export default function MobileOrganizations() {
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 96 })

    return (<>
        <section className={styles['main-organizations']}>

            <div className={styles.main__left_org}>
                <div className={styles['main__org-top_mobile']}>


                    <img src={orgLogoMobile} alt="user-photo" style={{ minWidth: '88px', borderRadius: '50%', zIndex: 2, alignSelf: 'flex-start' }} />
                    <div className={styles['main__left-top_org']}>
                        <div className={styles['main__left-top-heading']} style={{ width: '192px' }}>Innovation Hills</div>
                        <div className={styles['main__left-top-buttons']}>
                            <div className={styles['main__left-top-share']}>Share <div className={styles['main__left-top-share-icon']} /></div>
                        </div>
                        <div className={styles['main__left-location']}> <img src={locationIcon} /> Tokyo, Japan - 8:01 pm local time </div>
                    </div>

                </div>
            </div>

            <div>
                <div className={styles['main__left-text_org']}  {...getCollapseProps()}>
                    Innovation Hills is a place to create an exciting present and future. The Innovation Hills concept is a project that aims to create an ideal company
                    model for the future where children can realize their dreams. To achieve this, we need a diverse environment where people can pursue and realize their
                    individual dreams, and an environment where role models who are active at the forefront of concept is a project that aims to create an ideal company
                    model for the future where children can realize their dreams. To achieve this, we need a diverse environment where people can pursue and realize their
                    individual dreams, and an environment where role models who are active at the forefront of
                </div>
                <a className={styles['more-less-text']}         {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>{isExpanded ? "...less" : "...more"}</a>
            </div>

            <div className={styles['organizations-bg']} />
            <div className={styles['organizations-bg-rect-1']} />
            <div className={styles['organizations-bg-rect-2']} />
        </section>
    </>
    );
}
