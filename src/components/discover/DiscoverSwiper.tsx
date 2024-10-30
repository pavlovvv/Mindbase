import styles from "@/main.module.scss";
import tent1 from "@public/tent1.png";
import tent2 from "@public/tent2.png";
import tent3 from "@public/tent3.png";
import tent4 from "@public/tent4.png";
import emptyFrame from "@public/empty-square.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";

export default function DiscoverSwiper() {
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const swiperElement = swiperRef.current;

    const handleMouseEnter = () => {
      if (swiperElement) {
        const prevButton = swiperElement.querySelector(
          ".swiper-button-prev"
        ) as HTMLElement;
        const nextButton = swiperElement.querySelector(
          ".swiper-button-next"
        ) as HTMLElement;
        if (prevButton && nextButton) {
          prevButton.style.setProperty("opacity", "1", "important");
          nextButton.style.setProperty("opacity", "1", "important");
        }
      }
    };

    const handleMouseLeave = () => {
      if (swiperElement) {
        const prevButton = swiperElement.querySelector(
          ".swiper-button-prev"
        ) as HTMLElement;
        const nextButton = swiperElement.querySelector(
          ".swiper-button-next"
        ) as HTMLElement;
        if (prevButton && nextButton) {
          prevButton.style.setProperty("opacity", "0", "important");
          nextButton.style.setProperty("opacity", "0", "important");
        }
      }
    };

    if (swiperElement) {
      swiperElement.addEventListener("mouseenter", handleMouseEnter);
      swiperElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (swiperElement) {
        swiperElement.removeEventListener("mouseenter", handleMouseEnter);
        swiperElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={swiperRef} className={styles["needspage__product-images"]}>
      <Swiper
        loop
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src={tent1} alt="tent" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={emptyFrame} alt="tent" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={emptyFrame} alt="tent" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tent4} alt="tent" />
        </SwiperSlide>
      </Swiper>
      <div className={styles["needspage__product-images-bottom"]}>
        <img src={tent2} alt="tent" />
        <img src={tent3} alt="tent" />
        <img src={tent4} alt="tent" />
      </div>
    </div>
  );
}
