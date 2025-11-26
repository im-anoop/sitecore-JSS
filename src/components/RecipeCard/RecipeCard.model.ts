// Strongly typed Sitecore-style fields
export interface TextField {
  value: string;
}

export interface ImageField {
  value: string; // image URL; in real Sitecore you'll also have alt, width/height, etc.
}

export interface RecipeFields {
  title: TextField;
  description: TextField;
  image: ImageField;
  category: TextField;
  author: TextField;
}

// Props contract for the component (mirrors Sitecore rendering fields)
export interface RecipeCardProps {
  fields: RecipeFields;
}