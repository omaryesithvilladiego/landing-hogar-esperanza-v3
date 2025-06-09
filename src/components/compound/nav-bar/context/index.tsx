"use client";
import { createContext, useContext } from "react";
import { INavBarOptionsContext } from "../interfaces";

export const NavBarContext = createContext<INavBarOptionsContext | null>(null);
export const useNavBarConext = function () {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
};
