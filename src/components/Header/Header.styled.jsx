import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 68px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #342826;
`;

export const LogoName = styled.p`
  color: #ededed;
  margin-left: 10px;
  font-weight: 700;
`;

export const Logo = styled.img`
  display: block;
`;

export const Navigation = styled.nav`
  margin-left: 30px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 14px;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 34px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  padding: 0px 14px;
  color: #fff;
  transition: 0.3s;
  &:hover,
  &:active {
    background-color: #483e3c;
  }
  &.active {
    background-color: #f6c03b;
    color: #483e3c;
  }
`;

export const LogInOut = styled.button`
  font-size: 16px;
  line-height: 20px;
  background-color: #ffffff;
  color: #5c6261;
  width: 90px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
  margin-left: auto;
  &:hover,
  &:active {
    background-color: #eeeeee;
  }
  & > svg {
    margin-right: 8px;
  }
`;
