"use client";

import { useEffect, useState } from "react";
import HomeSection from "@/components/landing-components/home-section";
import styles from "./page.module.css";
import NavBar from "@/components/compound/nav-bar";
import GallerySection from "@/components/landing-components/gallery-section";
import Plans from "@/components/landing-components/plans-section";
import Instalaciones from "@/components/landing-components/instalations-section";
import AboutUs from "@/components/landing-components/about-us-section";
import Footer from "@/components/landing-components/footer-section";
import { ContactForm } from "@/components/landing-components/contac-section";
import { useMediaQuery } from "usehooks-ts";
import SocialMedia from "@/components/landing-components/social-media-section/styles";
import Image from "next/image";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 630px)");

  useEffect(() => {
    setHasMounted(true);
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.logoLoader}>
          <Image
            src="/logo.webp"
            alt="Logo"
            loading="eager"
            width={50}
            height={50}
            className={styles.pulsingLogo}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <NavBar
        options={{
          ButtonHome: "Inicio",
          ButtonAbout: "Acerca de",
          ButtonServices: "Servicios",
          ButtonContact: "Contacto",
        }}
      >
        <NavBar.ButtonLogo />
        {hasMounted && isDesktop && <NavBar.ButtonAbout />}
        {hasMounted && isDesktop && <NavBar.ButtonServices />}
        {hasMounted && isDesktop && <NavBar.ButtonContact />}
        {hasMounted && !isDesktop && <NavBar.ButtonOpenMenu />}
      </NavBar>

      <HomeSection />
      <GallerySection />
      <Plans />
      <Instalaciones />
      <AboutUs />
      <ContactForm />
      <Footer />
      <SocialMedia />
    </div>
  );
}
