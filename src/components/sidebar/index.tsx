import { createContext, useContext, ReactNode } from "react";
import styles from "./sidebar.module.css";

interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProps {
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Sidebar = ({
  children,
  isOpen = false,
  onToggle = () => {},
}: SidebarProps) => {
  return (
    <SidebarContext.Provider value={{ isOpen, toggle: onToggle }}>
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
};

interface HeaderProps {
  children: ReactNode;
}

Sidebar.Header = function SidebarHeader({ children }: HeaderProps) {
  return <div className={styles.header}>{children}</div>;
};

interface ContentProps {
  children: ReactNode;
}

Sidebar.Content = function SidebarContent({ children }: ContentProps) {
  return <div className={styles.content}>{children}</div>;
};

interface FooterProps {
  children: ReactNode;
}

Sidebar.Footer = function SidebarFooter({ children }: FooterProps) {
  return <div className={styles.footer}>{children}</div>;
};

interface ToggleButtonProps {
  children?: ReactNode;
  className?: string;
}

Sidebar.Toggle = function SidebarToggle({
  children,
  className,
}: ToggleButtonProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar.Toggle must be used within a Sidebar");
  }

  return (
    <button onClick={context.toggle} className={className}>
      {children || (
        <span className={styles.toggleIcon}>{context.isOpen ? "×" : "☰"}</span>
      )}
    </button>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar");
  }
  return context;
};
