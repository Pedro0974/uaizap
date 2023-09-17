import React, { useState, useEffect } from "react";
import "./styles/Style.css";
import HeaderListContacts from "./components/list_contacts/HeaderListContacts";
import ListContact from "./components/list_contacts/ListContacts";
import HeaderMessage from "./components/message/HeaderMessage";
import PromptMessage from "./components/message/PromptMessage";
import HistoryMessage from "./components/message/HistoryMessage";
import conversations from "./data";

// import imagens
import man from "./assets/images/image-man.png";

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
  

  return (
    <div className="bg-bgMessage h-[100vh] flex w-full">
      {/* Aqui vai ficar os componentes da lista de contatos */}
      <div className="border-r-2 border-colorIcons/30 w-[40%] h-full">
        {/* Cabeçalho para lista de contatos */}
        <HeaderListContacts profileImage={man} />

        <ListContact
          contacts={conversations}
          onChildClick={handleShowMessage}
        />
      </div>

      {/* Aqui vai ficar os componentes da conversa */}
      <div className="w-full flex flex-col justify-between">
        {showMessage && (
          <>
            <HeaderMessage contact={selectedContact} />
 
            <HistoryMessage messages={historyMessages[`historyMessage${selectedContact.name}`]} />

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
