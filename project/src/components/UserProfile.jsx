import React from "react";
import { useFetchUsersQuery } from "../store";

function UserProfile() {
  const { data: users } = useFetchUsersQuery();

  // Kullanıcının verilerini al
  const user = users && users.length > 0 ? users[0] : null;

  if (!user) {
    return <div>Kullanıcı bulunamadı.</div>;
  }

  return (
    <div>
      <h2>Kullanıcı Profili</h2>
      <p>Ad: {user.firstName}</p>
      <p>Soyad: {user.lastName}</p>
      <p>E-posta: {user.email}</p>
    </div>
  );
}

export default UserProfile;
