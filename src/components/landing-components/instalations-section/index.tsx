import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Manipulation,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { borel } from "@/app/fonts";
import styles from "./styles/styles.module.css";
import Image from "next/image";

const additionalImages = [
  "/instalaciones/instalaciones1.webp",
  "/instalaciones/instalaciones2.webp",
  "/instalaciones/instalaciones3.webp",
  "/instalaciones/instalaciones4.webp",
  "/instalaciones/instalaciones5.webp",
  "/instalaciones/instalaciones6.webp",
  "/instalaciones/instalaciones7.webp",
];

const Instalaciones = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;

    if (swiper.params.slidesPerView === 3) {
      const centerSlide = swiper.slides[activeIndex + 1];
      const inactiveSlide1 = swiper.slides[activeIndex];
      const inactiveSlide2 = swiper.slides[activeIndex + 2];

      const centerChild = centerSlide.querySelector(".swiper-zoom-container");
      const inactiveChild1 = inactiveSlide1.querySelector(
        ".swiper-zoom-container"
      );
      const inactiveChild2 = inactiveSlide2.querySelector(
        ".swiper-zoom-container"
      );

      inactiveChild1.style.scale = "1";
      inactiveChild2.style.scale = "1";
      inactiveChild2.style.zIndex = "0";

      centerChild.style.transition = "scale .5s ease";
      centerChild.style.scale = "1.25";
      centerChild.style.zIndex = "1000";
    }
  };

  return (
    <div className={styles.wraperContainer}>
      <h2 className={`${borel.className} ${styles.tittle}`}>instalaciones</h2>
      <div
        style={{
          height: "80%",
          width: "90%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Manipulation, Zoom]}
          spaceBetween={80}
          pagination={{ clickable: true }}
          navigation
          onSwiper={(slide) => slide}
          onSlideChange={handleSlideChange}
          zoom={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {additionalImages.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                height: "28rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="swiper-zoom-container"
                style={{
                  position: "relative",
                  width: "40rem",
                  height: "18rem",
                  borderRadius: "2rem",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item}
                  alt={`Installation image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Instalaciones;
