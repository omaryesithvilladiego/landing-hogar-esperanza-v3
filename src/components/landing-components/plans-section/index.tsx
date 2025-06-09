import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import programs from "../../../../public/data/plans";
import { plan } from "../../../../public/data/plans.type";
import styles from "./styles/styles.module.css";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { borel } from "@/app/fonts";
import ReactModal from "react-modal";
import { useState } from "react";

const Plans = () => {
  const mQueryXs = useMediaQuery("(max-width: 576px)");
  const mQuerySm = useMediaQuery("(max-width: 1100px)");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<plan | null>(null);
  const [initialSlide, setInitialSlide] = useState<number>(programs.length);

  const containerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleOpenModal = (program: plan, index: number) => {
    setInitialSlide(index);
    setSelectedProgram(program);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProgram(null);
  };

  return (
    <section className={styles.containerWraper}>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Program Details"
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "transparent",
            border: "none",
          },
          overlay: {
            zIndex: 1000,
            backgroundColor: "transparent",
          },
        }}
      >
        {selectedProgram && (
          <div className={styles.modalContent}>
            <button onClick={handleCloseModal} className={styles.closeButton}>
              ×
            </button>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              initialSlide={initialSlide}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className={styles.slideTop}
            >
              {programs.map((program: plan) => (
                <SwiperSlide className={styles.slide} key={program.id}>
                  <div className={styles.containerImageModal}>
                    <Image
                      src={program.url as string}
                      fill
                      alt={program.nombre}
                      style={{
                        objectFit: "cover",
                        left: 40,
                        borderRadius: "25px 0px 0px 25px",
                      }}
                    />
                  </div>
                  <div className={styles.wraperContainerText}>
                    <div className={styles.contentSlide}>
                      <div className={styles.contentText}>
                        <h2>{program.nombre}</h2>

                        <ol>
                          {program.incluye.map((item, index) => {
                            return <li key={index}> {item} </li>;
                          })}
                        </ol>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </ReactModal>

      <div className={styles.sectionPlanesTittle}>
        <h2 className={borel.className}>planes</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={mQueryXs ? 1 : mQuerySm ? 2 : 3} //slider logic responsive
      >
        {programs.map((program: plan, index) => (
          <SwiperSlide
            onClick={() => handleOpenModal(program, index)}
            className={styles.swiperSlide}
            key={program.id}
          >
            <motion.section
              className={styles.planContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <div className={styles.textSection}>
                <h2>{program.nombre}</h2>
              </div>

              <div className={styles.containerImage}>
                <Image
                  src={program.url as string}
                  fill
                  loading="lazy"
                  alt="image-program"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Plans;
