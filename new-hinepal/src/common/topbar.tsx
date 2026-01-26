import { LucideMail, LucidePhone, LucideSmartphone } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex container mx-auto  text-white md:items-center justify-between py-4 p-2 gap-2">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <a
          href={`mailto:info@hinepaltreks.com`}
          className="hover:cursor-pointer hover:underline flex items-center gap-1"
        >
          <LucideMail strokeWidth={2} />
          info@hinepaltreks.com
        </a>
        <a
          href={`tel:+977 9856035091`}
          className="hover:cursor-pointer  hover:underline items-center gap-1 hidden md:flex"
        >
          <LucideSmartphone strokeWidth={2} />
          +977 9856035091
        </a>
      </div>
      <div>
        VAT NO. 604389161 
      </div>
    </div>
  );
};

export default Topbar;
