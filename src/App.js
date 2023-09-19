

import React, { useState, useEffect } from "react";
import "./styles/Style.css";
import HeaderListContacts from "./components/list_contacts/HeaderListContacts";
import ListContact from "./components/list_contacts/ListContacts";
import HeaderMessage from "./components/message/HeaderMessage";
import PromptMessage from "./components/message/PromptMessage";
import HistoryMessage from "./components/message/HistoryMessage";
import conversations from "./data";

// import imagens
import my from "./assets/images/my-image.png";

function App() {
  const [showMessage, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [historyMessages, setHistoryMessages] = useState({});

  useEffect(() => {
    const historyMessageData = {};
    conversations.forEach((contact) => {
      historyMessageData[`historyMessage${contact.name}`] =
        contact.messagesSent.map((message) => ({ ...message }));
    });
    setHistoryMessages(historyMessageData);
  }, []);

  const handleShowMessage = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const handleMessageSent = (message) => {
    const contactName = selectedContact.name;
    const updatedHistoryMessages = {
      ...historyMessages,
      [`historyMessage${contactName}`]: [
        ...historyMessages[`historyMessage${contactName}`],
        message,
      ],
    };
    console.log(updatedHistoryMessages);
    setHistoryMessages(updatedHistoryMessages);
  };

  const handleRemoveMessage = (messageToRemove) => {
    const contactName = selectedContact.name;
    const updatedHistoryMessages = {
      ...historyMessages,
      [`historyMessage${contactName}`]: historyMessages[
        `historyMessage${contactName}`
      ].filter((message) => message !== messageToRemove),
    };
    setHistoryMessages(updatedHistoryMessages);
  };

  return (
    <div className="scope-app">
      {/* Aqui vai ficar os componentes da lista de contatos */}
      <div className="scope-list-contact">
        {/* Cabeçalho para lista de contatos */}
        
        <HeaderListContacts profileImage={my} />

        <ListContact
          contacts={conversations}
          onChildClick={handleShowMessage}
        />
      </div>

      {/* Aqui vai ficar os componentes da conversa */}
      <div className="scope-conversation">
        {showMessage && (
          <>
            <HeaderMessage contact={selectedContact} />

            <HistoryMessage
              messages={
                historyMessages[`historyMessage${selectedContact.name}`]
              }
              onRemoveMessage={handleRemoveMessage}
            />

            <PromptMessage
              contact={selectedContact}
              onChildClick={handleMessageSent}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
