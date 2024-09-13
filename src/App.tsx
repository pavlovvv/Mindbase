import styles from './index.module.scss'
import logo from '../public/logo.png'
import CustomizedInputBase from './SearchInput';
import PopoverMenu from './PopoverMenu';
import PhotoFull from '../public/photo-full.png'
import mainStyles from './main.module.scss'
import shareIcon from '../public/share-icon.png'
import locationIcon from '../public/map-pin-line.png'
import { useState } from 'react';
import UserInfo from './user-info';
import { useCollapse } from 'react-collapsed'

function App() {
  const [isExpanded, setExpanded] = useState<boolean>(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, collapsedHeight: 160 })

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <span>Discover</span>
          <span>TECHSEARCH</span>
          <span>Projects</span>
        </nav>
        <img src={logo} alt="logo" className={styles.header__logo} />
        <div className={styles.header__right}>
          <CustomizedInputBase />
          <PopoverMenu />
        </div>
      </header>

      <main>
        <section className={mainStyles.main}>
          <div style={{ border: "1px solid #8AADD880", padding: '9px', borderRadius: '10px', position: 'relative', height: 'fit-content' }}>
            <div style={{ border: "1px solid #8AADD8", padding: '6px', borderRadius: '10px' }}>
              <img src={PhotoFull} alt="user-photo" style={{ minWidth: '285px', borderRadius: '8px' }} />
            </div>
            <div className={mainStyles['activity-status']}></div>
          </div>
          <div className={mainStyles.main__left}>
            <div className={mainStyles['main__left-top']}>
              <div className={mainStyles['main__left-top-heading']}>John Doe</div>
              <div className={mainStyles['main__left-top-buttons']}>
                <div className={mainStyles['main-button']}>Connect</div>
                <div className={mainStyles['main-button']}>Message</div>
                <div className={mainStyles['main__left-top-share']}>Share <img src={shareIcon} /></div>
              </div>
            </div>
            <div className={mainStyles['main__left-location']}> <img src={locationIcon} /> Tokyo, Japan - 8:01 pm local time </div>
            <div className={mainStyles['main__left-text']}  {...getCollapseProps()}>I`m a Full Stack Web Developer. I innovate with MERN (Javascript) or Python stacks and automation to elevate your online presence. More than 5 years of experience in top tech firms working as Full Stack Developer.
              <br /> <b>&nbsp;&nbsp;•&nbsp;  Web Development Expertise:</b>
              <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Frontend Development: Mastery in React.js, Next.js, Tailwind CSS, Bootstrap 5. Focused on crafting responsive, engaging websites and applications.
              <br /> &nbsp;&nbsp;&nbsp;&nbsp; - Backend Development: Proficient in Python frameworks like Django, Flask
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <a style={{ color: '#677ccb', textDecoration: 'underline', cursor: 'pointer' }}         {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>...more</a>
          </div>
        </section>

        <UserInfo />
      </main>
    </div>
  );
}

export default App;
