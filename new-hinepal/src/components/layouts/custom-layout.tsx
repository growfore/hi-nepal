"use server";
import { ReactNode } from "react";

const CustomLayout = ({
  children,
  footer,
  header,
}: {
  children: ReactNode;
  footer: ReactNode;
  header: ReactNode;
}) => {
  return (
    <>
      {header}
      <main>{children}</main>
      {/* <WhatsAppButton /> */}
      {footer}
    </>
  );
};

export default CustomLayout;
