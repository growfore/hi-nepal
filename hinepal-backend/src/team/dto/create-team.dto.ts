import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  name?: string;
  image?: string;
  position?: string;
  facebook?: string;
  twitter?: string;
  linkdin?: string;
  constructor(
    name: string,
    image: string,
    position: string,
    facebook: string,
    twitter: string,
    linkdin: string,
  ) {
    this.name = name;
    this.image = image;
    this.position = position;
    this.facebook = facebook;
    this.twitter = twitter;
    this.linkdin = linkdin;
  }
}
