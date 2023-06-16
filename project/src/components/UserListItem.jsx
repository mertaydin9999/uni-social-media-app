import React from "react";
import { useFetchUsersQuery } from "../store";
function userListItem({ user }) {
  return (
    <div>
      <div>{user.email}</div>
      <div>{user.password}</div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
    </div>
  );
}

export default userListItem;
