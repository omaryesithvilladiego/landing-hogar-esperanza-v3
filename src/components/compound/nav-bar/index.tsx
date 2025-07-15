"use client";
import styles from "./styles/navBar.module.css";
import { INavBarProps } from "./interfaces";
import { NavBarContext, useNavBarConext } from "./context";
import Image from "next/image";
import { roboto } from "@/app/fonts";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

const NavBar = ({ children, options }: INavBarProps) => {
  return (
    <NavBarContext.Provider value={{ options }}>
      <section suppressHydrationWarning className={styles.navBar}>
        <ul className={`${styles.navList} ${roboto.className}`}>{children}</ul>
      </section>
    </NavBarContext.Provider>
  );
};

NavBar.ButtonHome = function ButtonHome() {
  const context = useNavBarConext();
  const { ButtonHome } = context.options;
  if (!ButtonHome) return null;
  return (
    <li>
      <a>{ButtonHome}</a>
    </li>
  );
};

NavBar.ButtonOpenMenu = function ButtomOpenMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <li>
      <CiMenuFries
        onClick={toggleSidebar}
        fontSize={"3rem"}
        style={{ cursor: "pointer" }}
      />
      <Sidebar isOpen={isOpen} onToggle={toggleSidebar}>
        <Sidebar.Toggle />
        <Sidebar.Content>
          <NavBar
            options={{
              ButtonHome: "Inicio",
              ButtonAbout: "Acerca de",
              ButtonServices: "Servicios",
              ButtonContact: "Contacto",
            }}
          >
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: "100%",
                height: "100%",
              }}
            >
              <NavBar.ButtonAbout />
              <NavBar.ButtonServices />
              <NavBar.ButtonContact />
            </section>
          </NavBar>
        </Sidebar.Content>
      </Sidebar>
    </li>
  );
};

NavBar.ButtonLogo = function ButtonLogo() {
  return (
    <li>
      <Image src={"/logo.webp"} alt="Logo" width={35} height={30} priority />
    </li>
  );
};

NavBar.ButtonAbout = function ButtonAbout() {
  const context = useNavBarConext();
  const { ButtonAbout } = context.options;
  if (!ButtonAbout) return null;
  return (
    <li suppressHydrationWarning>
      {" "}
      <a href="#about"> {ButtonAbout}</a>
    </li>
  );
};

NavBar.ButtonServices = function ButtonServices() {
  const context = useNavBarConext();
  const { ButtonServices } = context.options;
  return (
    <li>
      <Link href="#services">{ButtonServices}</Link>
    </li>
  );
};

NavBar.ButtonContact = function ButtonContact() {
  const context = useNavBarConext();
  const { ButtonContact } = context.options;
  return (
    <li>
      <a href="#contact">{ButtonContact}</a>
    </li>
  );
};

export default NavBar;
