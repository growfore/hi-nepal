import { ReactNode } from "react";
import WhatsAppButton from "../molecules/whatsapp-button";

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
      <div>
        {header}
        <main>{children}</main>
        {/* <WhatsAppButton /> */}
        {footer}
      </div>
    </>
  );
};

export default CustomLayout;
