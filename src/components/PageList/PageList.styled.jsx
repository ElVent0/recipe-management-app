import styled from "styled-components";

export const PageListStyled = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PageItem = styled.li`
  background: #ffffff;
  width: 278px;
  border-radius: 8px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #342826;
  margin-bottom: 8px;
`;

export const ItemIngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Item = styled.li`
  font-size: 14px;
  line-height: 17px;
  color: #5c6261;
  background-color: #f6c03b;
  padding: 2px 4px;
  border-radius: 4px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #5c6261;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

export const ButtonEdit = styled.button`
  display: block;
  background-color: #f6c03b;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 6px 10px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: #f6a83b;
  }
`;

export const ButtonDelete = styled.button`
  display: block;
  background-color: #5c6261;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  padding: 6px 10px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: #505050;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: #5c6261;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 80%;
  display: block;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  margin-bottom: 4px;
  margin-bottom: 10px;
  &:focus {
    border: 1px solid #f6c03b;
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
`;

export const IngredientItem = styled.li`
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid #f6c03b;
  /* color: #fff; */
`;

export const ButtonAdd = styled.button`
  width: 60px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
  border-radius: 4px;
  color: #3d3d3d;
  font-size: 14px;
  line-height: 16px;
  margin-left: 8px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background: #d7d7d7;
  }
`;

export const Textarea = styled.textarea`
  width: 80%;
  display: block;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  padding: 6px 10px;
  font-size: 16px;
  line-height: 20px;
  color: #3d3d3d;
  margin-bottom: 4px;
  &:focus {
    border: 1px solid #f6c03b;
  }
`;
