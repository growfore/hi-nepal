export type Activity = {
  name: string;
  description: string | null;
  slug: string;
  image: string | null;
  seo: {
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string | null;
    metaImage: string | null;
    metaRobots: string | null;
    metaAuthor: string | null;
    metaCanonical: string | null;
    metaRating: string | null;
    metaCopyright: string | null;
    metaRevisit: string | null;
    twitterCard: string | null;
    twitterSite: string | null;
    twitterCreator: string | null;
    twitterTitle: string | null;
    twitterDescription: string | null;
    schema: string | null;
    ogTitle: string | null;
  };
};

export type TSeo = {
  id: number | undefined;
  metaTitle: string | undefined;
  metaDescription: string | undefined;
  metaKeywords: string | undefined;
  metaImage: any;
  metaRobots: string | undefined;
  metaAuthor: string | undefined;
  metaCanonical: string | undefined;
  metaRating: string | undefined;
  metaCopyright: string | undefined;
  metaRevisit: string | undefined;
  twitterCard: string | undefined;
  twitterSite: string | undefined;
  schema: string | undefined;
};

export type TPackage = {
  id: number | undefined;
  title: string | null;
  description: string | null;
  slug: string;
  thumbnail: any;
  banner: any;
  duration: string | null;
  link: string | null;
  page: string | null;
  content: string | null;
  images: any[];
  price: string | null;
  introduction: string | null;
  itenary: string | null;
  includes: string | null;
  goodtoknow: string | null;
  groupAge: string | null;
  groupSize: string | null;
  accommodation: string | null;
  attractions: string | null;
  altitude: string | null;
  culture: string | null;
  endAt: string | null;
  startFrom: string | null;
  rating: string | null;
  videoLink: string | null;
  bestSeason: string | null;
  discount: number | null;
  destinationId: number | null;
  authorId: number | undefined;
  seo: TSeo | undefined;
  transportation: string | null;
  permits: string | null;
  tripGrade: string | null;


  overview: string | null;
  highlights: string | null;
  altitudeInfo: string | null;
  packing: string | null;
  bestSeasonInfo: string | null;
  routeOverview: string | null;
  sicknessAndSaftey: string | null;
  insuranceAndEmergency: string | null;
  permitsAndRegulations: string | null;
  shortTrekInfo: string | null;
  whyChooseThisPackage: string | null;
  priceBreakDown: string | null;
  bookingInfo: string | null;
  excludes: string | null;
};

export type TSiteInformations = {
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
  youtube: null;
  whatsapp: string;
  openingTime: string;
  bgImage: string;
  footerAbout: 'Et at enim voluptas ';
  rewardImg1: string;
  rewardImg2: string;
  footerImg: string;
  about: {
    id: number;
    title: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: null;
    createdAt: string;
    siteInformationId: 1;
  };
};

export type TBlog = {
  id: number;
  title: string | undefined;
  description: string | undefined;
  content: string;
  image: string | File | undefined;
  slug: string;
  subtitle: string | undefined;
  link: string;
  page: string | undefined;
  seoId: number;
  createdAt: string;
  updatedAt: string;
  seo: TSeo;
};

export type TAuthor = {
  name: string;
  username: string;
  email: string;
  bio: string | undefined;
  profilePicture: File | string | undefined;
  socialLinks:
    | {
        [key: string]: string;
      }
    | undefined;
  website: string | undefined;
  role: string | undefined;
  status: string | undefined;
};
