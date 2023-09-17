import React from "react";
import Message from "./MessageComponent";

const HistoryMessage = ({ messages }) => {
  
  const sortedMessages = [...messages].sort((a, b) => {
    return new Date(b.time) - new Date(a.time);
  });

  return (
    <div>
      {sortedMessages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default HistoryMessage;
