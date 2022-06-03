import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

export default function Profile() {

  const [user, loading] = useAuthState(auth);


  return (
    <div>
<div className="card w-96 bg-base-100 shadow-xl text-center mx-auto">
  <div className="card-body">
    <h2 className="card-title text-justify">My Profile!</h2>
    <p className='text-justify'>{user.email} </p>
    <p className='text-justify'>{user.displayName} </p>
    <div className="card-actions justify-end">
    <Link className='btn btn-primary' to="/onlyonepart">Edit Now</Link>
    </div>
  </div>
</div>



    </div>
  )
}
