import React from "react";
import Users from './Users';
import Progressing from '../common/Progressing'
import { useQuery } from "react-query";

const User = () => {


  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("user", () =>
    fetch("https://ancient-hamlet-69799.herokuapp.com/user").then((res) => res.json())
  );
console.log(error);

  console.log(users,'user is')
  if (isLoading) {
    return <Progressing /> ;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make Admin </th>
              <th>cancel user</th>
            </tr>
          </thead>
          <tbody>

            {users.length && users.map((user) => (
              <Users key={user._id} user={user} refetch={refetch}></Users>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
