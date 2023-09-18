import React, { useEffect, useRef } from "react";
import Message from "./MessageComponent";

const HistoryMessage = ({ messages }) => {
  const sortedMessages = [...messages].sort((a, b) => {
    return new Date(b.time) - new Date(a.time);
  });

  const historyScrollRef = useRef(null);

  useEffect(() => {
    const historyScroll = historyScrollRef.current;
    if (historyScroll) {
      historyScroll.scrollTop = 0;
    }
  }, [messages]);

  return (
    <div className="history-scroll" ref={historyScrollRef}>
      <div className="container-history-message">
        {sortedMessages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default HistoryMessage;
