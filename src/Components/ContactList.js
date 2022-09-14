import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = (props) => {

    console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact}/>
    );
  });
  return (
    <div className="ui called list">{renderContactList}</div>

  );
};
