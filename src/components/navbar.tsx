import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  console.log(auth);
  const [user] = useAuthState(auth);

  return (
    <nav>
      <div className="menu">
        <Link to="/">Home</Link>
        { !user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}
        
      </div>
      {user && (
        <div className="navUserInfo">
          <img src={user?.photoURL || ""} />
          <h3>{user?.displayName}</h3>
          <button onClick={async () => await signOut(auth)}>Log Out</button>
        </div>
      )}
    </nav>
  );
};
