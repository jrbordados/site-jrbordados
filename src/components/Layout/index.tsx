import React from "react";

import { clsx } from "clsx";
import { Montserrat } from "next/font/google";

import { Header } from "./Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const className = clsx(montserrat.variable, "font-sans");
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};
