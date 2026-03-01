import { TNavBar } from "@/types/types";

const DESTINATION_ORDER = [
  "Manaslu Region",
  "Annapurna Region",
  "Everest Region",
];

const PACKAGE_ORDERS: Record<string, string[]> = {
  "manaslu-region": [
    "manaslu-circuit-trek",
    "manaslu-tsum-valley-circuit-trek",
    "tsum-valley-trek",
  ],
  "annapurna-region": [
    "annapurna-circuit-trek",
    "annapurna-base-camp-trek",
    "north-annapurna-base-camp-trek",
    "mardi-himal-trek",
    "ghorepani-poon-hill-trek",
    "jomsom-muktinath-trek",
    "dhaulagiri-circuit-trek",
    "kori-trek",
    "khumai-danda-trek",
    "kapuche-lake-trek",
    "khopra-danda-trek",
  ],
  "dolpo-region": [
    "shey-phoksundo-lake-trek",
    "upper-dolpo-trek",
    "lower-dolpo-trek",
  ],
  "everest-region": [
    "everest-base-camp-trek",
    "chola-pass-gokyo-trek",
    "gokyo-valley-trek",
    "pikey-peak-trek",
    "three-passes-trek",
    "renjo-la-pass-trek",
  ],
  "multi-days-tour": [
    "kathmandu-tour-package",
    "upper-mustang-tour",
    "tilicho-lake-tour",
    "rara-lake-tour-nepal",
    "kalinchowk-trek",
    "ghandruk-village-tour",
    "sikles-village-tour",
    "panchase-trek",
  ],
  "day-tours": [
    "pokhara-valley-tour",
    "sarangkot-pokhara-tour",
    "world-peace-pagoda",
    "pokhara-australian-camp-hike",
    "kalikasthan-thulakot-hill",
  ],
};

export function sortNavBar(navBar: TNavBar): TNavBar {
  const destIndexMap = new Map(DESTINATION_ORDER.map((name, i) => [name, i]));

  return navBar.map((activity) => {
    const sortedDestinations = [...activity.destinations]
      .sort((a, b) => {
        const aIdx = destIndexMap.get(a.name) ?? Infinity;
        const bIdx = destIndexMap.get(b.name) ?? Infinity;
        if (aIdx !== bIdx) return aIdx - bIdx;
        return a.name.localeCompare(b.name);
      })
      .map((dest) => {
        const order = PACKAGE_ORDERS[dest.slug];
        let sortedPackages = [...dest.packages];

        if (order) {
          const idxMap = new Map(order.map((s, i) => [s, i]));
          sortedPackages.sort((x, y) => {
            const xi = idxMap.get(x.slug) ?? Infinity;
            const yi = idxMap.get(y.slug) ?? Infinity;
            if (xi === yi) return x.title.localeCompare(y.title);
            return xi - yi;
          });
        } else {
          sortedPackages.sort((x, y) => x.title.localeCompare(y.title));
        }

        return { ...dest, packages: sortedPackages };
      });
    return { ...activity, destinations: sortedDestinations };
  });
}
