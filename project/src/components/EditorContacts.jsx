import { useState } from "react";
import React from "react";
import { useGetContactQuery } from "../store";

function EditorContacts() {
  const { data: contacts, isLoading, isError } = useGetContactQuery();
  const [selectedEmail, setSelectedEmail] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching contacts</div>;
  }

  return (
    <div className="contact-list">
      {contacts.data.map((contact) => (
        <div key={contact.id} className="contact-item">
          <h3>{contact.email}</h3>
          <p>{contact.message}</p>
        </div>
      ))}
    </div>
  );
}

export default EditorContacts;
