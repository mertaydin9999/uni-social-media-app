import React from "react";
import { useFetchUsersQuery } from "../store";
import { useGetLoginQuery } from "../store";

function UserProfile() {
  const { data: user, isLoading, isError } = useFetchUsersQuery();
  const { data: loginData } = useGetLoginQuery();

  // loginData, API'den dönen tüm verileri içerir
  // Son eklenen veriye erişmek için:
  const lastLogin = loginData && loginData[loginData.length - 1];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch user data</div>;
  }

  return (
    <div>
      <h1>Profil Sayfası</h1>
      <p>Ad: {user.name}</p>
      <p>Soyad: {user.surname}</p>
      <p>E-posta: {lastLogin.email}</p>
    </div>
  );
}

export default UserProfile;
