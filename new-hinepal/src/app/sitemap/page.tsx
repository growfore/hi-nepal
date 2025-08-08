import { TNavBar } from "@/types/types";
import { get } from "@/utils/request-hander";

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
    <div style={{ padding: 20 }}>
      <h1 className="font-bold text-xl">Sitemap</h1>
      <ul>
        <li>
          <a className={hoverStyle} href={`${baseUrl}/`}>Home</a>
        </li>
        <li >
          <a className={hoverStyle} href={`${baseUrl}/about`}>About</a>
        </li>
        {navItems.map((item) => (
          <li key={item.slug}>
            <a href={`${baseUrl}/activities/${item.slug}`} className={hoverStyle}>{item.name}</a>
            <ul className="pl-4">
              {item.destinations.map((destination) => (
                <li key={destination.slug}>
                  <a href={`${baseUrl}/activities/${item.slug}/${destination.slug}`} className={hoverStyle}>
                    {destination.name}
                  </a>
                  <ul className="pl-4">
                    {destination.packages.map((pkg) => (
                      <li key={pkg.slug}>
                        <a
                          href={`${baseUrl}/${pkg.slug}`}
                          className={hoverStyle}
                        >
                          {pkg.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
