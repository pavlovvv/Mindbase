import { useMediaQuery } from 'react-responsive'
import styles from './discover.module.scss'
import servicesCard from '../public/services-card.png'
import servicesCardMobile from '../public/services-card-mobile.png'
import partnershipCard from '../public/partnership-card.png'
import partnershipCardMobile from '../public/partnership-card-mobile.png'
import productCard from '../public/product-card.png'
import productCardMobile from '../public/product-card-mobile.png'
import { Link } from 'react-router-dom'

interface DiscoverProps {
  type: 'needs' | 'offers'
}

export default function DiscoverOptions({ type }: DiscoverProps) {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className={type === 'needs' ? styles['wrapper_bg-blue'] : styles.wrapper}>
      <h1 className={styles.discover__heading}>Discover {type}</h1>
      <div className={styles.discover__cards}>
        <div className={styles.card_services}>

          {!isMobile ?
            <Link to={`/${type}/services`}> <img src={servicesCard} alt="service-card" /> </Link>
            :
            <Link to={`/${type}/services`}><img src={servicesCardMobile} alt="service-card-mobile" /></Link>}

        </div>
        <div className={styles.card_partnership}>

          {!isMobile ?
            <Link to={`/${type}/partnership`}><img src={partnershipCard} alt="partnership-card" /> </Link>
            :
            <Link to={`/${type}/partnership`}><img src={partnershipCardMobile} alt="partnership-card-mobile" /></Link>}

        </div>
        <div className={styles.card_products}>

          {!isMobile ?
            <Link to={`/${type}/product`}> <img src={productCard} alt="product-card" /></Link>
            :
            <Link to={`/${type}/product`}><img src={productCardMobile} alt="product-card-mobile" /></Link>}

        </div>
      </div>
    </div>
  );
}