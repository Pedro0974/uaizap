import React, { useState } from "react";

const PromptMessage = ({ contact, onChildClick }) => {
  
  const [message, setMessage] = useState({ contact: "", context: "", time: "" });
  const [selectedContact, setSelectedContact] = useState("");

  const handleContactChange = (e) => {
    setSelectedContact(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const dataAtual = new Date();
  
    const opcoesDeFormato = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
  
    const dataFormatada = dataAtual.toLocaleString("pt-BR", opcoesDeFormato);
  
    const currentTime = dataFormatada;
    const messageText = message.context.trim();
  
    if (messageText === "") {
      window.alert('Context field cannot be empty')
      return;
    }
    if(selectedContact === "") {
      window.alert('Contact field cannot be empty')
      return;
    }
  
    setMessage({ contact: selectedContact, context: messageText, time: currentTime });
  
    onChildClick({ contact: selectedContact, context: messageText, time: currentTime });
  
    setMessage({ ...message, context: "" });
  };
  

  return (
    <>
      <div className="prompt-container">
        <div className="header-options flex items-center gap-3">
          <select className="selectUser" value={selectedContact} onChange={handleContactChange}>
            <option value="">Select User</option>
            <option value="My">My</option>
            <option value={contact.name}>{contact.name}</option>
          </select>
        </div>

        <div className="w-full items-center flex justify-center">
          <input
            className="input-prompt"
            type="text"
            placeholder="Message"
            value={message.context} 
            onChange={(e) => setMessage({ ...message, context: e.target.value })} 
            onKeyDown={handleKeyDown}
          />
          <button className="header-options ml-4" onClick={handleSendMessage}>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>

        <div className="header-options">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    </>
  );
};

export default PromptMessage;
