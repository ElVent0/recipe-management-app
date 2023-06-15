import SessionProvider from "../../components/SessionProvider/SessionProvider";
import PageList from "../../components/PageList/PageList";
import NewItemModal from "../../components/NewItemModal/NewItemModal";
import { PageHeader, CreateButton } from "./UserAddedRecipes.styled";
import { useState } from "react";

const UserAddedRecipes = () => {
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
      <PageList />
      {isModalOpen && <NewItemModal onOpenModal={onOpenModal} />}
    </SessionProvider>
  );
};

export default UserAddedRecipes;
