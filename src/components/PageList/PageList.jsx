import { useEffect, useState } from "react";
import {
  PageListStyled,
  PageItem,
  ItemName,
  ItemIngredientsList,
  Item,
  ItemDescription,
  ButtonsContainer,
  ButtonEdit,
  ButtonDelete,
  Form,
  Label,
  Input,
  Textarea,
  IngredientsContainer,
  IngredientList,
  IngredientItem,
  ButtonAdd,
} from "./PageList.styled";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import uniqid from "uniqid";

const PageList = () => {
  const [recipesList, setRecipesList] = useState(null);
  const supabase = useSupabaseClient();
  const session = useSession();
  const [onEditMode, setOnEditMode] = useState(null);
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("recipes").select("*");

      if (error) {
        console.error(error);
      } else {
        setRecipesList(data);
      }
    };

    const getUserData = async () => {
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

    if (window.location.pathname === "/") {
      getData();
    } else if (window.location.pathname === "/added") {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeleteRecipe = async (id) => {
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

  const onChangeRecipe = (id) => {
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

  const onEdit = (id) => {
    setOnEditMode(id);
  };

  const onStandartMode = () => {
    setOnEditMode(null);
    setRecipeDescription("");
    setCurrentIngredient("");
    setRecipeIngredients([]);
  };

  const onChangeInput = (e) => {
    if (e.target.id === "title") {
      setRecipeName(e.target.value);
    } else if (e.target.id === "description") {
      setRecipeDescription(e.target.value);
    }
  };

  const onChangeCurrentIngredient = (e) => {
    setCurrentIngredient(e.target.value);
  };

  const onAddIngredient = () => {
    setRecipeIngredients((prev) => [...prev, currentIngredient]);
    setCurrentIngredient("");
  };

  console.log(recipesList);

  return (
    <PageListStyled>
      {recipesList &&
        recipesList.map((item) => {
          return (
            <PageItem key={item.id}>
              {onEditMode !== item.id ? (
                <>
                  <ItemName>{item.name}</ItemName>
                  <ItemIngredientsList>
                    {item.ingredients.map((item) => (
                      <Item key={uniqid()}>{item}</Item>
                    ))}
                  </ItemIngredientsList>
                  <ItemDescription>{item.description}</ItemDescription>
                  {window.location.pathname === "/added" && (
                    <ButtonsContainer>
                      <ButtonEdit onClick={() => onEdit(item.id)}>
                        Edit
                      </ButtonEdit>
                      <ButtonDelete onClick={() => onDeleteRecipe(item.id)}>
                        Delete
                      </ButtonDelete>
                    </ButtonsContainer>
                  )}
                </>
              ) : (
                <>
                  <Form onSubmit={() => onChangeRecipe(item.id)}>
                    <Label htmlFor="title">Receipt name</Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      required
                      onChange={onChangeInput}
                      value={recipeName}
                    ></Input>

                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      rows="5"
                      required
                      onChange={onChangeInput}
                      value={recipeDescription}
                    ></Textarea>

                    <Label htmlFor="ingredients">Ingredients</Label>
                    <IngredientsContainer>
                      <Input
                        id="ingredients"
                        name="ingredients"
                        onChange={onChangeCurrentIngredient}
                        value={currentIngredient}
                      ></Input>
                      <ButtonAdd type="button" onClick={onAddIngredient}>
                        Add
                      </ButtonAdd>
                    </IngredientsContainer>
                    <IngredientList>
                      {recipeIngredients.map((item) => (
                        <IngredientItem key={uniqid()}>{item}</IngredientItem>
                      ))}
                    </IngredientList>
                    <ButtonsContainer>
                      <ButtonDelete type="button" onClick={onStandartMode}>
                        Back
                      </ButtonDelete>
                      <ButtonEdit type="submit">Done</ButtonEdit>
                    </ButtonsContainer>
                  </Form>
                </>
              )}
            </PageItem>
          );
        })}
    </PageListStyled>
  );
};

export default PageList;
