import { ReactNode } from 'react';
import WhatsAppButton from './whatsapp-button';

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
      <div
      >
        {header}
        <main>
          {children}
        </main>
        {footer}
      </div>
    </>
  );
};

export default CustomLayout;
