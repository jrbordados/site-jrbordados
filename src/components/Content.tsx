import React from "react";

// import { Container } from './styles';

type Props = {
  children?: React.ReactNode;
};

export const Content: React.FC<Props> = ({ children }) => {
  return <div className="block mt-0 m-auto max-w-screen-lg px-3 py-2 md:py-5">{children}</div>;
};
