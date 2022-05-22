import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Progressing from '../common/Progressing';
import google from '../../resources/img/google.png'

const GoogleSign = () => {


     const [SignInWithGoogle,user,loading,error] = useSignInWithGoogle(auth);
     const navigate =useNavigate();
 
 let errorElement;
 if(loading){
     return <Progressing />
 };
 
 if(error){
     errorElement =<p className="text-danger"> Error:{error?.message}</p>
 }
 if(user){
     navigate("/home");
 }
     return (
          <div>
   
  <div class="divider">OR</div>
 
               {errorElement}

               <div className="">
        <button onClick={() => SignInWithGoogle()} className="btn btn-secondary btn-wide px-2">
          <img style={{ width: "48px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
          </div>
     );
};

export default GoogleSign;