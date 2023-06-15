import {
  HeaderStyled,
  LogoName,
  Logo,
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  LogInOut,
} from "./Header.styled.jsx";
import logo from "../../media/logo.png";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const onLogout = async () => {
    await supabase.auth.signOut();
  };

  const onLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        console.log(error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HeaderStyled>
      <Logo src={logo} alt="Logo" width="34" height="34" />
      <LogoName>Recipe management</LogoName>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/">Recipe list</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="added">Collection</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      {session ? (
        <>
          <LogInOut onClick={onLogout}>Logout</LogInOut>
        </>
      ) : (
        <>
          <LogInOut onClick={onLogin}>
            <FcGoogle />
            Login
          </LogInOut>
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
