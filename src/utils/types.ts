import {UrlObject} from "node:url";

export type TMenuItem = {
  title: string;
  href: string;
}

export type TCard = {
  link?: UrlObject | string;
  size: 'small' | 'medium' | 'large';
  isDescriptionHidden: boolean;
  image: string;
  description?: string;
}