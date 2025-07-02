"use client";
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

export default function Home() {
  // Using useMediaQuery hook directly without state management
  const isDesktop = useMediaQuery("(min-width: 630px)");

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

        {isDesktop && <NavBar.ButtonAbout />}
        {isDesktop && <NavBar.ButtonServices />}
        {isDesktop && <NavBar.ButtonContact />}

        {!isDesktop && <NavBar.ButtonOpenMenu />}
      </NavBar>
      <HomeSection />
      <GallerySection />
      <Plans />
      <Instalaciones />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}
