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

export default function Home() {
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
        <NavBar.ButtonAbout />
        <NavBar.ButtonServices />
        <NavBar.ButtonContact />
        <NavBar.ButtonOpenMenu />
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
