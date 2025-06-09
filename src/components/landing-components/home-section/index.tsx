"use client";
import React from "react";
import styles from "./styles/home.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  motionStyles,
  motionStylesVariant,
  motionStylesVariant2,
  motionStylesVariant3,
} from "@/animation/animation";
import { borel, roboto } from "@/app/fonts";

const HomeSection: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.5, 0]);

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className={`${styles.homeSection}`}>
      <motion.video
        autoPlay
        loop
        muted
        src="/videoPromotion.mp4"
        style={{
          position: "absolute",
          top: 0,
          objectFit: "cover",
          width: "100%",
          zIndex: -1,
          height: "inherit",
          opacity,
        }}
      >
        Tu navegador no soporta la etiqueta de video.
      </motion.video>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
          opacity: backgroundOpacity,
        }}
      />
      <section className={`${styles.homeSectionTwo}`} style={{ zIndex: 1 }}>
        <motion.h1
          className={`${borel.className}`}
          {...motionStyles}
          {...fadeInOut}
          viewport={{ once: false }}
          whileInView="animate"
        >
          hogar esperanza
        </motion.h1>
        <motion.h2
          className={`${roboto.className} `}
          {...motionStylesVariant}
          {...fadeInOut}
          viewport={{ once: false }}
          whileInView="animate"
        >
          El lugar donde los adultos mayores se sienten como en casa
        </motion.h2>
        <motion.p
          className={`${roboto.className} `}
          {...motionStylesVariant2}
          {...fadeInOut}
          viewport={{ once: false }}
          whileInView="animate"
        >
          Somos un hogar para adultos mayores en Montería que brinda mucho apoyo
          y amor, promoviendo su bienestar y ofreciendo un entorno seguro donde
          vivan con dignidad, alegría y propósito.
        </motion.p>
        <motion.button
          className={`${roboto.className} `}
          {...motionStylesVariant3}
          {...fadeInOut}
          viewport={{ once: false }}
          whileInView="animate"
        >
          Apoya con amor
        </motion.button>
      </section>
    </section>
  );
};

export default HomeSection;
