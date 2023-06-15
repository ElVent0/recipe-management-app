import { useSession } from "@supabase/auth-helpers-react";
import UnauthorizedUser from "../../components/UnauthorizedUser/UnauthorizedUser";

const UserAddedRecipes = () => {
  const session = useSession();

  return <>{session ? <div>abcd</div> : <UnauthorizedUser />}</>;
};

export default UserAddedRecipes;
