import { useSession } from "@supabase/auth-helpers-react";
import UnauthorizedUser from "../UnauthorizedUser/UnauthorizedUser";

const SessionProvider = ({ children }) => {
  const session = useSession();

  return <>{session ? children : <UnauthorizedUser />}</>;
};

export default SessionProvider;
