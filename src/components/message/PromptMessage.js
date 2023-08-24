const PromptMessage = () => {
  return (
    <>
      <div className="prompt-container">
        <div className="header-options w-16">
          <i className="fa-solid fa-face-laugh"></i>
          <i className="fa-solid fa-plus"></i>
        </div>

        <div className="w-full items-center flex justify-center">
          <input className="input-prompt" type="text" placeholder="Message"></input>
        </div>

        <div className="header-options">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    </>
  );
};

export default PromptMessage;
