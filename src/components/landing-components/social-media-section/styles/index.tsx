"use client";

import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoTiktok from "../../../../../assets/logo-tiktok";
const actions = [
  {
    icon: <Instagram />,
    name: "Instagram",
    link: "https://www.instagram.com/hogaresperanza.mtr/profilecard/?igsh=YWw0NTd1NWw2eDJ1",
  },
  {
    icon: <Facebook />,
    name: "Facebook",
    link: "https://www.facebook.com/share/GQntcxkNkuwqfqFf/?mibextid=LQQJ4d",
  },
  {
    icon: <WhatsApp />,
    name: "WhatsApp",
    link: "https://wa.me/3013743729",
  },
  {
    icon: <LogoTiktok />,
    name: "TikTok",
    link: "https://www.tiktok.com/@hogar.esperanza?_t=8qUdqqrzFME&_r=1",
  },
];

function SocialMedia() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1050);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isLargeScreen ? (
        // --- MOBILE FLOATING BUTTON ---
        <div
          style={{
            position: "fixed" as const,
            bottom: "30px",
            right: "16px",
            zIndex: 1000,
            color: "white",
          }}
        >
          <button style={styles.fabButton} onClick={() => setOpen(!open)}>
            +
          </button>
          {open && (
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                position: "absolute",
                bottom: "70px",
                right: "0",
                gap: "12px",
              }}
            >
              {actions.map((action) => (
                <button
                  key={action.name}
                  style={styles.actionButton}
                  onClick={() => router.push(action.link)}
                >
                  {action.icon}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        // --- DESKTOP FIXED COLUMN ---
        <div
          style={{
            position: "fixed",
            top: "40%",
            left: "96%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column" as const,
            gap: "40px",
            zIndex: 1000,
          }}
        >
          {actions.map((action) => (
            <a
              key={action.name}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.desktopIcon}
            >
              {action.icon}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

const styles = {
  fabContainer: {
    position: "fixed",
    bottom: "30px",
    right: "16px",
    zIndex: 1000,
  },
  fabButton: {
    backgroundColor: "rgba(3,162,108,1)",
    color: "white",
    borderRadius: "50%",
    border: "none",
    width: "60px",
    height: "60px",
    fontSize: "32px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "70px",
    right: "0",
    gap: "12px",
  },
  actionButton: {
    backgroundColor: "white",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  desktopContainer: {
    position: "fixed",
    top: "40%",
    left: "96%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    zIndex: 1000,
  },
  desktopIcon: {
    color: "white",
    fontSize: "40px",
    textDecoration: "none",
  },
};

export default SocialMedia;
