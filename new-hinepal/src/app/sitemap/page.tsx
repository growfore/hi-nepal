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

  return (
    <div style={{ padding: 20 }}>
      <h1>Sitemap</h1>
      <ul>
        {navItems.map((item) => (
          <li key={item.slug}>
            <a href={`${baseUrl}/activities/${item.slug}`}>{item.name}</a>
            <ul>
              {item.destinations.map((destination) => (
                <li key={destination.slug}>
                  <a href={`${baseUrl}/activities/${item.slug}/${destination.slug}`}>
                    {destination.name}
                  </a>
                  <ul>
                    {destination.packages.map((pkg) => (
                      <li key={pkg.slug}>
                        <a
                          href={`${baseUrl}/${pkg.slug}`}
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

        {/* Static links */}
        <li>
          <a href={`${baseUrl}/`}>Home</a>
        </li>
        <li>
          <a href={`${baseUrl}/about`}>About</a>
        </li>
      </ul>
    </div>
  );
}
