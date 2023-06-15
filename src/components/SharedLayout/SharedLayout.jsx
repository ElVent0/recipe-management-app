import { SharedLayoutStyled, ContentContainer } from "./SharedLayout.styled";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
