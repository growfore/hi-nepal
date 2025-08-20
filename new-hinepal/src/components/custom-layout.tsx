import { ReactNode } from 'react';
import BackToTop from '@/app/_components/back-to-top';
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
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default CustomLayout;
