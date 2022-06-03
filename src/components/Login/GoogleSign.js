import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Progressing from '../common/Progressing';
import google from '../../resources/img/google.png'

const GoogleSign = () => {


     const [SignInWithGoogle,guser,gloading,gerror] = useSignInWithGoogle(auth);
     const navigate =useNavigate();
 
 let errorElement;
 if(gloading){
     return <Progressing />
 };
 
 if(gerror){
     errorElement =<p className="text-danger"> Error:{gerror?.message}</p>
 }
 if(guser){
     navigate("/dashboard");
 }
     return (
          <div>
   
  <div className="divider">OR</div>
 
               {errorElement}

               <div className="">
        <button onClick={() => SignInWithGoogle()} className="btn btn-secondary btn-wide px-2">
          <img style={{ width: "48px" }} src={google} alt="" />
          <span className="px-2 font-serif font-semibold">Google Sign In</span>
        </button>
      </div>
          </div>
     );
};

export default GoogleSign;