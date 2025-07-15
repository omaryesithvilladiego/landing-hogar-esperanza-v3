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
import { useState, useRef, useEffect } from "react";

const Plans = () => {
  const mQueryXs = useMediaQuery("(max-width: 576px)");
  const mQuerySm = useMediaQuery("(max-width: 1100px)");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<plan | null>(null);
  const [initialSlide, setInitialSlide] = useState<number>(programs.length);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState<{
    [key: string]: boolean;
  }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    setIsScrolledToBottom((prev) => ({ ...prev, [program.id]: false }));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProgram(null);
  };

  const handleScroll = (programId: string) => {
    const currentRef = contentRefs.current[programId];
    if (currentRef) {
      const isAtBottom =
        currentRef.scrollTop + currentRef.clientHeight >=
        currentRef.scrollHeight;
      setIsScrolledToBottom((prev) => ({ ...prev, [programId]: isAtBottom }));
    }
  };

  const scrollContent = (programId: string) => {
    const currentRef = contentRefs.current[programId];
    if (currentRef) {
      currentRef.scrollTo({
        top: isScrolledToBottom[programId] ? 0 : currentRef.scrollHeight,
        behavior: "smooth",
      });
      setIsScrolledToBottom((prev) => ({
        ...prev,
        [programId]: !prev[programId],
      }));
    }
  };

  useEffect(() => {
    Object.entries(contentRefs.current).forEach(([programId, ref]) => {
      if (ref) {
        const handleScrollEvent = () => handleScroll(programId);
        ref.addEventListener("scroll", handleScrollEvent);
        return () => ref.removeEventListener("scroll", handleScrollEvent);
      }
    });
  }, [isOpen]);

  return (
    <section id="services" className={styles.containerWraper}>
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
            <button
              onClick={handleCloseModal}
              className={styles.closeButton}
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333",
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "absolute",
                right: "10px",
                top: "10px",
                zIndex: 1001,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            >
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
                    <div
                      ref={(el: HTMLDivElement | null): void => {
                        contentRefs.current[program.id] = el;
                      }}
                      className={styles.contentSlide}
                    >
                      <div className={styles.contentText}>
                        <h2 className={borel.className}>{program.nombre}</h2>
                        <div className={styles.scrollButtonContainer}>
                          <button
                            onClick={() => scrollContent(String(program.id))}
                            className={styles.scrollButton}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                transform: isScrolledToBottom[program.id]
                                  ? "rotate(180deg)"
                                  : "none",
                                transition: "transform 0.3s ease",
                              }}
                            >
                              <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                          </button>
                        </div>

                        <ol>
                          {program.incluye.map((item, index) => {
                            return <li key={index}> - {item} </li>;
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
        slidesPerView={mQueryXs ? 1 : mQuerySm ? 2 : 3}
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
                <h2 className={borel.className}>{program.nombre}</h2>
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
