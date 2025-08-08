import { ReactNode } from 'react';
import BackToTop from '@/app/_components/back-to-top';

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
      <BackToTop />
    </>
  );
};

export default CustomLayout;
