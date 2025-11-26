import { ImageField, LinkField, RichTextField, TextField } from "@sitecore-jss/sitecore-jss-nextjs"


export interface HeroBannerProps {
  fields: {
    title: { value: string };
    description: { value: string };
    heroImage: { value: string };
    cta: { href: string; text: string }; // no .value wrapper
  };
}