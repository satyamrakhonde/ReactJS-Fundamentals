import React, { useState } from "react";
import './App.css';
import { Header } from './Components/Header';
import AddContact from './Components/AddContact';
import { ContactList } from './Components/ContactList';


function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "satyam",
  //     email: "satyam@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "aefad",
  //     email: "adf@gmail.com"
  //   }
  // ]
  return (
    <>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </>
  );
}

export default App;
