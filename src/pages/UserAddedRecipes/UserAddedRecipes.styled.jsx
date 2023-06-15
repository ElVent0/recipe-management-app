import styled from "styled-components";

export const PageHeader = styled.div`
  padding: 20px 0;
  width: 1160px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid #d3d0cf;
`;

export const CreateButton = styled.button`
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
`;
