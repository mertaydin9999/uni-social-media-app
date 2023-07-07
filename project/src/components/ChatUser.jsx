import React from "react";

function ChatUser({ user, onClick }) {
  return (
    <div className="chat-user" onClick={() => onClick(user)}>
      <img src={user.profilePicture} alt="" />
      <div className="user-info">
        <span>{user.name + " " + user.surname}</span>
        <span>{user.address}</span>
      </div>
    </div>
  );
}

export default ChatUser;
