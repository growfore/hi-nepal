export type TSiteInformation = {
  id: number;
  name: string;
  logo: string;
  icon: string;
  description: string;
  url: string;
  address: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: null | string;
  whatsapp: string | null;
  openingTime: string;
  bgImage: string;
  footerAbout: string;
  rewardImg1: string;
  rewardImg2: string;
  footerImg: string;
  about: {
    id: 1;
    title: null;
    description: null;
    image1: null;
    image2: null;
    image3: null;
    image4: null;
    createdAt: string;
    siteInformationId: number;
  };
};
export type TNavBar = {
  name: string;
  slug: string;
  destinations: {
    name: string;
    slug: string;
    packages: {
      title: string;
      slug: string;
    }[];
  }[];
}[];

export type TDestination = {
  id: number;
  name: string;
  slug: string;
  description: string;
  activityId: number;
  createdAt: string;
  image: string;
  seoId: number;
  activity: {
    name: string;
    slug: string;
  };
  seo: Tseo;
  _count: {
    packages: number;
  };
};
export type TDestinationSingle = {
  id: number;
  name: string;
  slug: string;
  description: string;
  activityId: number;
  createdAt: string;
  image: string;
  seoId: number;
  activity: {
    name: string;
    slug: string;
  };
  seo: Tseo;
  packages: TPackages;
};

export type Tseo = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
  metaRobots: string;
  metaAuthor: string;
  metaCanonical: string;
  metaRating: string;
  metaCopyright: string;
  metaRevisit: string;
  twitterCard: string;
  twitterSite: string;
  schema: string;
  createdAt: string;
  updatedAt: string;
};
export type TActivity = {
  id: number;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  image: string;
  seoId: number;
  // seo: Tseo;
  _count: {
    destinations: number;
  };
};

export type TPackages = {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  groupSize: number;
  destination: {
    name: string;
    slug:string
  };
  link: string;
  slug: string;
  price: string;
  discount: string;
  createdAt: string;
}[];

export type TPackageDetails = {
  id: number;
  title: string;
  description: string;
  content: string;
  banner: string;
  thumbnail: string;
  slug: string;
  subtitle: string | null;
  itenary: string;
  introduction: string;
  includes: string;
  goodtoknow: string;
  price: string;
  discount: string | null;
  duration: string | null;
  link: string | null;
  bestSeason: string | null;
  videoLink: string | null;
  rating: string | null;
  altitude: string | null;
  startFrom: string | null;
  endAt: string | null;
  culture: string | null;
  attractions: string | null;
  accommodation: string | null;
  groupSize: string | null;
  groupAge: string | null;
  map: string;
  createdAt: string;
  updatedAt: string;
  seoId: number;
  destinationId: number;
  seo: Tseo;
  media: Tmedia;
  tripGrade: string | null;
  transportation: string | null;
  permits: string | null;


  overview: string | null;
  highlights: string | null;
  altitudeInfo: string | null;
  packing: string | null;
  bestSeasonInfo: string | null;
  routeOverview: string | null;
  excludes: string | null;
  sicknessAndSaftey: string | null;
  insuranceAndEmergency: string | null;
  permitsAndRegulations: string | null;
  shortTrekInfo: string | null;
  whyChooseThisPackage: string | null;
  priceBreakDown: string | null;
  bookingInfo: string | null;
};
export type relatedProducts = {
  title: string;
  slug: string;
}[];

export type Tmedia = {
  id: number;
  alt: string;
  name: string;
  url: string;
  packageId: number;
  createdAt: string;
  updatedAt: string;
}[];
