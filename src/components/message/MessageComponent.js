import React, { useState, useEffect } from "react";

const Message = ({ message, onRemove }) => {
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
    if(isSentMessage === true) {
      setIsHintOpen(true);
    } else {
      window.alert('You can only delete your messages')
    }
  };

  const handleDeleteClick = () => {
    if (onRemove) {
      onRemove(message);
    }
    setIsHintOpen(false);
  };

  return (
    <div
      className={`message-container ${isSentMessage ? "sent" : "received"}`}
      onDoubleClick={handleDoubleClick}
    >
      <div className={`message ${isSentMessage ? "sent-scope" : "received"}`}>
        <div className="scope-message">
          <p className={`context-message ${isSentMessage ? "pr-14" : "pl-14"}`}>{message.context}</p>
        </div>
        <div className={`time-message  ${isSentMessage ? "justify-end" : "justify-start"}`}>
          {messageTime} <i className="fa-solid fa-check-double px-1 "></i>
        </div>
      </div>
      {isHintOpen && (
        <div className="hint-sent">
          <button onClick={handleDeleteClick}><i className="fa-solid fa-trash"></i></button>
        </div>
      )}
    </div>
  );
};

export default Message;
