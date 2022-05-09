import { LoginRegister } from "../components/LoginPage/LoginRegister";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AddDogForm } from "../components/AddDog/AddDogForm";
import { useState } from "react";

export const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user.email);
      console.log(user.email);
    } else {
      setIsAuth(false);
    }
  });
  return !isAuth ? <LoginRegister /> : <AddDogForm />;
};
