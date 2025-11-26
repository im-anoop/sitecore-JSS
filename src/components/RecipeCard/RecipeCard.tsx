import React from "react";
import styles from "./RecipeCard.module.css";
import { RecipeCardProps } from "./RecipeCard.model";

const RecipeCard: React.FC<RecipeCardProps> = ({ fields }) => {
  const { title, description, image, category, author } = fields;

  return (
    <article className={styles.card}>
      {/* Image */}
      <img
        src={image.value}
        alt={title.value}
        className={styles.image}
        loading="lazy"
      />

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.title}>{title.value}</h2>
        <p className={styles.description}>{description.value}</p>

        <div className={styles.meta}>
          <span className={styles.category}>{category.value}</span>
          <span className={styles.author}>By {author.value}</span>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;