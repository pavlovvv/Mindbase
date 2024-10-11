
import PhotoFull from '@public/photo-full.png'
import styles from '@/main.module.scss'
import locationIcon from '@public/map-pin-line.png'
import { useState } from 'react';
import { useCollapse } from 'react-collapsed'


export default function DesktopProfile() {
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 160 })

    return (<>
        <section className={styles.main}>
            <div style={{ border: "1px solid #8AADD880", padding: '9px', borderRadius: '10px', position: 'relative', height: 'fit-content' }}>
                <div style={{ border: "1px solid #8AADD8", padding: '6px', borderRadius: '10px' }}>
                    <img src={PhotoFull} alt="user-photo" style={{ minWidth: '285px', borderRadius: '8px' }} />
                </div>
                <div className={styles['activity-status']}></div>
            </div>
            <div className={styles.main__left}>
                <div className={styles['main__left-top']}>
                    <div className={styles['main__left-top-heading']}>John Doe</div>
                    <div className={styles['main__left-top-buttons']}>
                        <div className={styles['main-button']}>Connect</div>
                        <div className={styles['main-button']}>Message</div>
                        <div className={styles['main__left-top-share']}>Share <div className={styles['main__left-top-share-icon']} /></div>
                    </div>
                </div>
                <div className={styles['main__left-location']}> <img src={locationIcon} /> Tokyo, Japan - 8:01 pm local time </div>
                <div className={styles['main__left-text']}  {...getCollapseProps()}>I`m a Full Stack Web Developer. I innovate with MERN (Javascript) or Python stacks and automation to elevate your online presence. More than 5 years of experience in top tech firms working as Full Stack Developer.
                    <br /> <b>&nbsp;&nbsp;•&nbsp;  Web Development Expertise:</b>
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Frontend Development: Mastery in React.js, Next.js, Tailwind CSS, Bootstrap 5. Focused on crafting responsive, engaging websites and applications.
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Backend Development: Proficient in Python frameworks like Django, Flask
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <a className={styles['more-less-text']}         {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>{isExpanded ? "...less" : "...more"}</a>
            </div>
        </section>
    </>
    );
}
