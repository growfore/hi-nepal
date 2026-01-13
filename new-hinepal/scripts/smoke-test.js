(async () => {
  const urls = ["/", "/sitemap.xml"];
  const base = process.env.BASE_URL || "http://localhost:3000";
  for (const path of urls) {
    const url = base + path;
    const start = Date.now();
    try {
      const res = await fetch(url);
      const ms = Date.now() - start;
      console.log(`${path} -> ${res.status} ${res.statusText} ${ms}ms`);
      const size = (await res.text()).length;
      console.log(`${path} size: ${size} bytes`);
    } catch (e) {
      console.error(`error fetching ${url}:`, e.message || e);
    }
  }
})();
