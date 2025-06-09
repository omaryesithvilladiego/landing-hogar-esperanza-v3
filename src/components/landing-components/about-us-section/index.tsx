"use client";
import { borel, roboto } from "@/app/fonts";
import styles from "./styles/styles.module.css";
import { motion } from "framer-motion";

function AboutUs() {
  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      filter: "blur(10px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      rotateX: 90,
      transition: {
        duration: 0.1,
      },
    },
  };

  const createAnimatedText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterAnimation}
        style={{ display: "inline-block" }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <motion.div
          id="mision"
          className={`${roboto.className} ${styles.section}`}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.01 }}
          variants={textAnimation}
        >
          <motion.h2 className={`${styles.title} ${borel.className}`}>
            {createAnimatedText("misión")}
          </motion.h2>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            Nuestra misión es proporcionar a nuestros adultos mayores bienestar
            integral, calidad de vida y tranquilidad en un ambiente hogareño
            seguro, donde recibirán amor y cuidados excepcionales durante toda
            su estancia. Nos comprometemos a crear un espacio donde cada persona
            se sienta como en casa, valorando su individualidad y ofreciendo un
            entorno que promueva su felicidad y confort diario.
          </motion.p>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            Nos dedicamos a ofrecerles la oportunidad de disfrutar de un hogar
            lleno de empatía, respeto, atención especializada y compañía
            profesional, garantizando siempre un ambiente cálido y lleno de
            afecto. Nuestro equipo está comprometido con proporcionarles una
            experiencia en la que se sientan cuidados y apreciados, promoviendo
            su bienestar físico, emocional y social en todo momento.
          </motion.p>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            En Hogar Esperanza, nos esforzamos por ser más que un lugar de
            residencia; somos una familia que brinda apoyo continuo y cariño,
            asegurando que cada día sea significativo y enriquecedor para
            nuestros residentes.
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.01 }}
          variants={textAnimation}
        >
          <motion.h2 className={`${styles.title} ${borel.className}`}>
            {createAnimatedText("visión")}
          </motion.h2>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            Desde nuestros corazones y capacidades, nos esforzamos por ofrecer
            atención de primera calidad para consolidarnos como el hogar número
            uno para adultos mayores en Montería y sus alrededores.
          </motion.p>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            En Hogar Esperanza, estamos profundamente comprometidos con nuestra
            causa. Con el respaldo de nuestro personal altamente especializado y
            la constante adaptación de nuestros esfuerzos, aspiramos a
            establecer nuevos estándares en el cuidado y la protección de
            nuestros residentes mayores. Nos dedicamos a crear un entorno cálido
            y seguro donde cada persona se sienta valorada y cuidada,
            promoviendo su bienestar integral.
          </motion.p>
          <motion.p
            className={`${roboto.className} ${styles.paragraph}`}
            variants={textAnimation}
          >
            Nuestra visión abarca no solo brindar un excelente servicio, sino
            también ser reconocidos por nuestra dedicación, compasión y
            excelencia en el cuidado de quienes han dedicado sus vidas al
            servicio de las generaciones pasadas. Con pasión y compromiso,
            aspiramos a ser líderes en el sector, transformando positivamente la
            experiencia de envejecer y vivir en comunidad.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
