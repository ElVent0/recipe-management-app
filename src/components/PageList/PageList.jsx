import { useEffect, useState } from "react";
import { PageListStyled, PageItem } from "./PageList.styled";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const PageList = ({ recipeList }) => {
  const [recipesList, setRecipesList] = useState();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("library").select("*");

      if (!error) {
        setRecipesList(data);
      }
    };

    getData();
  }, []);

  <PageListStyled>
    {recipesList.map((item) => (
      <PageItem key={item}>{item}</PageItem>
    ))}
  </PageListStyled>;
};

export default PageList;
