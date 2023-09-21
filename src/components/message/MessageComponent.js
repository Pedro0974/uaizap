import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const MessageContainer = styled.div`
  background-color: #2A3942;
  margin: 0.5rem 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &.sent-scope {
    background-color: #025C4C;
  }

  &.received {
    color: #D9D9D9;
  }
`;

const ScopeMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ContextMessage = styled.p`
  word-break: break-word;
  ${({ isSentMessage }) =>
    isSentMessage ? "padding-left: 1.4rem;" : "padding-right: 1.4rem;"}
`;

const TimeMessage = styled.div`
  font-size: 0.75rem;
  display: flex;
  justify-content: ${({ isSentMessage }) =>
    isSentMessage ? "flex-end" : "flex-start"};
  align-items: center;
`;

const CheckIcon = styled.i`
  padding: 0 0.1rem;
`;

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
    if (isSentMessage === true) {
      setIsHintOpen(true);
    } else {
      window.alert("You can only delete your messages");
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
      <MessageContainer
        className={`message ${isSentMessage ? "sent-scope" : "received"}`}
      >
        <ScopeMessage className="scope-message">
          <ContextMessage
            className={`context-message ${isSentMessage ? "pr-14" : "pl-14"}`}
            isSentMessage={isSentMessage}
          >
            {message.context}
          </ContextMessage>
        </ScopeMessage>
        <TimeMessage
          className={`time-message ${
            isSentMessage ? "justify-end" : "justify-start"
          }`}
          isSentMessage={isSentMessage}
        >
          {messageTime} <CheckIcon className="fa-solid fa-check-double px-1" />
        </TimeMessage>
      </MessageContainer>
      {isHintOpen && (
        <div className="hint-sent">
          <button onClick={handleDeleteClick}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
