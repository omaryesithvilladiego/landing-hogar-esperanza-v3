import { options } from "../types";

export interface INavBarOptionsContext {
  options: options;
}

export interface INavBarProps {
  children: React.ReactNode;
  options: options;
}
