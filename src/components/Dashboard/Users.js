import React,{useState,useEffect} from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Users = ({ user, refetch }) => {
    const [show, setShow] = useState([])
  const { email, role,_id } = user;

//   useEffect(() => {
//     fetch('https://ancient-hamlet-69799.herokuapp.com/user')
//       .then((res) => res.json())
//       .then((data) => setShow(data));
//   }, []);

  const makedelete = id =>{
    const proceed =window.confirm('are you want to delete?');
    if(proceed){
        console.log('deleted')
        
fetch(`https://ancient-hamlet-69799.herokuapp.com/user/${id}`,{
    method:'DELETE',
})
.then(res => res.json())
.then(data =>console.log(data));
const remain = show.filter(user => user._id !==id);
setShow(remain);
    }
};





  const makeAdmin = () => {
    console.log("what is problem");
    fetch(`https://ancient-hamlet-69799.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Succesfully made an Admin", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    
      })
    };
    

  
  return (
    <tr>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={ () =>makedelete(user._id)} className="btn btn-xs">Remove User</button>
      </td>

      <ToastContainer />
    </tr>
  );
};

export default Users;
