import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBlogDto {
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
    example: 'image',
    description: 'image',
  })
  image?: string;
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
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    metaImage?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    metaRobots?: string;
    metaAuthor?: string;
    metaCanonical?: string;
    metaRating?: string;
    metaCopyright?: string;
    metaRevisit?: string;
    twitterCard?: string;
    twitterSite?: string;
    twitterCreator?: string;
    schema?: string;
    ogTitle?: string;
    createdAt?: string;
    updatedAt?: string;
    blogId?: string;
  };
  constructor(
    title: string,
    description: string,
    image: string,
    link: string,
    page: string,
    content: string,
    slug: string,
    seo: any,
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
    this.page = page;
    this.content = content;
    this.seo = seo;
    this.slug = slug;
  }
}
