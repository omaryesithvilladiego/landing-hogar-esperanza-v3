import { createContext, useContext } from "react";
import { IHeaderSectionsOptionsContext } from "../interfaces";

export const HeaderSectionsContext = createContext<
  IHeaderSectionsOptionsContext | undefined
>(undefined);

export const useHeaderSectionsContext = () => {
  const context = useContext(HeaderSectionsContext);
  if (!context) throw new Error("There aren't any context");
  return context;
};
