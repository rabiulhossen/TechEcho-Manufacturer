import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Progressing from "../common/Progressing";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log(user)
  const location = useLocation();
  // const [sendEmailVerification, sending, error] =
  //   useSendEmailVerification(auth);

  if (loading) {
    return <Progressing />;
  }

  if(!user){
    return <Navigate to="/login" state ={{from: location}} replace></Navigate>
}
  

  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return (
  //     <div className="text-center mt-5">
  //       <h3 className="text-danger">Your Email is not verified!!</h3>
  //       <h5 className="text-yellow-600  p-3 font-bold">
  //         {" "}
  //         Please Verify your email address
  //       </h5>

        {/* <button
            className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                // }}
            >
                Send Verification Email Again
    //         </button> */}
    //     <ToastContainer
    //       position="top-center"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //     ></ToastContainer>
    //  </div>
    
  

  return children;
};

export default RequireAuth;
