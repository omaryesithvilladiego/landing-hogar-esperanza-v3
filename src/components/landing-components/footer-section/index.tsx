/* eslint-disable @next/next/no-img-element */
"use client";

import { roboto } from "@/app/fonts";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles/styles.module.css";

const socialMedia = [
  {
    name: "instagram",
    icon: <FaInstagram />,
    src: "https://www.instagram.com/hogaresperanza.mtr/profilecard/?igsh=YWw0NTd1NWw2eDJ1",
    ariaLabel: "Visit our Instagram page",
  },
  {
    name: "facebook",
    icon: <FaFacebook />,
    src: "https://www.facebook.com/share/GQntcxkNkuwqfqFf/?mibextid=LQQJ4d",
    ariaLabel: "Visit our Facebook page",
  },
  {
    name: "whatsApp",
    icon: <FaWhatsapp />,
    src: "https://wa.me/3013743729",
    ariaLabel: "Contact us via WhatsApp",
  },
];

const Footer = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1130);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.contentContainer}>
        <footer className={styles.footer}>
          <div className={styles.stackContainer}>
            <img
              loading="lazy"
              width={"30rem"}
              alt="Fundación Hogar Esperanza"
              src="/brand/logo.webp"
              className={styles.footerLogo}
            />
            <h5 className={roboto.className}>Fundacion Hogar Esperanza</h5>
            <h6 className={roboto.className}>
              Cl. 24 #15 - 90, Montería, Córdoba
            </h6>
            <p className={roboto.className}>3013743729</p>

            <div className={styles.socialMediaContainer}>
              {socialMedia.map((element) => (
                <button
                  onClick={() => router.push(element.src)}
                  className={styles.socialButton}
                  key={element.name}
                  aria-label={element.ariaLabel}
                >
                  {element.icon}
                  <span
                    className={`${roboto.className} ${!isDesktop ? "sr-only" : ""}`}
                  >
                    {element.name}
                  </span>
                </button>
              ))}
            </div>

            <hr className={styles.divider} />

            <div className={styles.privacyContainer}>
              <Link href="/privacity" className={styles.privacyLink}>
                Política de Privacidad
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* mapa */}
      <div>
        <iframe
          className={styles.mapFrame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.417216466431!2d-75.88079712517057!3d8.746756291303733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44b0757867fd66d3%3A0x996f2354c7159b2b!2sFundaci%C3%B3n%20Hogar%20Esperanza!5e0!3m2!1ses!2sco!4v1749504486579!5m2!1ses!2sco"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          title="Location of Fundación Hogar Esperanza"
        />
      </div>
    </div>
  );
};

export default Footer;
