import React, { useState } from "react";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Progressing from "../common/Progressing";

const RequireAuth = ({ children }) => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (sending || loading) {
    return <Progressing></Progressing>;
  }
  if (error) {
    return <p>Try again Erorr: {error.message}</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div></div>;
  return children;
};
export default RequireAuth;
