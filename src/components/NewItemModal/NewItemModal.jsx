import ReactDOM from "react-dom";
import {
  Backdrop,
  Modal,
  Title,
  CloseButton,
  Form,
  Label,
  Input,
  Textarea,
  ButtonSubmit,
  IngredientsContainer,
  IngredientList,
  IngredientItem,
  ButtonAdd,
} from "./NewItemModal.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import uniqid from "uniqid";
import { onCreateRecipe } from "../../api/supabase";

const NewItemModal = ({ onOpenModal }) => {
  const supabase = useSupabaseClient();
  const session = useSession();

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

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

  const onSubmitForm = (e) => {
    onCreateRecipe(
      e,
      supabase,
      session,
      recipeName,
      recipeDescription,
      recipeIngredients
    );
    onOpenModal();
  };

  return ReactDOM.createPortal(
    <Backdrop>
      <Modal>
        <Title>New recipe</Title>
        <Form onSubmit={onSubmitForm}>
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

          <ButtonSubmit type="submit">Create</ButtonSubmit>
        </Form>
        <CloseButton onClick={onOpenModal}>
          <AiFillCloseCircle />
        </CloseButton>
      </Modal>
    </Backdrop>,
    document.body
  );
};

export default NewItemModal;
