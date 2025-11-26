export interface BlogFields {
  title: { value: string };
  summary: { value: string };
  image: { src: string; alt?: string };
  cta: { href: string; text: string };
}