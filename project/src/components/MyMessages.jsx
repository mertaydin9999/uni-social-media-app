import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchUsersQuery } from "../store";
import { useGetLoginQuery } from "../store";
import { useGetMessageQuery, useAddMessageMutation } from "../store";
import { useFetchAdvertsQuery } from "../store";
import { useFormik } from "formik";
import "../styles/MyMessages.css";

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

  useEffect(() => {
    if (loginData && users && adverts && id) {
      const lastLogin = loginData[loginData.length - 1];
      const foundProfileData = users.find(
        (user) => user.email === lastLogin.email
      );
      const foundReceiver = adverts.find((advert) => advert.id == id);
      const foundRecieverUser = users.find(
        (user) => user.email == foundReceiver.email
      );

      setProfileLoginData(foundProfileData);
      setReceiver(foundReceiver);
      setReceiverUser(foundRecieverUser);
      console.log(foundReceiver);
    }
  }, [loginData, users, adverts, id]);

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
  return (
    <div className="my-messages-container">
      <div className="chat-users-left-side"> </div>
      <div className="messages-right-side">
        <div className="chat-user-info">
          <div className="chat-area-reciever-side">
            <div className="chat-infos-and-prof-pic">
              <div className="reciever-profile-pic">
                <img src={receiverUser?.profilePicture} alt="" />
              </div>
              <div className="reciever-infos">
                <span>{receiverUser?.name + " " + receiverUser?.surname}</span>
                <span>{receiverUser?.address}</span>
                <span>{receiver?.title}</span>
              </div>
            </div>

            <div className="reciever-advert-pic">
              <img src={receiver?.images[0]} alt="" />
            </div>
          </div>
        </div>
        <div className="chat-area-messages">
          <ul className="chat-are-message-show">
            {messages &&
              messages
                .filter(
                  (message) =>
                    message.receiverEmail === receiver?.email ||
                    message.senderEmail === profileLoginData?.email
                )
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
        <div className="chat-send-message">
          <form className="chat-send-message-form" onSubmit={handleSubmit}>
            <textarea
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
