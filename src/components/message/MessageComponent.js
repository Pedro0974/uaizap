import React, { useState, useEffect } from "react";

const Message = ({ message }) => {
  const [isSentMessage, setIsSentMessage] = useState(false);

  useEffect(() => {
    console.log(message);
    if (message && message.contact === "My") {
      setIsSentMessage(true);
    } else {
      setIsSentMessage(false);
    }
  }, [message]);

  return (
    <div className={`message-container ${isSentMessage ? "sent" : "received"}`}>
      <div className="scope-message">
        <h2 className="name-contact-message">{message.contact}</h2>
        <p className="context-message">{message.context}</p>
      </div>
      <div className="time-message">
        {message.time} <i className="fa-solid fa-check-double"></i>
      </div>
    </div>
  );
};

export default Message;
