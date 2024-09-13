
import emptyFrame from '../public/empty-frame.png'
import portfolioFrame1 from '../public/portfolio-frame-1.png'
import portfolioFrame2 from '../public/portfolio-frame-2.png'
import styles from './main.module.scss'
import Needs from './Needs'
import Offers from './Offers'
import Projects from './Projects'

export default function UserSections() {

    return (<>
                
                <Needs />
                
                <Offers />

                <div className={styles.info__portfolio}>
                    <h2 className={styles.info__heading}>
                        Portfolio
                    </h2>
                    <div className={styles['info__portfolio-projects']}>
                        <div className={styles['porfolio-project']}>
                            <img src={portfolioFrame1} alt="frame 1" />
                            <div className={styles['porfolio-project__name']}>Web design for aroma shop Clarice</div>
                            <div className={styles['porfolio-project__instruments']}>Adobe Photoshop, Adobe I...</div>
                        </div>

                        <div className={styles['porfolio-project']}>
                            <img src={portfolioFrame2} alt="frame 2" />
                            <div className={styles['porfolio-project__name']}>Web design for aroma shop Clarice</div>
                            <div className={styles['porfolio-project__instruments']}>Adobe Photoshop, Adobe I...</div>
                        </div>

                        <div className={styles['porfolio-project']}>
                            <img src={emptyFrame} alt="frame 3" />
                            <div className={styles['porfolio-project__name']}>Web design for aroma shop Clarice</div>
                            <div className={styles['porfolio-project__instruments']}>Adobe Photoshop, Adobe I...</div>
                        </div>
                    </div>

                    <div className={styles['more-button']}>
                        See more
                    </div>
                </div>

                <Projects />                
    </>
    );
}
