"use client";
import styles from "./styles/navBar.module.css";
import { INavBarProps } from "./interfaces";
import { NavBarContext, useNavBarConext } from "./context";
import Image from "next/image";
import { roboto } from "@/app/fonts";
import { CiMenuFries } from "react-icons/ci";

const NavBar = ({ children, options }: INavBarProps) => {
  return (
    <NavBarContext.Provider value={{ options }}>
      <nav className={styles.navBar}>
        <ul className={`${styles.navList} ${roboto.className}`}>{children}</ul>
      </nav>
    </NavBarContext.Provider>
  );
};

NavBar.ButtonHome = function ButtonHome() {
  const context = useNavBarConext();
  const { ButtonHome } = context.options;
  return (
    <li>
      <a>{ButtonHome}</a>
    </li>
  );
};

NavBar.ButtonOpenMenu = function ButtomOpenMenu() {
  return (
    <div>
      <CiMenuFries fontSize={"3rem"} style={{ cursor: "pointer" }} />
    </div>
  );
};

NavBar.ButtonLogo = function ButtonLogo() {
  return (
    <li>
      <a>
        <Image src={"/logo.webp"} alt="Logo" width={35} height={30} priority />
      </a>
    </li>
  );
};

NavBar.ButtonAbout = function ButtonAbout() {
  const context = useNavBarConext();
  const { ButtonAbout } = context.options;
  return (
    <li>
      <a href="#about">{ButtonAbout}</a>
    </li>
  );
};

NavBar.ButtonServices = function ButtonServices() {
  const context = useNavBarConext();
  const { ButtonServices } = context.options;
  return (
    <li>
      <a>{ButtonServices}</a>
    </li>
  );
};

NavBar.ButtonContact = function ButtonContact() {
  const context = useNavBarConext();
  const { ButtonContact } = context.options;
  return (
    <li>
      <a>{ButtonContact}</a>
    </li>
  );
};

export default NavBar;
