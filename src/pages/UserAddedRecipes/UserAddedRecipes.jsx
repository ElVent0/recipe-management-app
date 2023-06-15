import SessionProvider from "../../components/SessionProvider/SessionProvider";
import PageList from "../../components/PageList/PageList";
import NewItemModal from "../../components/NewItemModal/NewItemModal";
import { PageHeader, CreateButton } from "./UserAddedRecipes.styled";
import { useState } from "react";

const UserAddedRecipes = () => {
  const [recipeList, setRecipeList] = useState([1, 2, 3]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  return (
    <SessionProvider>
      <PageHeader>
        <CreateButton onClick={onOpenModal}>Create new</CreateButton>
      </PageHeader>
      <PageList recipeList={recipeList} />
      {isModalOpen && <NewItemModal onOpenModal={onOpenModal} />}
    </SessionProvider>
  );
};

export default UserAddedRecipes;
