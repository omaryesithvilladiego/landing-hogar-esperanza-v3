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
    </div>
  );
};

export default Footer;
