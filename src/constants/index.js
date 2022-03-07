const new_base_url = "https://backend-recetas.herokuapp.com/";
const recipes = "recetas";
const recipe_search = "recetas/";

export const recipesGet = () => `${new_base_url}${recipes}`;
export const recipeGet = (id) => `${new_base_url}${recipe_search}${id}`;
