// import { getHeroBanners, getLayout, getRecipes, getRecipeComponent } from "../lib/mock-loader";
// import RecipeCard from "../components/RecipeCard/RecipeCard";
// import HeroBanner from "../components/HeroBanner/HeroBanner";
// import RecipeComponent from "../components/RecipeComponent/RecipeComponent";
// import Blogs from "../components/Blogs/Blog";
// import { getBlogs } from "../lib/mock-loader";




//   const layout = getLayout();
//   const recipes = getRecipes();
//   const heroBanners = getHeroBanners();
//   const recipeComponents = getRecipeComponent();

//   const headerComponents = layout.sitecore.route.placeholders.header;
//   const footerText = layout.sitecore.route.placeholders.footer[0].fields.text.value;
//   const mainComponents = layout.sitecore.route.placeholders.main;
//   const blogs = getBlogs();

//   return (
//     <div style={{ maxWidth: 920, margin: "32px auto", padding: "0 16px" }}>
//       {/* Header placeholder */}
//       {headerComponents.map((comp: any) => {
//         if (comp.componentName === "HeroBanner") {
//           const banner = heroBanners.find((b: any) => b.id === comp.dataSource);
//           if (!banner) return null;
//           return <HeroBanner key={banner.id} fields={banner.fields} />;
//         }
//         if (comp.componentName === "RecipeComponent") {
//           const recipeComp = recipeComponents.find((c: any) => c.id === comp.dataSource);
//           console.log(recipeComp);
//           if (!recipeComp) return null;
//           return <RecipeComponent key={recipeComp.id} fields={recipeComp.fields} />;

//         }
//         return null;
//       })}


//       {/* Main placeholder */}
//       <main style={{ display: "grid", gap: 16 }}>
//         {mainComponents.map((comp: any) => {
//           if (comp.componentName === "RecipeCard") {
//             const recipe = recipes.find((r: any) => r.id === comp.dataSource);
//             if (!recipe) return null;
//             return <RecipeCard key={recipe.id} fields={recipe.fields} />;
//           }
//           if (comp.componentName === "Blog") {
//             console.log("Blogs loaded:", blogs);
//   return <Blogs blogs={getBlogs()} />;
// }

//           return null;
//         })}
//       </main>

//       {/* Footer */}
//       <footer style={{ marginTop: 24, color: "#6b7280" }}>{footerText}</footer>
//     </div>
//   );

import Blogs from "../components/Blogs/Blog";
import { getBlogs } from "../lib/mock-loader";
export default function Home() {
  const blogs = getBlogs();

  // ebug log to check if blogs are loading

  return (
    <div style={{ padding: "2rem" }}>
      {/* Other components like HeroBanner, RecipeCard, etc. */}
      <Blogs blogs={blogs} />
    </div>
  );
}


// now create a carousel component that hold 3 latest blogs card onload and after the slide click it load 1 by 1 blogs cards. carousel should be very smooth scrolling and UI should be very clear and attractive as per modern design, explain the code and concepts that used for it.