import { options } from "../types";
import React from "react";

export interface IHeaderSectionsOptionsContext {
  options: options;
}

export interface IPropsHeader {
  children: React.ReactNode;
  options: options;
}
