import React, { useState, useEffect } from "react";

const Message = ({ message }) => {
  const [isSentMessage, setIsSentMessage] = useState(false);
  const [messageTime, setMessageTime] = useState("");
  const [isHintOpen, setIsHintOpen] = useState(false);

  useEffect(() => {
    if (message && message.contact === "My") {
      setIsSentMessage(true);
    } else {
      setIsSentMessage(false);
    }

    if (message && message.time) {
      const dateTimeParts = message.time.split(" ");
      if (dateTimeParts.length >= 2) {
        const timePart = dateTimeParts[1];
        const [hour, minute] = timePart.split(":");
        setMessageTime(`${hour}:${minute}`);
      }
    }
  }, [message]);

  const handleDoubleClick = () => {
    // Quando a mensagem for clicada duas vezes, abra o hint
    setIsHintOpen(true);
  };

  const handleEditClick = () => {
    // Implemente a lógica para editar a mensagem aqui
    // Você pode abrir um modal de edição, por exemplo
    // Lembre-se de fechar o hint após a ação ser concluída
    setIsHintOpen(false);
  };

  const handleDeleteClick = () => {
    // Implemente a lógica para apagar a mensagem aqui
    // Lembre-se de fechar o hint após a ação ser concluída
    setIsHintOpen(false);
  };

  return (
    <div
      className={`message-container ${isSentMessage ? "sent" : "received"}`}
      onDoubleClick={handleDoubleClick}
    >
      <div className="message">
        <div className="scope-message">
          <p className="context-message">{message.context}</p>
        </div>
        <div className="time-message">
          {messageTime} <i className="fa-solid fa-check-double px-"></i>
        </div>
      </div>
      {isHintOpen && (
        <div className="hint">
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={handleDeleteClick}>Apagar</button>
        </div>
      )}
    </div>
  );
};

export default Message;
