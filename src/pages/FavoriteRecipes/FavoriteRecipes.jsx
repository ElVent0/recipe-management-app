import SessionProvider from "../../components/SessionProvider/SessionProvider";
import { PageHeader, CreateButton } from "./FavoriteRecipes.styled";

const FavoriteRecipes = () => {
  return (
    <SessionProvider>
      {/* <PageHeader>
        <CreateButton>Create new</CreateButton>
      </PageHeader> */}
    </SessionProvider>
  );
};

export default FavoriteRecipes;
