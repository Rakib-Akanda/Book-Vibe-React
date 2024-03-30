import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const handleSignUp = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
        <button onClick={handleSignUp}>Sign Up</button>
      {user && (
        <div>
          <h2>Name: {user.displayName} </h2>
          <h2>Email: {user.email}</h2>
          <img src={user.photoURL} />
        </div>
      )}
      {
        error && (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
      }
    </div>
  );
};

export default SignUp;
