export const getData = async (supabase, setRecipesList) => {
  const { data, error } = await supabase.from("recipes").select("*");

  if (error) {
    console.error(error);
  } else {
    setRecipesList(data);
  }
};

export const getUserData = async (supabase, session, setRecipesList) => {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("user_id", session.user.id);

  if (error) {
    console.error(error);
  } else {
    setRecipesList(data);
  }
};
export const onCreateRecipe = async (
  e,
  supabase,
  session,
  recipeName,
  recipeDescription,
  recipeIngredients
) => {
  e.preventDefault();

  try {
    const { error } = await supabase
      .from("recipes")
      .insert({
        user_id: session.user.id,
        name: recipeName,
        description: recipeDescription,
        ingredients: recipeIngredients,
      })
      .single();

    if (error) {
      console.error(error);
      return;
    } else {
      alert("Recipe created");
      window.location.reload();
    }
  } catch (e) {
    console.error("insert error", e);
  }
};

export const onDeleteRecipe = async (supabase, id) => {
  try {
    supabase
      .from("recipes")
      .delete()
      .match({
        id: id,
      })
      .then(() => {
        alert("Recipe deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (e) {
    console.log("delete error", e);
  }
};

export const onChangeRecipe = (
  supabase,
  recipeName,
  recipeDescription,
  recipeIngredients,
  id
) => {
  try {
    supabase
      .from("recipes")
      .update({
        name: recipeName,
        description: recipeDescription,
        ingredients: recipeIngredients,
      })
      .match({
        id: id,
      })
      .then(() => {
        alert("Recipe changed");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Помилка оновлення рядка:", error);
      });
  } catch (e) {
    console.error(e);
  }
};
