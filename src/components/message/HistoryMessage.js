import React, { useEffect, useRef, useState, useMemo } from "react";
import Message from "./MessageComponent";

const HistoryMessage = ({ messages, onRemoveMessage }) => {
  const [messageList, setMessageList] = useState([]);
  const historyScrollRef = useRef(null);

  const sortedMessages = useMemo(
    () => [...messageList].sort((a, b) => new Date(b.time) - new Date(a.time)),
    [messageList]
  );

  useEffect(() => {
    setMessageList([...messages]);
  }, [messages]);

  useEffect(() => {
    const historyScroll = historyScrollRef.current;

    if (historyScroll) {
      const isScrolledToBottom = historyScroll.scrollHeight - historyScroll.scrollTop === historyScroll.clientHeight;
      if (!isScrolledToBottom) {
        historyScroll.scrollTop = historyScroll.scrollHeight;
      }
    }
  }, [messageList]);

  const removeMessage = (messageToRemove) => {
    const updatedMessageList = messageList.filter((message) => message !== messageToRemove);
    setMessageList(updatedMessageList);
    emitRemoveMessageEvent(messageToRemove);
  };

  const emitRemoveMessageEvent = (messageToRemove) => {
    if (onRemoveMessage) {
      onRemoveMessage(messageToRemove);
    }
  };

  return (
    <div className="history-scroll" ref={historyScrollRef}>
      <div className="container-history-message">
        {sortedMessages.map((message, index) => (
          <Message key={index} message={message} onRemove={() => removeMessage(message)} />
        ))}
      </div>
    </div>
  );
};

export default HistoryMessage;

