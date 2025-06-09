"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./styles/gallery.module.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GallerySection: React.FC = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <Swiper
        className={styles.wrapperContainer}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          {" "}
          <section className={styles.gallerySection}>
            <LightGallery speed={500} elementClassNames={styles.containerGrid2}>
              <a
                href="/gallery/gallery12.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery12.webp"
                  alt="Imagen 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
              <a
                href="/gallery/gallery2.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery2.webp"
                  alt="Imagen 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
            </LightGallery>

            <LightGallery speed={500} elementClassNames={styles.containerGrid}>
              <a
                href="/gallery/gallery3.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery3.webp"
                  alt="Imagen 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
              <a
                href="/gallery/gallery4.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery4.webp"
                  alt="Imagen 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
            </LightGallery>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className={styles.gallerySection}>
            <LightGallery speed={500} elementClassNames={styles.containerGrid2}>
              <a
                href="/gallery/gallery5.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery5.webp"
                  alt="Imagen 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
              <a
                href="/gallery/gallery11.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery12.webp"
                  alt="Imagen 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
            </LightGallery>

            <LightGallery speed={500} elementClassNames={styles.containerGrid}>
              <a
                href="/gallery/gallery6.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery6.webp"
                  alt="Imagen 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
              <a
                href="/gallery/gallery7.webp"
                className={styles.imageContainer}
              >
                <Image
                  src="/gallery/gallery7.webp"
                  alt="Imagen 3"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </a>
            </LightGallery>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GallerySection;
