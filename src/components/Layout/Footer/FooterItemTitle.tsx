import React from "react";

type FooterItemTitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & { children: React.ReactNode };

export const FooterItemTitle: React.FC<FooterItemTitleProps> = ({ children, ...props }) => {
  return (
    <h5 className="font-bold text-xl mb-4" {...props}>
      {children}
    </h5>
  );
};
