import recipes from "../mock-data/recipes.json";
import authors from "../mock-data/authors.json";
import layout from "../mock-data/layout.json";
import heroBanners from "../mock-data/heroBannerData.json";
import recipeComponentFields  from "../mock-data/RecipeComponent.json";
import blogs from "../mock-data/blogs.json";



export const getRecipes = () => recipes;
export const getAuthors = () => authors;
export const getLayout = () => layout;
export const getHeroBanners = () => heroBanners;
export const getRecipeComponent = () => recipeComponentFields;

export const getRecipeById = (id: string) => {
  return recipes.find((r) => {
    const href = r.fields?.cta?.href || "";
    return href.endsWith(id);
  });
};

export const getBlogs = () => {
  return blogs
    .slice() // clone array
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    ); // newest first
};