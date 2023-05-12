import React from "react";
import { useFetchUsersQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UserListItem from "./userListItem";
function usersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();

  let content;
  if (isFetching) {
    content = <Skeleton variant="rectangular" sx={{ width: "100%" }} />;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return <div>{content}</div>;
}

export default usersList;
