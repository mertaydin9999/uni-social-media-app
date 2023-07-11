import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchUsersQuery } from "../store";
import { useGetLoginQuery } from "../store";
import { useGetMessageQuery, useAddMessageMutation } from "../store";
import { useFetchAdvertsQuery } from "../store";
import { useFormik } from "formik";
import "../styles/MyMessages.css";
import AnonimAvatar from "../assets/non-profile.png";
function MyMessages() {
  const { id } = useParams();
  const { data: users } = useFetchUsersQuery();
  const { data: adverts } = useFetchAdvertsQuery();
  const { data: loginData } = useGetLoginQuery();
  const { data: messages } = useGetMessageQuery();
  const [sendMessage] = useAddMessageMutation();
  const [profileLoginData, setProfileLoginData] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [receiverUser, setReceiverUser] = useState(null);
  const [myReceiverMessages, setMyReceiverMessages] = useState(null);
  const [mySenderMessages, setMySenderMessages] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    if (loginData && users && messages) {
      const lastLogin = loginData.data[loginData.length - 1];
      const foundProfileData = users.data.find(
        (user) => user.email === lastLogin.data.email
      );
      const myReceiverMessages = messages.data.filter(
        (message) => message.receiverEmail === foundProfileData?.email
      );

      const mySenderMessages = messages.data.filter(
        (message) => message.senderEmail === foundProfileData?.email
      );

      setMyReceiverMessages(myReceiverMessages);
      setMySenderMessages(mySenderMessages);
      setProfileLoginData(foundProfileData);
    }
  }, [loginData, users, messages]);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        senderEmail: profileLoginData?.email || "",
        receiverEmail: receiver?.email || "",
        date: new Date().toISOString(),
        message: "",
        advertId: id || "",
      },
      onSubmit: async (values, actions) => {
        values.senderEmail = profileLoginData.email;
        values.receiverEmail = receiver.email;
        await sendMessage(values);
        console.log(values);
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        actions.resetForm();
        // Mesajı gönderme mantığını burada uygula
        console.log("Mesaj gönderildi:");
        console.log("Alıcı:", receiver?.email);
        console.log("Gönderen:", profileLoginData?.email);
        console.log("Mesaj:", values.message);
        console.log("Tarih:", values.date);
        console.log("advertId:", values.advertId);
        console.log(profileLoginData);

        // Mesajı gönderdikten sonra formu sıfırla
      },
    });
  const handleUserClick = (user) => {
    setReceiver(user);
    setSelectedUser(user);
  };
  console.log(
    selectedUser,
    myReceiverMessages
      ?.filter((message) => message.senderEmail == selectedUser?.email)
      .map((message) => message),
    mySenderMessages
      ?.filter((message) => message.receiverEmail == selectedUser?.email)
      .map((message) => message)
  );

  const combinedMessages = [
    ...(myReceiverMessages || []),
    ...(mySenderMessages || []),
  ].filter(
    (message) =>
      message.senderEmail === selectedUser?.email ||
      message.receiverEmail === selectedUser?.email
  );

  console.log(combinedMessages);
  return (
    <div className="my-messages-container">
      <div className="chat-users-left-side">
        {users &&
          users
            .filter((user) => {
              return messages?.some(
                (message) =>
                  (message.senderEmail === user.email &&
                    message.receiverEmail === profileLoginData?.email) ||
                  (message.senderEmail === profileLoginData?.email &&
                    message.receiverEmail === user.email)
              );
            })
            .map((user) => (
              <ul key={user.id} className="chat-users-left-side-infos-list">
                <li
                  className="chat-users-left-side-infos"
                  onClick={() => handleUserClick(user)}
                >
                  <div className="chat-users-left-side-infos-img-div">
                    <img src={user.profilePicture} alt="" />
                  </div>
                  <span className="chat-users-left-side-infos-name-span">
                    {user.name + " " + user.surname}
                  </span>
                </li>
                <hr />
              </ul>
            ))}
      </div>
      <div className="messages-right-side">
        <div className="chat-area-reciever-side">
          <div className="chat-infos-and-prof-pic">
            <div className="reciever-profile-pic">
              <img
                src={
                  selectedUser?.profilePicture
                    ? selectedUser?.profilePicture
                    : AnonimAvatar
                }
                alt=""
              />
            </div>
            <div className="reciever-infos">
              <div>
                <span>
                  {" "}
                  {(selectedUser?.name ? selectedUser?.name : "") +
                    " " +
                    (selectedUser?.surname ? selectedUser?.surname : "")}
                </span>
                <span>
                  {selectedUser?.address ? "," + selectedUser?.address : ""}
                </span>
              </div>
              <span>{receiver?.title}</span>
            </div>
          </div>

          <div className="reciever-advert-pic">
            {/* <img src={receiver?.images[0]} alt="" /> */}
          </div>
        </div>

        <div className="chat-area-messages">
          <ul className="chat-area-message-show">
            {combinedMessages &&
              combinedMessages
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((message) => (
                  <li
                    key={message.id}
                    className={
                      message.senderEmail === profileLoginData?.email
                        ? "message-right-side"
                        : "message-left-side"
                    }
                  >
                    {message.message}
                  </li>
                ))}
          </ul>
        </div>
        <hr className="top-send-message-hr" />
        <div className="chat-send-message">
          <form className="chat-send-message-form" onSubmit={handleSubmit}>
            <textarea
              className="send-massage-text-area"
              rows={2}
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyMessages;
