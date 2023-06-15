import {
  UnauthorizedUserStyled,
  UnauthorizedUserStyledParagraph,
} from "./UnauthorizedUser.styled";

const UnauthorizedUser = () => {
  return (
    <UnauthorizedUserStyled>
      <UnauthorizedUserStyledParagraph>
        You need to log in first
      </UnauthorizedUserStyledParagraph>
    </UnauthorizedUserStyled>
  );
};

export default UnauthorizedUser;
