import Image from "next/image";
import { RecipeComponentFields } from "./Recipe.model"
import styles from "./Recipe.module.css";

export default function RecipeCard({ fields }: { fields: RecipeComponentFields }) {
  return (
    <div className={styles.card}>
      <Image
        src={fields.image.src}
        alt={fields.image.alt || fields.title.value}
        width={300}
        height={200}
        className={styles.image}
      />
      <h2 className={styles.title}>{fields.title.value}</h2>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: fields.description.value }}
      />
    </div>
  );
}