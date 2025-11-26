// src/types/fields.ts
export interface TextField {
  value: string;
}

export interface RichTextField {
  value: string; // contains HTML
}

export interface ImageField {
  src: string;
  alt?: string;
}

export interface RecipeComponentFields {
  title: TextField;
  image: ImageField;
  description: RichTextField;
}