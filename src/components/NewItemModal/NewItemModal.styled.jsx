import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(52, 40, 38, 0.4);
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Modal = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #342826;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background-color: transparent;
  color: #483e3c;
  opacity: 0.6;
  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 1;
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
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
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

export const ButtonSubmit = styled.button`
  width: 128px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6c03b;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  transition: 0.3s;
  &:hover,
  &:focus {
    background: #f6ab3b;
  }
  margin-top: 20px;
`;
