import Link from "next/link";
import { HeaderSectionsContext, useHeaderSectionsContext } from "./context";
import { IPropsHeader } from "./interfaces";
import styles from "./styles/header-section.module.css";

const HeaderSectionsCompound = ({ children, options }: IPropsHeader) => {
  return (
    <HeaderSectionsContext.Provider value={{ options }}>
      <div className={styles.containerHeader}>
        <div className={styles.contentHeaderSection}>{children}</div>
      </div>
    </HeaderSectionsContext.Provider>
  );
};

HeaderSectionsCompound.buttonNameSection = function ButtonNameSection() {
  const context = useHeaderSectionsContext();
  const { nameSection } = context.options;
  const { IconSection } = context.options;

  return (
    <section className={styles.containerName}>
      <div> {IconSection}</div>
      <h2> {nameSection} </h2>
    </section>
  );
};

HeaderSectionsCompound.ButtonViewMore = function ButtonViewMore() {
  const context = useHeaderSectionsContext();
  const { buttonViewMore } = context.options;
  return <Link href={"/"}> {buttonViewMore} </Link>;
};

export default HeaderSectionsCompound;
