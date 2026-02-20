import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePackageDto {

  @ApiProperty({
    type: String,
    example: 'title',
    description: 'title',
  })
  title?: string;
  @ApiProperty({
    type: String,
    example: 'description',
    description: 'description',
  })
  description?: string;
  @ApiProperty({
    type: String,
    example: 'slug',
    description: 'slug',
  })
  @IsString()
  slug: string;
  
  @ApiProperty({
    type: String,
    example: 'thumbnail',
    description: 'image',
  })
  thumbnail?: string;

  @ApiProperty({
    type: String,
    example: 'thumbnailImageAlt',
    description: 'thumbnailImageAlt',
  })
  thumbnailImageAlt?: string;

  @ApiProperty({
    type: String,
    example: 'banner',
    description: 'image',
  })
  banner?: string;

  @ApiProperty({
    type: String,
    example: 'bannerImageAlt',
    description: 'bannerImageAlt',
  })
  bannerImageAlt?: string;

  @IsString()
  @ApiProperty({
    type: String,
    example: 'duration',
    description: 'duration',
  })
  duration: string;
  @ApiProperty({
    type: String,
    example: 'link',
    description: 'link',
  })
  link?: string;
  @ApiProperty({
    type: String,
    example: 'page',
    description: 'page',
  })
  page?: string;
  @ApiProperty({
    type: String,
    example: 'content',
    description: 'content',
  })
  content?: string;
  @ApiProperty()
  images: any;
  @IsOptional()
  @ApiProperty()
  price?: string;

  @IsOptional()
  @ApiProperty()
  goodtoknow?: string;

  @IsOptional()
  @ApiProperty()
  groupAge?: string;

  @IsOptional()
  @ApiProperty()
  groupSize?: string;

  @IsOptional()
  @ApiProperty()
  accommodation?: string;

  @IsOptional()
  @ApiProperty()
  attractions?: string;

  @IsOptional()
  @ApiProperty()
  altitude?: string;

  @IsOptional()
  @ApiProperty()
  culture?: string;

  @IsOptional()
  @ApiProperty()
  endAt?: string;

  @IsOptional()
  @ApiProperty()
  startFrom?: string;

  @IsOptional()
  @ApiProperty()
  rating?: string;

  @IsOptional()
  @ApiProperty()
  videoLink?: string;
  // additional fields
  @ApiProperty()
  @IsOptional()
  transportation?: string;

  @ApiProperty()
  @IsOptional()
  tripGrade?: string;

  @ApiProperty()
  @IsOptional()
  permits?: string;


  @ApiProperty()
  @IsOptional()
  overview?: string;

  @ApiProperty()
  @IsOptional()
  highlights?: string;

  @ApiProperty()
  @IsOptional()
  altitudeInfo?: string;

  @ApiProperty()
  @IsOptional()
  itenary?: string;

  @ApiProperty()
  @IsOptional()
  packing?: string;

  @ApiProperty()
  @IsOptional()
  bestSeasonInfo?: string;

  @ApiProperty()
  @IsOptional()
  routeOverview?: string;

  @ApiProperty()
  @IsOptional()
  includes?: string;

  @ApiProperty()
  @IsOptional()
  excludes?: string;

  @ApiProperty()
  @IsOptional()
  sicknessAndSaftey?: string;
  @ApiProperty()

  @IsOptional()
  insuranceAndEmergency?: string;
  @ApiProperty()
  @IsOptional()
  permitsAndRegulations?: string;
  @ApiProperty()
  @IsOptional()
  shortTrekInfo?: string;
  @ApiProperty()
  @IsOptional()
  whyChooseThisPackage?: string;
  @ApiProperty()
  @IsOptional()
  priceBreakDown?: string;
  @ApiProperty()
  @IsOptional()
  bookingInfo?: string;

  @ApiProperty()
  @IsOptional()
  faqs?:any

  @IsOptional()
  @ApiProperty()
  bestSeason?: string;
  @IsOptional()
  @ApiProperty()
  destinationId: string;
  @IsOptional()
  @ApiProperty()
  discount?: string;
  @IsOptional()
  @ApiProperty()
  introduction?: string;
  @IsOptional()
  @ApiProperty()
  authorId?: number;

  @ApiProperty({
    type: Object,
    example: {
      metaTitle: 'metaTitle',
      metaDescription: 'metaDescription',
      metaKeywords: 'metaKeywords',
      metaImage: 'metaImage',
      ogDescription: 'ogDescription',
      ogImage: 'ogImage',
      twitterTitle: 'twitterTitle',
      twitterDescription: 'twitterDescription',
      twitterImage: 'twitterImage',
      metaRobots: 'metaRobots',
      metaAuthor: 'metaAuthor',
      metaCanonical: 'metaCanonical',
      metaRating: 'metaRating',
      metaCopyright: 'metaCopyright',
      metaRevisit: 'metaRevisit',
      twitterCard: 'twitterCard',
      twitterSite: 'twitterSite',
      twitterCreator: 'twitterCreator',
      schema: 'schema',
      ogTitle: 'ogTitle',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      blogId: 'blogId',
    },
    description: 'seo',
  })
  seo: any = {};
  // seo: {
  //   metaTitle?: string;
  //   metaDescription?: string;
  //   metaKeywords?: string;
  //   metaImage?: string;
  //   ogDescription?: string;
  //   ogImage?: string;
  //   twitterTitle?: string;
  //   twitterDescription?: string;
  //   twitterImage?: string;
  //   metaRobots?: string;
  //   metaAuthor?: string;
  //   metaCanonical?: string;
  //   metaRating?: string;
  //   metaCopyright?: string;
  //   metaRevisit?: string;
  //   twitterCard?: string;
  //   twitterSite?: string;
  //   twitterCreator?: string;
  //   schema?: string;
  //   ogTitle?: string;
  //   createdAt?: string;
  //   updatedAt?: string;
  //   blogId?: string;
  // };
}
