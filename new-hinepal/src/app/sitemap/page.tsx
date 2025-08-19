import { TNavBar } from "@/types/types";
import { get } from "@/utils/request-hander";
import Link from "next/link";

export default async function SitemapPage() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;

  let navItems: TNavBar = [];

  await get({
    endPoint: backendUrl + "/api/activities/nav-items",
    token: "",
    success: (message, res) => {
      navItems = res.data;
    },
    failure: (message) => {
      console.error(message, "error in link fetching");
    },
  });
  const hoverStyle = "hover:border-b-2 hover:border-orange-400 hover:border-dashed w-fit mb-1 text-blue-400"
  return (
    <div className="p-20 mt-24">
      <h1 className="font-bold text-xl">Sitemap</h1>
      <ul>
        <li>
          <Link title="go to homepage" className={hoverStyle} href={`${baseUrl}/`}>Home</Link>
        </li>
        <li >
          <Link title="go to about page" className={hoverStyle} href={`${baseUrl}/about`}>About</Link>
        </li>
        <li >
          <Link title="go to adventure page" className={hoverStyle} href={`${baseUrl}/adventure`}>Adventures</Link>
        </li>
        <li >
          <Link title="go to booking page" className={hoverStyle} href={`${baseUrl}/booking`}>Booking</Link>
        </li>
        <li >
          <Link title="go to blogs page" className={hoverStyle} href={`${baseUrl}/blogs`}>Blogs</Link>
        </li>
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link title={`go to ${item.name} page`} className={hoverStyle} href={`${baseUrl}/activities/${item.slug}`}>{item.name}</Link>
            <ul className="pl-4">
              {item.destinations.map((destination) => (
                <li key={destination.slug}>
                  <Link title={`go to ${destination.name} page`} className={hoverStyle} href={`${baseUrl}/activities/${item.slug}/${destination.slug}`}>
                    {destination.name}
                  </Link>
                  <ul className="pl-4">
                    {destination.packages.map((pkg) => (
                      <li key={pkg.slug}>
                        <Link title={`go to ${pkg.title} page`} className={hoverStyle} href={`${baseUrl}/${pkg.slug}`}>
                          {pkg.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      <li >
        <Link title="go to privacy policy page" className={hoverStyle} href={`${baseUrl}/privacy-policy`}>Privacy Policy</Link>
      </li>
      <li >
        <Link title="go to terms and conditions page" className={hoverStyle} href={`${baseUrl}/terms-and-conditions`}>Terms and Conditions</Link>
      </li>
      </ul>

    </div>
  );
}
