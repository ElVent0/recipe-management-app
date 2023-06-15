import { AppStyled } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import RecipeList from "../pages/RecipeList/RecipeList";
import FavoriteRecipes from "../pages/FavoriteRecipes/FavoriteRecipes";
import UserAddedRecipes from "../pages/UserAddedRecipes/UserAddedRecipes";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<RecipeList />} />
          <Route path="/favorite" element={<FavoriteRecipes />} />
          <Route path="/added" element={<UserAddedRecipes />} />
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;
