import styles from "./HeroBanner.module.css";
import { HeroBannerProps } from "./HeroBanner.model";

export default function HeroBanner({ fields }: HeroBannerProps) {
  const { title, description, heroImage, cta } = fields;

  return (
    <section className={styles.heroBanner}>
      <img src={heroImage.value} alt={title.value} className={styles.image} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.value}</h1>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description.value || "" }}
        />
        {cta?.href && (
          <a href={cta.href} className={styles.cta}>
            {cta.text || "Learn More"}
          </a>
        )}
      </div>
    </section>
  );
}